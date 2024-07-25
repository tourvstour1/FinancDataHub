import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { openAsBlob, readdir, readFileSync } from 'fs';
import { resolve } from 'path';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { AxiosProviderModel } from 'src/provider/axios.entity';
import { AxiosProvider } from 'src/provider/axios.provicer';

let tokenStore: {
  dateAd: Date;
  token: string;
}[] = [];

@Injectable()
export class ConnectMophService {
  constructor(
    readonly finance: PrismaFinance,
    readonly axios: AxiosProvider
  ) { }

  getMophToken = async () => {
    const payload: AxiosProviderModel = {
      path: process.env['GET_TOKEN'],
      data: null,
      config: {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          user: process.env['MOPH_USER'],
          password_hash: process.env['MOPH_PASSWORD_HASH'],
          hospital_code: process.env['HOSPITAL_CODE'],
        },
      }
    }
    const response = await this.axios.axiosPost(payload)

    if (response.status !== 200) {
   
    } else {
      const item: {
        dateAd: Date;
        token: string;
      } = {
        dateAd: new Date(),
        token: response.data,
      };
      if (tokenStore === undefined) {
        tokenStore.push(item);
        if (tokenStore.length > 0) {
          tokenStore.splice(0, tokenStore.length);
          tokenStore.push(item);
        }
      }
      return response.data;
    }
  };

  sentToClaim = async (pathName: string, claimtype: 'ipd' | 'opd') => {
    const token = tokenStore[0];
    if (token === undefined) {
      const newToken = await this.getMophToken();
      const claim = await this.getF16(newToken, pathName, claimtype);
      return claim;
    } else {
      const claim = await this.getF16(token.token, pathName, claimtype);
      return claim;
    }
  };

  private getF16 = async (token: string, pathName: string, claimtype: 'ipd' | 'opd',) => {
    return new Promise((resolves, reject) => {
      let formData: FormData = new FormData();
      formData.append('type', 'txt');

      const filePath = resolve(__dirname, `../out/${claimtype}/`, pathName);

      readdir(filePath, async (_err, files) => {
        let row = 0;
        files.forEach(async (f) => {
          const pat = resolve(filePath + '/' + f);

          const file = await openAsBlob(pat, { type: 'text/plain' });
          formData.append('file', file, f);

          row += 1;

          if (row === files.length) {
            const formDataEntries = [...formData.entries()];
            const contentLength = formDataEntries.reduce((acc, [key, value]) => {
              if (typeof value === 'string') return acc + value.length;
              if (typeof value === 'object') return acc + value.size;

              return acc;
            }, 0,);
            const fileSize = Math.ceil(contentLength / 1024 / 1024);

            if (fileSize > 49) {
              const dataReject = {
                data: {
                  size: fileSize + 'mb',
                  message: 'ขนาดข้อมูลเยอะเกิน ลดช่วงวันที่ส่งลงอีก',
                },
              };
              resolves(dataReject.data);
            } else {
              resolves(await this.sent(token, formData, pathName, claimtype));
            }
          }
        });
      });
    });
  };

  private sent = async (token: string, data: FormData, pathName: string, claimtype: string) => {
    try {
      const payload: AxiosProviderModel = {
        path: process.env['PRD'],
        data: data,
        config: {
          headers: {
            'Content-type': 'multipart/form-data',
            Authorization: 'Bearer ' + token,
          },
        }
      }
      const res = await this.axios.axiosPost(payload)
      if (res.status === 200) {
        this.logClaim(pathName, claimtype)
        return res.data;
      } else {
        return []
      }
    } catch (err) {
      return err;
    }
  };


  logClaim = (pathName: string, claimtype: string) => {
    const claimNumber = (pathName.replaceAll('\\', '/')).split('/').slice(-1)[0]
    const dateSent = new Date().toISOString().split('T')[0].replaceAll('-', '')
    const filePath = resolve(__dirname, `../out/${claimtype}/`, pathName);

    readdir(filePath, async (_err, files) => {
      files.forEach(async item => {
        if (item === "OPD.txt") {
          const loggerOpd: {
            hn: string,
            seq: string,
            opd_claim_date: string,
            status_code: string,
            opd_claim_number: string,
            staff_number_claim?: string,
            sent_date: string
          }[] = []

          const dataOpd = readFileSync(`${filePath}/${item}`).toString().split('\n')

          dataOpd.forEach((lists: string, index: number) => {
            if (index > 0) {
              const list = lists.split("|")
              const seq = list[4]
              const date = list[2]
              const hn = list[0]
              loggerOpd.push({
                hn: hn,
                seq: seq,
                opd_claim_date: date,
                status_code: '1',
                opd_claim_number: claimNumber,
                sent_date: dateSent
              })
            }
          })

          if (loggerOpd.length > 0) {
            loggerOpd.forEach(async (log) => {
              const findOpdClaimStatus = await this.finance.opd_claim_status.findMany({
                where: {
                  seq: log.seq
                }
              })

              if (findOpdClaimStatus.length > 0) {
                await this.finance.opd_claim_status.updateMany({
                  data: log,
                  where: {
                    seq: log.seq
                  }
                })
              } else {
                await this.finance.opd_claim_status.createMany({
                  data: log
                })
              }
            })
          }
        } else if (item === 'IPD.txt') {
          const loggerIpd: {
            hn: string,
            an: string,
            ipd_claim_date: string,
            status_code: string,
            ipd_claim_number: string,
            staff_number_claim?: string
            sent_date: string
          }[] = []

          const dataIpd = readFileSync(`${filePath}/${item}`).toString().split('\n')
          dataIpd.forEach((lists: string, index: number) => {
            if (index > 0) {
              const list = lists.split("|")
              const an = list[1]
              const date = list[4]
              const hn = list[0]
              loggerIpd.push({
                hn: hn,
                an: an,
                ipd_claim_date: date,
                status_code: '1',
                ipd_claim_number: claimNumber,
                sent_date: dateSent,
              })
            }
          })

          if (loggerIpd.length > 0) {
            loggerIpd.forEach(async (log) => {
              const findIpdClaimStatus = await this.finance.ipd_claim_status.findMany({
                where: {
                  an: log.an
                }
              })

              if (findIpdClaimStatus.length > 0) {
                await this.finance.ipd_claim_status.updateMany({
                  data: log,
                  where: {
                    an: log.an
                  }
                })
              } else {
                await this.finance.ipd_claim_status.createMany({
                  data: loggerIpd
                })
              }
            })
          }
        }
      })
    })
  }

  getResponstStatus = async (hn: string, an: string | '', seq: string | '',) => {
    try {
      const newToken = await this.getMophToken();
      const data: {
        hcode: string
        hn: string
        an?: string | ''
        seq?: string | ''
      } = {
        hcode: process.env['HOSPITAL_CODE'],
        hn: hn,
        an: an,
        seq: seq
      }
      const payload: AxiosProviderModel = {
        path: process.env['CHECKTRANS'],
        data: data,
        config: {
          headers: {
            'Content-type': 'multipart/form-data',
            Authorization: 'Bearer ' + newToken,
          },
        }
      }

      const res = await this.axios.axiosPost(payload)
      if (res.status === 200) {
        return res.data;
      } else {
        return []
      }
    } catch (err) {

    }
  }
}

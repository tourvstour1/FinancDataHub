import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { PrismaHospital } from 'src/prisma/prisma.service.hospital';
import { ItemMaster } from './catalogs.entity';
import { join } from 'path';
import { AdpBody } from './catalogs.body';


@Injectable()
export class CatalogsService {
  constructor(
    readonly hospital: PrismaHospital,
    readonly finance: PrismaFinance,
  ) { }

  async getDrugCatalog() {
    const path = join(__dirname, '..', '..', 'catalogs.sql', 'drugcatalog.sql')
    const sql = readFileSync(path).toString();
    const result = await this.hospital.$queryRawUnsafe(`${sql}`);
    return result;
  }

  async itemMaster() {
    const path = join(__dirname, '..', '..', 'catalogs.sql', 'itemMaster.sql')
    const sql = readFileSync(path).toString();
    const result = await this.hospital.$queryRawUnsafe<ItemMaster[]>(`${sql}`);
    return result;
  }

  async drugFreeSchedule(dru: string) {
    return await this.finance.drug_free_schedule.findMany({
      where: {
        generic_name: {
          contains: dru,
          mode: 'insensitive',
        },
      }, take: 20
    });
  }

  async adpFreeSchedule(adp: AdpBody) {
    let isConddition = {}

    if (adp.adpKeyWord !== '') {
      isConddition = {
        item_name: {
          contains: adp.adpKeyWord,
          mode: 'insensitive',
        }
      }
      if (adp.types.length > 0) {
        Object.assign(isConddition, {
          type: {
            in: adp.types
          }
        })
      }
    } else if (adp.item_code !== '') {
      Object.assign(isConddition, {
        item_code: {
          startsWith: adp.item_code
        }
      })
      if (adp.types.length > 0) {
        Object.assign(isConddition, {
          type: {
            in: adp.types
          }
        })
      }
    } else if (adp.types.length > 0) {
      isConddition = {
        type: {
          in: adp.types
        }
      }
    } else {
      isConddition = {
        item_name: ''
      }
    }

    return await this.finance.adp_free_schedule.findMany({
      where: isConddition,
      take: 20
    });
  }

  async financeClaimStatus() {
    return await this.finance.fdh_claim_status.findMany({
      select: {
        fdh_number_process: true,
        fdh_status_process: true,
        fdh_status_process_th: true
      }
    })
  }
}

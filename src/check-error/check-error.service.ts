import { Injectable } from '@nestjs/common';
import { CatalogsService } from 'src/catalogs/catalogs.service';
import { IpdServiceType, OpdServiceType } from 'src/edit-16f/edit-16f.entity';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';

@Injectable()
export class CheckErrorService {
  constructor(
    private finance: PrismaFinance,
    private itemMaster: CatalogsService,
  ) { }

  async checkMasterItem(tableList: OpdServiceType | IpdServiceType) {

    if (tableList === undefined) { return [] }
    const getCatalog = await this.itemMaster.itemMaster();
    const getCodeErrors = await this.finance.t_code_error.findMany({
      where: {
        t_code_error_active: 1,
      },
    });

    const list = Object.keys(tableList);
    const dataError = [];
    list.forEach((tableName) => {
      const tableError = { [tableName]: [] };
      getCodeErrors.forEach(async (t_error) => {
        if (tableName === t_error.main_table) {
          tableList[tableName].map(async (item: any) => {
            const isItemCatalog = getCatalog.find((i) => i.item_number === item.did);
            const setError = {
              id: item.id,
              file: tableName,
              hn: item.hn,
              an: item.an,
              seq: item.seq,
              did: item.did,
              didname: item.didname,
              code_error: t_error.code_error,
              code_error_descriptions: t_error.code_error_description,
            };


            //table dru
            if (tableName === 'dru') {
              //item f_product_category_id !=3,6,7
              if (t_error.ref_column_condition === isItemCatalog?.f_product_category_id) {
                tableError[tableName].push(setError);
              }

              if (item.did === t_error.ref_column_condition) {
                tableError[tableName].push(setError);

              }

            }

            //table adp
            if (tableName === 'adp') {
              const adpErrorColumn = t_error.main_column
              const adpErrorValue = t_error.ref_column_condition

              if (item[adpErrorColumn] === adpErrorValue) {
                tableError[tableName].push(setError);
              }

            }
          });
        }
      });

      dataError.push(tableError);
    });

    return dataError;
  }
}

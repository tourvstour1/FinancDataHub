import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class QueryService {
  genQueryReport(queryName: string, startDate: string, endDate: string) {

    const path = join(__dirname, '..', '..', 'sql')
    const sql = readFileSync(`${path}/${queryName}`)
      .toString()
      .replaceAll(':startDate', startDate)
      .replaceAll(':endDate', endDate);
    return sql;
  }
}

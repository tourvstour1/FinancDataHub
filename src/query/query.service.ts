import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class QueryService {
  genQueryReport(queryName: string, startDate: string, endDate: string) {
    const sql = readFileSync(`./sql/${queryName}`)
      .toString()
      .replaceAll(':startDate', startDate)
      .replaceAll(':endDate', endDate);
    return sql;
  }
}

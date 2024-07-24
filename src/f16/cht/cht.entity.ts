import { Table, Column, Model } from 'sequelize-typescript';

@Table({ timestamps: false ,tableName:'t_cht'})
export class Cht extends Model {
  @Column({ primaryKey: true })
  id: string;
  @Column
  hn: string;
  @Column
  an: string;
  @Column
  date: string;
  @Column
  total: string;
  @Column
  paid: string;
  @Column
  pttype: string;
  @Column
  person_id: string;
  @Column
  seq: string;
  @Column
  opd_memo: string;
  @Column
  invoice_no: string;
  @Column
  invoice_lt: string;
}

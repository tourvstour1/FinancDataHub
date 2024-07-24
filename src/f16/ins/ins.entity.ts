import { Table, Column, Model } from 'sequelize-typescript';

@Table({ timestamps: false, tableName: 't_ins' })
export class Ins extends Model {
  @Column({ primaryKey: true })
  id: String;
  @Column
  inscl: String;
  @Column
  subtype: String;
  @Column
  cid: String;
  @Column
  hcode: String;
  @Column
  dateexp: String;
  @Column
  hospmain: String;
  @Column
  hospsub: String;
  @Column
  govcode: String;
  @Column
  govname: String;
  @Column
  permitno: String;
  @Column
  docno: String;
  @Column
  ownrpid: String;
  @Column
  ownname: String;
  @Column
  an: String;
  @Column
  seq: String;
  @Column
  subinscl: String;
  @Column
  relinscl: String;
  @Column
  htype: String;
}

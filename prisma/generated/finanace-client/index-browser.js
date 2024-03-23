
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.11.0
 * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
 */
Prisma.prismaVersion = {
  client: "5.11.0",
  engine: "efd2449663b3d73d637ea1fd226bafbcf45b3102"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.T_insScalarFieldEnum = {
  id: 'id',
  hn: 'hn',
  inscl: 'inscl',
  subtype: 'subtype',
  cid: 'cid',
  hcode: 'hcode',
  dateexp: 'dateexp',
  hospmain: 'hospmain',
  hospsub: 'hospsub',
  govcode: 'govcode',
  govname: 'govname',
  permitno: 'permitno',
  docno: 'docno',
  ownrpid: 'ownrpid',
  ownname: 'ownname',
  an: 'an',
  seq: 'seq',
  subinscl: 'subinscl',
  relinscl: 'relinscl',
  htype: 'htype'
};

exports.Prisma.RelationLoadStrategy = {
  query: 'query',
  join: 'join'
};

exports.Prisma.T_patScalarFieldEnum = {
  id: 'id',
  hcode: 'hcode',
  hn: 'hn',
  changwat: 'changwat',
  amphur: 'amphur',
  dob: 'dob',
  sex: 'sex',
  marriage: 'marriage',
  occupa: 'occupa',
  nation: 'nation',
  person_id: 'person_id',
  namepat: 'namepat',
  title: 'title',
  fname: 'fname',
  lname: 'lname',
  idtype: 'idtype'
};

exports.Prisma.T_opdScalarFieldEnum = {
  id: 'id',
  hn: 'hn',
  clinic: 'clinic',
  dateopd: 'dateopd',
  timeopd: 'timeopd',
  seq: 'seq',
  uuc: 'uuc',
  detail: 'detail',
  btemp: 'btemp',
  sbp: 'sbp',
  dbp: 'dbp',
  pr: 'pr',
  rr: 'rr',
  optype: 'optype',
  typein: 'typein',
  typeout: 'typeout'
};

exports.Prisma.T_orfScalarFieldEnum = {
  id: 'id',
  hn: 'hn',
  dateopd: 'dateopd',
  clinic: 'clinic',
  refer: 'refer',
  refertype: 'refertype',
  seq: 'seq',
  referdate: 'referdate'
};

exports.Prisma.T_odxScalarFieldEnum = {
  id: 'id',
  hn: 'hn',
  datedx: 'datedx',
  clinic: 'clinic',
  diag: 'diag',
  dxtype: 'dxtype',
  drdx: 'drdx',
  person_id: 'person_id',
  seq: 'seq'
};

exports.Prisma.T_oopScalarFieldEnum = {
  id: 'id',
  hn: 'hn',
  dateopd: 'dateopd',
  clinic: 'clinic',
  oper: 'oper',
  dropid: 'dropid',
  person_id: 'person_id',
  seq: 'seq',
  servprice: 'servprice'
};

exports.Prisma.T_ipdScalarFieldEnum = {
  id: 'id',
  hn: 'hn',
  an: 'an',
  dateadm: 'dateadm',
  timeadm: 'timeadm',
  datedsc: 'datedsc',
  timedsc: 'timedsc',
  dischs: 'dischs',
  discht: 'discht',
  warddsc: 'warddsc',
  dept: 'dept',
  adm_w: 'adm_w',
  uuc: 'uuc',
  svctype: 'svctype'
};

exports.Prisma.T_irfScalarFieldEnum = {
  id: 'id',
  an: 'an',
  refer: 'refer',
  refertype: 'refertype'
};

exports.Prisma.T_idxScalarFieldEnum = {
  id: 'id',
  an: 'an',
  diag: 'diag',
  dxtype: 'dxtype',
  drdx: 'drdx'
};

exports.Prisma.T_iopScalarFieldEnum = {
  id: 'id',
  an: 'an',
  oper: 'oper',
  optype: 'optype',
  dropid: 'dropid',
  datein: 'datein',
  timein: 'timein',
  dateout: 'dateout',
  timeout: 'timeout'
};

exports.Prisma.T_chtScalarFieldEnum = {
  id: 'id',
  hn: 'hn',
  an: 'an',
  date: 'date',
  total: 'total',
  paid: 'paid',
  pttype: 'pttype',
  person_id: 'person_id',
  seq: 'seq',
  opd_memo: 'opd_memo',
  invoice_no: 'invoice_no',
  invoice_lt: 'invoice_lt'
};

exports.Prisma.T_chaScalarFieldEnum = {
  id: 'id',
  hn: 'hn',
  an: 'an',
  date: 'date',
  chrgitem: 'chrgitem',
  amount: 'amount',
  person_id: 'person_id',
  seq: 'seq'
};

exports.Prisma.T_aerScalarFieldEnum = {
  id: 'id',
  hn: 'hn',
  an: 'an',
  dateopd: 'dateopd',
  authae: 'authae',
  aedate: 'aedate',
  aetime: 'aetime',
  aetype: 'aetype',
  refer_no: 'refer_no',
  refmaini: 'refmaini',
  ireftype: 'ireftype',
  refmaino: 'refmaino',
  oreftype: 'oreftype',
  ucae: 'ucae',
  emtype: 'emtype',
  seq: 'seq',
  aestatus: 'aestatus',
  dalert: 'dalert',
  talert: 'talert'
};

exports.Prisma.T_adpScalarFieldEnum = {
  id: 'id',
  hn: 'hn',
  an: 'an',
  dateopd: 'dateopd',
  type: 'type',
  code: 'code',
  qty: 'qty',
  rate: 'rate',
  seq: 'seq',
  cagcode: 'cagcode',
  dose: 'dose',
  ca_type: 'ca_type',
  serialno: 'serialno',
  totcopay: 'totcopay',
  use_status: 'use_status',
  total: 'total',
  tmltcode: 'tmltcode',
  status1: 'status1',
  bi: 'bi',
  clinic: 'clinic',
  itemsrc: 'itemsrc',
  provider: 'provider',
  gravida: 'gravida',
  ga_week: 'ga_week',
  dcip_e_screen: 'dcip_e_screen',
  lmp: 'lmp'
};

exports.Prisma.T_lvdScalarFieldEnum = {
  id: 'id',
  seqlvd: 'seqlvd',
  an: 'an',
  dateout: 'dateout',
  timeout: 'timeout',
  datein: 'datein',
  timein: 'timein',
  qtyday: 'qtyday'
};

exports.Prisma.T_druScalarFieldEnum = {
  id: 'id',
  hcode: 'hcode',
  hn: 'hn',
  an: 'an',
  clinic: 'clinic',
  person_id: 'person_id',
  date_serv: 'date_serv',
  did: 'did',
  didname: 'didname',
  amount: 'amount',
  drugprice: 'drugprice',
  drugcost: 'drugcost',
  didstd: 'didstd',
  unit: 'unit',
  unit_pack: 'unit_pack',
  seq: 'seq',
  drugremark: 'drugremark',
  pa_no: 'pa_no',
  totcopay: 'totcopay',
  use_status: 'use_status',
  total: 'total',
  sigcode: 'sigcode',
  sigtext: 'sigtext',
  provider: 'provider'
};

exports.Prisma.T_labfuScalarFieldEnum = {
  id: 'id',
  hcode: 'hcode',
  hn: 'hn',
  person_id: 'person_id',
  dateserv: 'dateserv',
  seq: 'seq',
  labtest: 'labtest',
  labresult: 'labresult'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  t_ins: 't_ins',
  t_pat: 't_pat',
  t_opd: 't_opd',
  t_orf: 't_orf',
  t_odx: 't_odx',
  t_oop: 't_oop',
  t_ipd: 't_ipd',
  t_irf: 't_irf',
  t_idx: 't_idx',
  t_iop: 't_iop',
  t_cht: 't_cht',
  t_cha: 't_cha',
  t_aer: 't_aer',
  t_adp: 't_adp',
  t_lvd: 't_lvd',
  t_dru: 't_dru',
  t_labfu: 't_labfu'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
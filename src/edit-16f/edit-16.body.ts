import { ApiProperty } from '@nestjs/swagger';

export class Seq16f {
  @ApiProperty()
  seq: string;
}

export class An16f {
  @ApiProperty()
  an: string;
}

export class OpdUpdate {
  @ApiProperty({ isArray: true })
  opd: Object;

  @ApiProperty({ isArray: true })
  adp: Object;

  @ApiProperty({ isArray: true })
  aer: Object;

  @ApiProperty({ isArray: true })
  cha: Object;

  @ApiProperty({ isArray: true })
  cht: Object;

  @ApiProperty({ isArray: true })
  dru: Object;

  @ApiProperty({ isArray: true })
  ins: Object;

  @ApiProperty({ isArray: true })
  labfu: Object;

  @ApiProperty({ isArray: true })
  odx: Object;

  @ApiProperty({ isArray: true })
  oop: Object;

  @ApiProperty({ isArray: true })
  orf: Object;

  @ApiProperty({ isArray: true })
  pat: Object;
}

export class IpdUpdate {
  @ApiProperty({ isArray: true })
  ipd: Object;

  @ApiProperty({ isArray: true })
  lvd: Object;
  
  @ApiProperty({ isArray: true })
  pat: Object;

  @ApiProperty({ isArray: true })
  ins: Object;

  @ApiProperty({ isArray: true })
  adp: Object;

  @ApiProperty({ isArray: true })
  aer: Object;

  @ApiProperty({ isArray: true })
  cht: Object;

  @ApiProperty({ isArray: true })
  cha: Object;

  @ApiProperty({ isArray: true })
  dru: Object;

  @ApiProperty({ isArray: true })
  idx: Object;

  @ApiProperty({ isArray: true })
  iop: Object;

  @ApiProperty({ isArray: true })
  irf: Object;
}

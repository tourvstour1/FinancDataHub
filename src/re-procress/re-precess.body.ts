import { ApiProperty } from '@nestjs/swagger';

export class ReProcessIpd {
  @ApiProperty()
  an: string;
}

export class ReProcessOpd {
  @ApiProperty()
  seq: string;
}



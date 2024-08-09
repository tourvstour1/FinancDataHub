import {  ApiProperty } from '@nestjs/swagger';
export class OpdReques {

  @ApiProperty()
  startDate: string;

  @ApiProperty()
  endDate: string;

  @ApiProperty()
  pageIndex?: number

  @ApiProperty()
  pageSize?: number
}

export class IpdReques {
  @ApiProperty()
  startDate: string;

  @ApiProperty()
  endDate: string;

  @ApiProperty()
  pageIndex?: number

  @ApiProperty()
  pageSize?: number
}


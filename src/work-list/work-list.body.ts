import { ApiProperty } from '@nestjs/swagger';
export class OpdReques {
  @ApiProperty()
  startDate: string;

  @ApiProperty()
  endDate: string;
}

export class IpdReques {
  @ApiProperty()
  startDate: string;

  @ApiProperty()
  endDate: string;
}

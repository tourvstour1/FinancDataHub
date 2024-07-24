import { ApiProperty } from '@nestjs/swagger';

export class OpdClaim {
  @ApiProperty()
  seq: string[];
}

export class IpdClaim {
  @ApiProperty()
  an: string[];
}

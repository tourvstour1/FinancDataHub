import { ApiProperty } from '@nestjs/swagger';

export class AdpBody {
  @ApiProperty()
  adpKeyWord: string;
  @ApiProperty()
  item_code: string;
  @ApiProperty()
  types: string[];
}
export class DrugBody {
  @ApiProperty()
  drugKeyWord: string;
}

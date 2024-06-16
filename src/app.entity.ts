import { ApiProperty } from "@nestjs/swagger"

export class ApiResponst {
    @ApiProperty()
    description: string
    @ApiProperty()
    data?: Array<Object>
    @ApiProperty()
    status: number
}
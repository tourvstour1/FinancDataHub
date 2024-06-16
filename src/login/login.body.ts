import { ApiProperty } from "@nestjs/swagger";


export class LoginReq {
    @ApiProperty()
    userName: string

    @ApiProperty()
    passWord: string
    
    @ApiProperty()
    userFdh: string
}
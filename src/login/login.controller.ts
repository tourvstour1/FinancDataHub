import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginService } from './login.service';
import { Response } from 'express';
import { ApiResponst } from 'src/app.entity';
import { LoginReq } from './login.body';

@ApiTags('login')
@Controller('login')
export class LoginController {
    constructor(readonly logService: LoginService) { }
    @Get('get-employee')
    async getEmployee(@Res() res: Response) {
        try {
            const employees = await this.logService.getAllEmployee()
            const result: ApiResponst = {
                data: employees,
                description: 'get employee success.',
                status: 200
            }
            res.status(result.status).json(result);
        } catch (err) {
            const result: ApiResponst = {
                data: [],
                description: 'Server Catch????',
                status: 500
            }
            res.status(result.status).json(result);
        }
    }

    @Post('sign-in')
    async postLogin(@Body() loginReq: LoginReq, @Res() res: Response) {
        try {
            const { userName, passWord, userFdh } = loginReq
            const result = await this.logService.login(userName, passWord, userFdh)
            const response: ApiResponst = {
                data: [],
                description: 'sing in false.',
                status: 403
            }

            if (result.token !== undefined) {
                Object.assign(response, {
                    status: 200,
                    description: 'sign in success',
                    data: [result]
                })
            }
            res.status(response.status).json(response);
        } catch (err) {
            console.log(err);

            const result: ApiResponst = {
                data: [err],
                description: 'Server Catch????',
                status: 500
            }
            res.status(result.status).json(result);
        }
    }

    @Post('sign-out')
    async postLogout() {

    }
}

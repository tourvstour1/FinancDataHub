import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { JwtAppService } from 'src/jwt-app/jwt-app.service';
import { PrismaFinance } from 'src/prisma/prisma.service.finanec';
import { PrismaHospital } from 'src/prisma/prisma.service.hospital';

@Injectable()
export class LoginService {
    constructor(readonly finance: PrismaFinance,
        readonly hospital: PrismaHospital,
        readonly jwtService: JwtAppService
    ) { }

    async getAllEmployee(): Promise<{ employee_username: string, employee_firstname: string, employee_lastname: string, employee_hospital_code: string }[]> {
        return await this.finance.t_employee.findMany({
            select: {
                employee_username: true,
                employee_firstname: true,
                employee_lastname: true,
                employee_hospital_code: true,

            },
            where: {
                active: 1
            }
        })
    }

    async login(useName: string, passWord: string, userFdh: string) {
        const path = join(__dirname, '..', '..', 'catalogs.sql')
        const sql = readFileSync(`${path}/employee.sql`)
            .toString()
            .replaceAll(':user', useName)
            .replaceAll(':password', passWord);

        const getHospitalEmployee: { employee_login: string }[] = await this.hospital.$queryRawUnsafe(`${sql}`)
        const getFhdEmployee = await this.finance.t_employee.findMany({
            select: {
                employee_firstname: true,
                employee_lastname: true,
                employee_hospital_code: true,
                employee_username: true
            },
            where: {
                employee_username: userFdh,
                active: 1
            }, take: 1
        })
        
        let employee: Array<any> = []

        if (getHospitalEmployee.length > 0 && getFhdEmployee.length > 0) {
            employee = employee.concat(getFhdEmployee, getHospitalEmployee)
            const jwt = await this.jwtService.jwtEncode(employee[0])
                    
            return { token: jwt }
        } else {
            console.log(getHospitalEmployee);
            
            return { token: undefined }
        }

    }
}

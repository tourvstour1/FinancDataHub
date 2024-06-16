import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class JwtAppService {
    constructor(readonly jwt: JwtService) { }

    async jwtEncode(payload: any) {
        try {
            const accessToken = await this.jwt.signAsync(payload, { secret: process.env['SECRET_KEY'], expiresIn: '8h' });
            return accessToken;
        } catch (err) {
            console.log(err);
            throw new Error('Error encoding JWT');
        }
    }
    async jwtVerify(jwtPayload: string) {

    }
    async jwtDecode(jwtPayload: string) {

    }
}

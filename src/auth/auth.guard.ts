import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(readonly jwtService: JwtService) { }

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const token = this.extractToken(request);
    console.log(request);

    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: process.env['SECRET_KEY']
        }
      );

      request['user'] = payload;
    } catch (err) {
      console.log(err);
      
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractToken(req: Request) {
    const [type, token] = req.headers.authorization?.split(' ') ?? []

    return type === 'Bearer' ? token : undefined;
  }
}
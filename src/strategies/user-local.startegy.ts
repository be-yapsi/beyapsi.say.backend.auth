import { Usuarios, Status } from "C:/Projects/BeYapsi/libraries/beyapsi.yapsi.backend.sqlserver/dist";
import { HttpException, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../services/auth.service";

@Injectable()
export class UserLocalStrategy extends PassportStrategy(Strategy, 'user-strategy') {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password, Platform.UserWeb);

    if (!user) {
      throw new UnauthorizedException('Credentials are not valid');
    }

    if (user.status_id !== Status.) {
      throw new HttpException({message: 'User is blocked.', statusCode: 441}, 441);
    }

    if (!user.confirmed_email) {
      throw new HttpException({message: 'Email address is not verified.', statusCode: 442}, 442);
    }

    return user;
  }
}

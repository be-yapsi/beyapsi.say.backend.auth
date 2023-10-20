import { Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";
import { compareSync } from 'bcrypt';

export class AuthService {
  
  constructor(
    @Inject('USER_SERVICE')
    private readonly userService: ClientProxy
  ){}

  async validateUser(username: string, password: string, platform: Platform) {
    const user = await lastValueFrom<Membership>(
      this.membershipServiceClient.send('user_get_by_credentials', username)
    );

    if (!compareSync(password, user?.password)) {
      return null;
    }

    const permissions = await this.getPermissions(user?.role_id);

    return {...user, permissions};
  }

  // async login(user: any, platform: any)
}
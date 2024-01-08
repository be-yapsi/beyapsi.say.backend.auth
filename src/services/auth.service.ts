import { Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";
import { compareSync } from 'bcrypt';
import { User } from "../interfaces/user.interface";

export class AuthService {
  
  constructor(
    @Inject('USER_SERVICE')
    private readonly userService: ClientProxy
  ){}

  async validateUser(username: string, password: string, platform: string) {

    const user = await lastValueFrom<User>(
      this.userService.send('user_get_by_credentials', username)
    );

    if (!compareSync(password, user?.password)) {
      return null;
    }

    // const permissions = await this.getPermissions(user?.role_id);

    return {...user};
  }

  // private async getPermissions(role_id: number): Promise<string[]> {
  //   const permissions = await this.permissionsService.findByRoleId(role_id);
    
  //   const permissionsNames = permissions?.map(({module, description}: Permissions) => 
  //     `${module}.${description}`
  //   );

  //   return permissionsNames;
  // }
}
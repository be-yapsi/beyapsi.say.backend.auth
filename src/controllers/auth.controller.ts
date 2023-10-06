import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserService } from "../services/user.service";

@Controller('Auth')
export class AuthController {
  constructor(
    private readonly userService: UserService) {}

  @Get('login')
  async login() {
    return this.userService.findAll();
  }
}
import { Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserService } from "../services/user.service";

@Controller('Auth')
export class AuthController {
  constructor(
    private readonly userService: UserService) {}

  @Post('login')
  async login() {
    return this.userService.findAll();
  }
}
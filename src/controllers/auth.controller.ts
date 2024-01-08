import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiCreatedResponse, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { UserService } from "../services/user.service";
import { UserLocalAuthGuard } from "../guards/user-local.guard";
import { LoginResponseDto } from "../dto/login-response.dto";
import { UnauthorizedResponseDto } from "../dto/unauthorized-response.dto";
import { LoginDto } from "../dto/login.dto";

@Controller('Auth')
@ApiTags('Auth')
@ApiBearerAuth()
export class AuthController {
  constructor(
    private readonly userService: UserService) {}

  @Post('login')
  @ApiCreatedResponse({ description: 'Login user', type: LoginResponseDto })
  @ApiUnauthorizedResponse({ description: 'Unauthorized', type: UnauthorizedResponseDto })
  @UseGuards(UserLocalAuthGuard)
  async login(@Body() loginDto: LoginDto) {
    return this.userService.findAll(loginDto);
  }
}
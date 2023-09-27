import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @ApiProperty({example: 'daniel@beyapsi.com'})
  user: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @ApiProperty({example: 'P4ssW0rd'})
  password: string;
}
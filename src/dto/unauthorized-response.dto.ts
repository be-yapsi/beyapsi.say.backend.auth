import { ApiProperty } from "@nestjs/swagger";

export class UnauthorizedResponseDto {
  @ApiProperty({ example: 401 })
  statusCode: number;
  @ApiProperty({ example: 'Credentials are not valid' })
  message: string;
  @ApiProperty({ example: 'Unauthorized' })
  error: string;
}

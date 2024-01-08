import { ApiProperty } from "@nestjs/swagger";

// export class UserDataLoginResponseDto {
//   @ApiProperty({ example: 1 })
//   id: number;
//   @ApiProperty({ example: 'botepronto004' })
//   username:    string;
//   @ApiProperty({ example: 3 })
//   role_id:     number;
//   @ApiProperty({ example: [ 'User.Read', 'User.Update', 'User.Create' ] })
//   permissions: string[];
// }

export class LoginResponseDto {
  // @ApiProperty({ type: UserDataLoginResponseDto })
  // user: UserDataLoginResponseDto;
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  token: string;
}

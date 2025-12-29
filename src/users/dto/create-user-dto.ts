import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ADMIN', 'ENGINEER'], {
    message: 'Role must be INTERN, ADMIN, or ENGINEER',
  })
  role: 'INTERN' | 'ADMIN' | 'ENGINEER';
}

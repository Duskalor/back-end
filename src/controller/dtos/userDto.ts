import { IsEmail, IsString, IsOptional, IsDate, Length } from 'class-validator';

export class UserDTO {
  @IsString()
  @Length(2, 50)
  name: string = '';

  @IsEmail()
  email: string = '';

  @IsString()
  @Length(6, 20)
  password: string = '';

  @IsOptional()
  @IsDate()
  createdAt?: Date;

  @IsOptional()
  @IsDate()
  updatedAt?: Date;
}

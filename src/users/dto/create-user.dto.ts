import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

  @ApiProperty({example: 'user@mail.ru', description: 'Mail'})
  @IsString({message: 'Must be a string'})
  @Length(3, 20, {message: 'Not less than 3 and not more than 20'})
  @IsEmail({}, {message: "Incorrect email"})
  readonly email: string;
  @ApiProperty({example: '123456', description: 'password'})
  @IsString({message: 'Must be a string'})
  @Length(6, 20, {message: 'Not less than 6 and not more than 20'})
  readonly password: string;
}
/* eslint-disable prettier/prettier */
// export class CreateCustomerDto {
//     name : string
//     email:string
//     age:number
// }

import { IsEmail, IsNumber, IsString } from "class-validator"

// now using validator
export class CreateCustomerDto {
    @IsString()
    name : string
    @IsEmail()
    email:string
    @IsNumber()
    age:number
}
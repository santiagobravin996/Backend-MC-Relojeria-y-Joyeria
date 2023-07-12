import { IsBoolean, IsInt, IsNotEmpty, IsPositive, IsString, MinLength } from "class-validator"

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @MinLength(3)
    category: string

    @IsInt()
    @IsPositive()
    price: number

    @IsString() 
    description : string

    @IsInt()
    discount:  number

    @IsInt()
    stock :  number
    
    @IsString()
    images : string




}

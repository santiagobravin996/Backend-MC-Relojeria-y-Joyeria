import { IsString, MinLength } from "class-validator"

export class CreateProductDto {

    //Aqui vamos a configurar la informacion que vamos a recibir en nuestro post.
    // Un DTO (Data Transfer Object) es una clase simple que se utiliza para transportar datos
    // entre diferentes capas de una aplicación. Los DTOs se utilizan para definir la estructura
    // y el formato de los datos que se envían entre el cliente y el servidor, o entre diferentes 
    // partes del servidor.

    @IsString()
    @MinLength(4)
    name: string
    brand: string
    category: string
    description?: string
    price: number
    stock: boolean
    images: string
    discount: boolean

    




}

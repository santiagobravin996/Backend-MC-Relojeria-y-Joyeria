import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    //El PartialType permite que todos los atributos establecidos en el CreateDto sean opcionales aquí. De manera que podemos editar cualquiera de los campos en cuestión sin necesidad de transferir todos los valores que si serian obligatorios en el CreateDto.
    
    name: string
    brand: string
    category: string
    description?: string
    price: number
    stock: boolean
    images: string
    discount: boolean
}

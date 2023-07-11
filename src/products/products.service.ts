import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

  private products : Product[] = [
    {
    id: uuid(),
    name: 'Reloj hombre',
    brand: 'Tressa',
    category: "Accesorios",
    description: 'Reloj de gama media',
    price: 10000,
    stock: true,
    images: 'todavia no configuré el multer ni nada parecido',
    discount: false,
    createdAt: new Date().getTime()
    
    }
    
  ]


  create(createProductDto: CreateProductDto) {

    const product : Product = {
      id: uuid(),
      name: createProductDto.name.toLocaleLowerCase(),
      brand: createProductDto.brand,
      category: createProductDto.category,
      description: createProductDto.description,
      price: createProductDto.price,
      stock: createProductDto.stock,
      images: createProductDto.images,
      discount: createProductDto.discount,
      createdAt: new Date().getTime()
    }
    this.products.push(product)
    return product;
  }



  findAll() {
    return this.products;
  }



  findOne(id: string) {
    const product = this.products.find( prod => prod.id === id);
    if(!product) throw new NotFoundException(`Product with id ${id} not found`)
    return product
  }



  update(id: string, updateProductDto: UpdateProductDto) {

    let productDB = this.findOne(id)
    this.products = this.products.map( product => {
      if (product.id === id){
        productDB.updatedAt = new Date().getTime();
        productDB = {...productDB, ...updateProductDto}
      return productDB
      }
      return product
    })
    
  }




  remove(id: string) {
    this.products = this.products.filter( prod => prod.id !== id)
  }
}

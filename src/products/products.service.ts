import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Model, isValidObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {

  constructor(
    
    @InjectModel(Product.name)
    private readonly productModel:Model<Product>
    
     ){}


  async create(createProductDto: CreateProductDto) {
    createProductDto.name = createProductDto.name.toLocaleLowerCase()
    try{
    const product = await this.productModel.create(createProductDto)
    return product.save()
  } 
  catch(error){
  this.handleExceptions(error)
    }
  }



  async findAll() : Promise<Product[]> {
    return this.productModel.find().exec()
    
  }



  async findOne(id: string) {
    
    let product

    //MongoID
    if (isValidObjectId(id)){
      product = await this.productModel.findById(id)
    }

    //Name
    if (!product){
      product = await this.productModel.findOne({ name : id.toLowerCase().trim() })
    }

    if(!product) 
      throw new NotFoundException(`Product with id or name ${id} not found`)

    return product


  }



  async update(id: string, updateProductDto: UpdateProductDto) {
    
    
    const product = await this.findOne(id)


    if (updateProductDto.name){
      updateProductDto.name = updateProductDto.name.toLowerCase();

      try{
      const updatedProduct = await product.updateOne( updateProductDto, {new: true})
      
      return updatedProduct
      } catch(error){
        this.handleExceptions(error)
      }
    }
    
    
  }

  async remove(id: string) {
    const product = await this.productModel.findByIdAndRemove(id)
    return product
  }



  private handleExceptions (error : any){
    if (error.code === 11000){
      throw new BadRequestException(`Product exists in DB`)
    }
    throw new InternalServerErrorException("Can't create Product")
  } 

}

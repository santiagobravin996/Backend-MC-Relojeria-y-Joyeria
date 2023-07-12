import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose'
import {Document} from 'mongoose'
@Schema()
export class Product extends Document {

        @Prop({
            unique: true,
            index: true
        })
        name: string
        
        
        @Prop()
        category: string
        @Prop()
        price: number
        @Prop()
        description : string
        @Prop()
        discount: number
        @Prop()
        stock : number
        @Prop()
        images : string
        

        
    
    
    }
    
export const ProductSchema = SchemaFactory.createForClass( Product)

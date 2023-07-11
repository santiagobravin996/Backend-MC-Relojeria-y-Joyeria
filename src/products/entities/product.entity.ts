export class Product {

    // Las entities son clases que representan objetos de negocio o entidades en tu aplicación. 
    // Estas entidades suelen estar relacionadas con la capa de almacenamiento de datos, como una base
    // de datos, y mapean directamente a tablas en una base de datos relacional o a documentos en una base 
    // de datos NoSQL.

    // Las entidades encapsulan la lógica y los comportamientos relacionados con los datos de tu aplicación.
    // Pueden tener propiedades y métodos que definen su estructura y comportamiento, y 
    // se utilizan para interactuar con la capa de persistencia de datos. 
    // Además, las entidades a menudo se relacionan entre sí, lo que permite establecer relaciones y 
    // realizar consultas más complejas en la base de datos.


        id: string
        name: string
        brand: string
        category: string
        description?: string
        price: number
        stock: boolean
        images: string
        discount: boolean
        createdAt: number
        updatedAt?: number
        
    
    
    }
    


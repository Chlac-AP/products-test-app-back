import { Product } from './../sqlz/models/product'


export function findAll(): Promise<any> {
    return Product
        .findAll()
}


export function createProduct(product: any): Promise<any> {

    return Product
        .create({
            code: Product.createCode(),
            name: product.name,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            //inventoryStatus: "string",
            category: product.category,
            image: product.image,
            rating: product.rating,
            //createdAt: new Date(),
            //updatedAt: new Date()
        })
}


export function deleteProduct(product: any): Promise<any> {
    return Product
        .destroy({
            where: {
                id: product.id,
            },
        })
}



export function updateProduct(product: any): Promise<any> {

    return Product
        .update({
            name: product.name,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            category: product.category,
            image: product.image,
            rating: product.rating,
        }, {
            where: {
                id: product.id,
            },
        },)
}

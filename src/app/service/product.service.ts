import {Product} from './product'

export class ProductService{

    public  getProducts() {
        let products:Product[];

        products=[
    {
        productID: 1,
        name: 'Memory Card',
        price: 500
    },
    {
        productID: 2,
        name: 'Pen Drive',
        price: 750
    },
    {
        productID: 3,
        name: 'Power Bank',
        price: 100
    }
        ]

        return products;               
    }
    }



//public Product:any=[
//    {
//        productID: 1,
//        name: 'Memory Card',
//        price: 500
//    },
//    {
//        productID: 2,
//        name: 'Pen Drive',
//        price: 750
//    },
//                {
//        productID: 3,
//        name: 'Power Bank',
//        price: 100
//    }
//] 
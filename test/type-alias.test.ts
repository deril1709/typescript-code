import { Category, Product } from "../src/type-alias";

describe('type aliases', () => {
    it('should work', () => {
       const category: Category =  {
        id: '1',
        name: 'test'
       };
       const product : Product = {
        id: '1',
        name: 'test',
        price: 100,
        category: category
       };
       console.info(category)
       console.info(product)
    });
})
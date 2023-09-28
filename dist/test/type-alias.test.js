describe('type aliases', () => {
    it('should work', () => {
        const category = {
            id: '1',
            name: 'test'
        };
        const product = {
            id: '1',
            name: 'test',
            price: 100,
            category: category
        };
        console.info(category);
        console.info(product);
    });
});
export {};

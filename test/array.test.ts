describe('array', function() {
    it('should' ,function(){
        const names: String[] = ['yoru', 'phoenix'];
    const values: number[] = [1,2,3]

    names[0] = 'ace'

    console.info(names)
    console.info(values)
    })

    //read only
    it('read-only', function(){
        const secondName:ReadonlyArray <string> = ['sage', 'omen'] 
        
    })
    //tuple
    it('tupple version', function(){
        const person : readonly [string, string, number] = ['reyna', 'skye', 60]
    })

    
});
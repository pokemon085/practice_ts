(()=>{

    //定義一個類 類中的屬性值的類型不確定 方法中的參數即返回值的類型也不確定
    //定義一個泛型類

    class GenericNumer<T>{
        defaultValue:T | undefined
        add:((x: T, y: T) => T) | undefined
    }

    //number
    const g1:GenericNumer<number>=new GenericNumer<number>()

    g1.defaultValue=100

    g1.add=function(x,y){
        return x+y
    }
    console.log(g1.add(10,20))


    //string
    const g2:GenericNumer<string>=new GenericNumer<string>()

    g2.defaultValue='aaaa'

    g2.add=function(x,y){
        return x+y
    }
    console.log(g2.add('bbbb',g2.defaultValue))

})()
//如果直接對一個泛型參數取length屬性會報錯 因為這個泛型不知道有這個屬性
(()=>{
    interface ILength{
        length:number
    }

    function getLength<T extends ILength>(x:T):number{
        return x.length
    }

    console.log(getLength<string>('hello ~')) //7
})()
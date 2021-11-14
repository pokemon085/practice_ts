//多個泛型參數的函數:函數中有多個泛型的參數
(()=>{

    function getMsg<K,V>(value1:K,value2:V):[K,V]{
        return [value1,value2]
    }
    const arr1=getMsg<string,number>('aaaaa',1233.212)
    console.log('arr1='+arr1)
    console.log('arr1 splite tofixed='+arr1[0].split(''),arr1[1].toFixed(2))

    const arr2=getMsg<number,number>(5666666.2,1233.212)
    console.log('arr2='+arr2)
})()
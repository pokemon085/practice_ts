//泛型:在定義函數 接口 類的時候不能預先知道數據是甚麼類型 
(()=>{

    //需求:定義一個函數 傳入兩個參數 第一參數是數據 第二參數是數量 ,函數的作用:根據數量產生對應的數據 存在一個數組中

    function getArr<T>(value:T,count:number):T[]{
        const arr:Array<T>=[]
        for(let i=0;i<count;i++){
            arr.push(value)
        }
        return arr
    }
    const arr1=getArr<number>(3333.123,3)
    console.log('arr1='+arr1)   //     arr1=3333.123,3333.123,3333.123
    console.log('arr1 toFixed(2)='+arr1[0].toFixed(2))  //     arr1 toFixed(2)=3333.12

    const arr2=getArr<string>('aaaa',3)
    console.log('arr2=',arr2)    //     arr2= (3) ['aaaa', 'aaaa', 'aaaa']
    console.log('arr2 split(2)='+arr2[0].split(''))    //     arr2 split(2)=a,a,a,a






})()
//函數重載 宣告函數定義 當輸入錯誤的格式會提醒

(()=>{
    //函數重載聲明
    function add(x:string,y:string):string
    function add(x:number,y:number):number

    //函數聲明
    function add(x:string |number,y:string|number):string|number{
        if(typeof x==='string' &&  typeof y==='string'){
            return x+y
        }else if(typeof x==='number' && typeof y==='number'){
            return x+y
        }else{
            return 1
        }
    }

    console.log(add('aaa','bbb'))
    console.log(add(10,20))

    //console.log(add('aaa',10)) 會報錯 如果沒有事先聲明函數重載 不會爆紅色的錯誤

})()

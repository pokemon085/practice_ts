//函數
(()=>{

    
    //函數聲明 命名函數
    //函數中的x和y參數的類型都是string類型的 小括號後面的:string 代表的是該函數的返回值也是string類型
    function add(x:string,y:string):string{
        return x+y
    }

    //函數表達式 匿名函數
    const add2=function(x:number,y:number):number{
        return x+y
    }

    //函數的完整寫法
    //add3 變量名 函數add3
    //(x:number,y:number)=>number當前的這個函數的類型
    //(x:number,y:number)=>number , (x:number,y:number):number 一定要相同 需要符合前面定義的類型
    const add3:(x:number,y:number)=>number=function(x:number,y:number):number{
        return x+y
    }

    const result1:string=add('a','b')
    const result2:number=add2(1,2)
    console.log('add==='+result1)
    console.log('add2==='+result2)

    const result3:number=add3(3,4)
    console.log('add3='+result3)


})()
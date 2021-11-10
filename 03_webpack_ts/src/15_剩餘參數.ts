//剩餘參數(rest參數)
//只能放在最後一個參數的後面
(()=>{
    // ...arg:string[] --->剩餘的參數 在...arg裡
    function showMsg(str:string,str2:string,...args:string[]){
        console.log(str) //a
        console.log(str2) //b
        console.log(args) //c d e
    }

    showMsg('a','b','c','d','e')
})()
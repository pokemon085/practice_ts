//可選參數: 參數後加? 代表該參數可加可不加
//默認參數: 參數後定義類型的後面加上預設值

(()=>{

    //定義一個函數 傳入姓氏和姓名 可得到姓名(姓氏加名字)
    //不傳入任何內容 就返回默認的姓氏
    //只傳入姓氏 返回姓氏
    //如果傳入姓氏和名字 返回的就是姓名

    const getFullName=function(firstName:string="姓氏",lastName?:string):string{
        if(lastName){
            return firstName+'_'+lastName
        }else{
            return firstName
        }
    }

    //什麼都不傳
    console.log(getFullName())

    //只傳姓氏
    console.log(getFullName('aaaa'))

    //傳姓名
    console.log(getFullName('aaaa','bbbb'))
})()
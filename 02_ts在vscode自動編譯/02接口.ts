(()=>{
    //定義資料型態 告訴用的人需要帶入IPerson定義的參數
    interface IPerson{
        firstName:string //姓氏
        lastName:string //名字
    }

    function showFullName(person:IPerson){
        return person.firstName+'_'+person.lastName
    }
    const person={
        firstName:'aaa',
        lastName:'Wu'
    }
    console.log(showFullName(person))
})()
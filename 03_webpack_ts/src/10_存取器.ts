//存取器:使用gettes和setters 可有效的控制對 對象中的成員訪問 
(()=>{
    class Person{
        firstName:string
        lastName:string

        constructor(firstName:string='aaa',lastName:string='bbb'){
            this.firstName=firstName
            this.lastName=lastName
        }

        //讀取器 負責讀取數據
        get fullName(){
            console.log('get中..')
            return this.firstName +'-' + this.lastName
        }

        //設置器 負責設置或修改數據的
        set fullName(val){
            console.log('set中..')
            let names=val.split('_')
            this.firstName=names[0]
            this.lastName=names[1]
        }
    }

    const person:Person=new Person()
    console.log(person)
    console.log(person.fullName)
    person.fullName="ccc_ddd"
    console.log(person.fullName)


    
})()
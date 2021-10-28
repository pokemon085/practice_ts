(()=>{

    class Person{
        //定義屬性
        name:string
        age:number
        gender:string

        //定義構造函數
        constructor(name:string="qqq",age:number=33,gender:string="女"){
            //更新屬性數據
            this.name=name
            this.age=age
            this.gender=gender
        }

        //定義方法
        sayHi(str:string){
            console.log(`name=${this.name},age${this.age},gender=${this.gender},${str}`)
        }

    }

    //定義一個類 繼承來自Person(父類)
    class Student extends Person{
        constructor(name:string='ttt',age:number=66,gender:string='女')
        {   //調用父類中的構造函數 使用super
            super(name,age,gender)
        }

        //調用父類方法
        useSayHi(){
            super.sayHi('aaa')
        }
    }
    const person =new Person('rrr',55,'男')
    person.sayHi('nn')

    const student=new Student()
    student.useSayHi()
})()
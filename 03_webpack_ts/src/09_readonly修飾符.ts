//readonly修飾符:是一個關鍵字 對類中的屬性成員進行修飾 修飾後 該屬性的成員 不能在外部被隨意修改
//readonly 只能在構造函數中 對只讀的屬性成員的數據進行修改
(()=>{
    //定義一個類型
    class Person{
        //屬性
        readonly name:string

        //構造函數
        constructor(name:string){
            this.name=name
            this.name='aa' //只能在這裡修改
        }

        //方法
        sayHi(){
            console.log('name=',this.name)
            // this.name='hhh' 也不能在這裡修改
        }
    }

    const person=new Person('bbb')
    console.log(person.name)
    //person.name='ccc' 沒辦法在這裡修改name 因為是readonly


})()
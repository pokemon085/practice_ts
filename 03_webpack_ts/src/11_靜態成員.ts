//当类中的方法被声明为static时，其实例化对象(ex: const a= new person())不可调用该方法，只有类本身 ，以及其子类可以调用。

(()=>{

    class Person{

        static name1:string

        constructor(){
            //static靜態屬性 不能調用constructor
        }

        static sayHi(){
            console.log('aaaaa')
        }
    }
    //不能在外部被實例化使用
    //const person=new Person()
    // console.log(person.name1) 

    //只能直接用class使用
    Person.name1='bbbbb'
    console.log('this.name1='+Person.name1);

    Person.sayHi()

})()
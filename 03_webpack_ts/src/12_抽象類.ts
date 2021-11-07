//抽象類(abstract):包含抽象方法(抽象方法一般沒有任何具體內容的實現)，也可包含實例方法
//抽象類不能被實例化
//為了讓子類進行實例化及實現內部的抽象方法

(()=>{
    abstract class Animal{
        abstract name:string
        //抽象方法
        abstract eat():any

        //會報錯 抽象方法不能有具體的實現
        // abstract eat(){
        //     console.log('eat1')
        // }

        //實例方法
        sayHi(){
            console.log('hello')
        }
    }

    //定義子類
    class Dog extends Animal{

        name="bbbb"
        //重新的實現抽象類中的方法
        eat(){
            console.log('eat good')
        }
    }

    const dog:Dog=new Dog()
    dog.eat()
    dog.sayHi()
    console.log(dog.name)

    //不能實例化抽象化的對象
    //const ani:Animal=new Animal()
})()
//class implements(類 實現)interface的方法

//class implements可以透過 interface 來定義當前的類型
//可以一個或多個interface

(()=>{
    interface IFly{
        fly():void,
    }

    class Person implements IFly{
        fly(){
            console.log('fly')
        }
    }

    const person=new Person()
    person.fly()

    //
    console.log('-------')
    interface ISwim{
        swim():void
    }
    class Person2 implements IFly,ISwim{
        fly(){
            console.log('fly2')
        }
        nofly(){
            console.log('nofly2')
        }
        swim(){
            console.log('swim')
        }
    }

    const person2 =new Person2()
    person2.fly()
    person2.nofly()
    person2.swim()

    console.log('-------')

    //定義一個interface 繼承(extends)其他的多個interface
    //接口(interface)跟接口要用繼承(extends)
    //接口(interface)跟類(class)要用實現(implements)
    interface IMyFlyAndSwim extends IFly,ISwim{}

    //定義一個class
    class Person3 implements IMyFlyAndSwim{
        fly(){
            console.log('fly3')
        }
        swim(){
            console.log('swim3')
        }
    }

    const person3=new Person3()
    person3.fly()
    person3.swim()




})()
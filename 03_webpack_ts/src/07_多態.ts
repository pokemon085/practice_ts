//多態:父類型的引用指向子類型對象 不同類型的對象針對相同的方法 產生不同行為
(()=>{
    //定義父類
    class Animal{
        name:string
        constructor(name:string){
            this.name=name
        }
        run(distance:number=0){
            console.log(`跑了${distance}m的距離`,this.name)
        }
    }
    //定義子類
    class Dog extends Animal{
        constructor(name:string){
            super(name)
        }
        run(distance:number=5){
            console.log(`跑了${distance}m的距離`,this.name)
        }
    }

    //定義子類
    class Pig extends Animal{
        constructor(name:string){
            super(name)
        }
        run(distance:number=10){
            console.log(`跑了${distance}m的距離`,this.name)
        }
    }

    //父類
    const ani:Animal=new Animal('動物')
    ani.run()

    //子類
    const dog:Dog=new Dog('aaaa')
    dog.run()

    //子類
    const pig:Pig=new Pig('bbb')
    pig.run()

    console.log('=======')
    //父類創建子類的對象 ,定義對象是父類 方法都是子類自己的方法
    const dog1:Animal=new Dog('cccc')
    dog1.run()

    const pig1:Animal=new Pig('dddd')
    pig1.run()

    console.log('=======')
    //該函數需要的參數是Animal類型的
    function showRun(ani:Animal){
        ani.run()
    }

    showRun(dog1)
    showRun(pig1)

})()
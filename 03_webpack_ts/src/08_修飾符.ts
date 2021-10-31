//修飾符(類中的成員的修飾符):主要是描述類中的成員(屬性 構造函數 方法)的可訪問性
//類中的成員都有自己的默認的訪問修飾符 public
//public修飾符 公共的 類中成員默認的修飾符 代表的是公共的 任何位置都可以訪問類中的成員
//private修飾符 私有的 外部及子類無法訪問這個成員
//protected修飾符 受保護的 外部不能訪問 子類可以

(()=>{

    //定義一個類
    class Person{
        //屬性 public修飾了屬性成員
        public name:string

        //屬性 private私有的不能被訪問(外面不能呼叫他)
       // private name:string

       //只能在子類被訪問 外部不行
        //protected name:string
       
        //構造函數
        public constructor(name:string) {
            //更新屬性
            this.name=name
        }
        //方法
        public eat(){
            console.log('yummy',this.name)
        }
    }

    //定義一個子類
    class Student extends Person{
        constructor(name:string){
            super(name)
        }
        play(){
            console.log('i like play game')
        }
    }

    //new Person在調用constructor
    const per=new Person('aaaaa')
    console.log(per.name)
    per.eat()
})()
(()=>{
    class Person{
        name:string
        age:number
        gender:string

        constructor(name:string='aaaa',age:number=33,gender:string='女'){
            this.name=name
            this.age=age
            this.gender=gender
        }

        sayHi(str:string){
            console.log(`name=${this.name},age=${this.age},gender=${this.gender}+${str}`)
        }
    }
    const person=new Person('nnnn',44,'男')
    person.sayHi('cccc')
    
})()
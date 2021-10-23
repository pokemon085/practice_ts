(()=>{
//類別
interface IPerson{
    firstName:string
    lastName:string
}

class Person{
    firstName:string
    lastName:string
    fullName:string

    constructor(firstName:string,lastName:string){
        this.firstName=firstName
        this.lastName=lastName
        this.fullName=this.firstName+'_'+this.lastName
    }
}

function showFullName(person:IPerson){
    return person.firstName+'_'+person.lastName
}

const person=new Person('aaa','bbb')
console.log('person'+JSON.stringify(person))

console.log(showFullName(person))

})()



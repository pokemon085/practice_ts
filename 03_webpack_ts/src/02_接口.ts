//接口 interface

// 需求: 创建人的对象, 需要对人的属性进行一定的约束

// id是number类型, 必须有, 只读的
// name是string类型, 必须有
// age是number类型, 必须有
// sex是string类型, 可以没有



interface IPerson{
    //如果 限制只能讀取的話 可以用readonly
    readonly id:number
    name:string
    age:number
    //如果 設定參數可有可無的話 可以用 "?" 後來想加此參數的話也可加
    sex?:string
}


const person:IPerson={
    id:22,
    name:'aaa',
    age:33,
    //sex:'女'
}

console.log(JSON.stringify(person))
console.log('原本 age='+person.age)
//沒有設定任何限制的話 可以更改內容
person.age=55
console.log('更改 age='+person.age)

person.sex='女'
console.log(JSON.stringify(person))


(()=>{
  //boolean
  let flag:boolean=true
  console.log(flag)

  //number 進制 因為型態都是number 就會自動轉成10進制
  let a1: number = 10 // 十进制
  let a2: number = 0b1010  // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa // 十六进制
  console.log(a1)
  console.log(a2)
  console.log(a3)
  console.log(a4)

  //string
  let str1:string='aaaaa'
  let str2:string='bbbbb'
  let str3:string='ccccc'
  let str4:string='ddddd'
  console.log(`${str1},${str2},${str3},${str4}`)

  //string+number
  let str5:string='eeeee'
  let num:number=1000
  console.log(str5+num)


  //多種型態 string|number
  let str6:string|number;
  str6=333
  str6='eeee'
  console.log('str6=>'+str6)

  //限制固定的字串
  let sex:'boy'|'girl';
  sex='boy'
  console.log('sex=>'+sex)


  //undefined null
  let und:undefined=undefined
  let nll:null=null
  console.log('und='+und)
  console.log('nll='+nll)

  //undefined null可以用在使用者選填的資料
  interface User{
    name:string
    age:number|undefined|null
    gender:string
  }
  function join(person:User){
    return `姓名:${person.name}${person.age?',年齡:'+person.age:"",'性別:'+ person.gender}`
  }

  const member={
    name:'aaaa',
    age:undefined,
    gender:'女'
  }
  console.log('member=>'+join(member))

  console.log('============')
  //陣列型態

  //陣列定義方法1
  //let變量名:資料類型[] (arr1:any[]=>any任何類型)
  let arr1:number[]=[10,20,30,40,50]
  console.log('arr1='+arr1)

  //陣列定義方法2
  //let變量名:Array<數據類型>
  let arr2:Array<number>=[100,200,300]
  console.log('arr2='+arr2)

  //指定陣列第幾個資料類型
  let arr3:[string,number]=['aaa',20.232326]
  console.log('arr3='+arr3)

  console.log('arr3[0](string)='+arr3[0].split(''))
  console.log('arr3[1](number)='+arr3[1].toFixed(2))

  console.log('============ enum =====')

  //enum 枚舉 方便管理 可自動編號 取key值
  enum Color{
    red=44,
    green,
    blue
  }

  let color:Color=Color.red
  console.log(color)
  console.log(Color.red, Color.green,Color.blue)
  console.log(Color[44]) //取key值 =>red
  console.log(Color[45]) //取key值 =>green
 
  console.log('============any void==========')

  //any 
  let arr7:any[]=[100,'aaaaa',true]
  console.log(arr7)

  //void 用在function沒有返回值(return)的時候
  function showMsg():void{
    console.log('abacccaffsdf')
  }
  showMsg()


  console.log('============ object ==========')

  //input 輸入參數:(obj:object) 
  //return 輸出: :object
  function getObj(obj:object):object{
    console.log(obj)
    return{
      name:'ccc',
      age:22
    }
  }
  console.log(getObj({name:'aaaa',age:'boy'}))


  console.log('============ object 聯合類型 ==========')

  //轉字串
  function getString(str:number|string):string{
    return str.toString()
  }

  console.log('getString='+getString(123))

  //轉字串 總長度
  function getLength(str:string|number):number{

    //類型斷言
    //法1: <類型>變數 
    // if((<string>str).length){
    //   return (<string>str).length
    // }else{
    //     return str.toString().length
    // }

    //法2: (變數 as 類型)
    if((str as string).length){
      return (str as string).length
    }else{
      return str.toString().length
    }

  
  }
  console.log('getLength(str)='+getLength('123456'))
  console.log('getLength(num)='+getLength(123456))

  //類型推斷:沒有指定類型它會自動推斷
  let txt=100;//推斷number類型

  let txt2;//推斷any類型
  txt2=100;
  txt2='aaa'

  
})()
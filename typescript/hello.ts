function greet(name:string,age :number,experssion:string){
    console.log(`Hello, ${name}. You are ${age} years old and ${experssion}!`);
}

greet("Azheng",18,"I love you");

// 联合类型
let v1:string|number=3;
v1="hello";
v1=5;

//固定值
let v2:"hello"|"world"="hello";
v2="world";

let arr:number[]=[1,2,3];

//元组
let tuple:[string,number,boolean?]=["hello",18];

function sum(a:number,b:string,...rest:number[]):string{
    return a+b;
}
const res=sum(1,"2",3,4,5);
console.log(res);

//interface
interface Person{
    name:string,
    age:number,
    gender:String
}

const person1:Person={
    name:"Azheng",
    age:18,
    gender:"male"
}

type myUsername=string|number;
let username:myUsername="Azheng";
let username2:myUsername=12345;

// 泛型
function myFun<T>(a:T,b:T):T[]{
    return [a,b];
}

myFun<string>("hello","Azheng");
myFun<number>(1,2);



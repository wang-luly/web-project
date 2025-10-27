type People<T = {
    hobby:string
}>={
    name:string,
    age:number
    info:T
}
// 使用时可以不传泛型参数，默认是{hobby:string}
const p1:People={
    name:'wangluly',
    age:20,
    info:{
        hobby:'football'
    }
}

function greet<T extends {id:string}>(hello:string,...args:T[]):string{
    return `hello ${hello},args:${args.join(',')}`
}
type namedPerson=Pick<People,'name'>
type unnamedPerson=Omit<People,'name'>

//类型保护
type Value=string|number;
function isString(value:Value):value is string{
    return typeof value==='string'
}
const value:Value='hello typescript';
const s=isString(value);
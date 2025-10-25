interface Person{
    name:string,
    age:number
}

function sayHello(person:Person):void{
    console.log(`Hello,I am ${person.name},I am ${person.age} years old.`);
}

const student:Person={
    name:"Azheng",
    age:18
}

sayHello(student);
// const parent = {
//     surname : 'Oneway',
//     display : function(){
//         console.log(('Hey Parent...!'));
//     }
// }

// const child1 = Object.create(parent);
// child1.name = "Rakshith"
// console.log(child1);

// console.log(`${child1.name} ${child.surname}`);

// const child2 = Object.create(parent);
// console.log(child1.surname);
// child2.display();


// const grandParent = {
//         sayHi : function(){
//             console.log(`GrandParent Say Hi to everyone`);
//         }
//     }
    
//     const grandparent = Object.create(grandParent);
//     parent.sayHello = function(){
//         console.log(`Parent say Hello to everyone`);
//     }
    
//     const child = Object.create(parent);
//     child.sayGoodBy = function(){
//         console.log(`Children say Good bye...`);
//     }
    
//     child.sayHi();
//     child.sayHello();
//     child.sayGoodBy();
    


    // const arr = [1,2,3,4,5,6,7,8,9]
    // let sum = arr.reduce((prev,current) => prev +=current, 0)
    // console.log(sum);


const user = {
    name: 'xyz',
    age: 30
}
  
const props = Object.getOwnPropertyNames(user)
console.log(props);

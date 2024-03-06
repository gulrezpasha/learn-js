const tinderuser={}
 tinderuser.id="11318"
 tinderuser.name="pasha"
 tinderuser.isLoggedIn=false;

//  console.log(tinderuser);
const regularuser={
    email:"wer@gmail.com",
    fullname:{
        userfullname:{
            firstname:"gulrez",
            lastname:"pasha"
        }
    }
}
// console.log(regularuser.fullname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3=Object.assign(obj1,obj2);
const obj3={...obj1,...obj2} //spread mthd 
console.log(obj3);

const users=[
    {
        id:1,
        email:"h@gmail.com"
    }
]
// users[1].email;
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries (tinderuser));

const course={
    coursename:"js by chai aur code",
    price:"9990",
    courseInstructor:"hitesh"
}
const{courseInstructor:Instructor}=course

console.log(Instructor);



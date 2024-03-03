// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "somu@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Somya",
            lastName : "Shrestha"
        }
    }
}

// console.log(regularUser.fullName.userFullName.lastName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1,obj2} //with this there will come the same error as arrya both will be treated as objects in the objects

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const User = [
    {
        id : 1,
        email : "somu@gmai.com"
    },
    {
        id : 2,
        email : "shrestha@gmail.com" 
    }
]

// console.log(User[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));



const course = {
    courseName : "Js in Hindi",
    coursePrice : 999,
    courseTeacher : "Hitesh Choudary"

}

const {courseTeacher : instructor} = course
// console.log(courseTeacher);
console.log(instructor);


// {
//     "name" : "somu",
//     "course_Name" : "Js In Hindi",
//     "price" : "free"

// }
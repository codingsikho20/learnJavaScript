// callback quetions 

// exercise-1 (very easy-warming up)

// ek function banao afterdeley 
// Requerment:
// ye function 2 chize lega time(milliseconds, callback) function given time ke baad callback ke ander "callback executed" print hona chahiye 
// usecase socho :
// 2 second baad ek kaam karna hai"
// goal;
// samjhana ki callback ke baad kaise execute hota hai ye setTimeout + callback connection hai.

// function afterDelay (time, cb){
//     setTimeout(function(){
//         cb();

//     } , time)
// }

// afterDelay(3000, function(){
//     console.log("callback executed");
// });

// exercise-2 (Intermediate) - data flow

// ek function banao getUser,
// Requirement:
// username lega, 1 second ke baad callback ko ek object de: id, 
// username then: 
// callback kro 
// getusePost getUserPost: UserId lega
// 1 second ke baad callback ko posts ka arroy de find output: User ka Username print ho fir uske posr=t print ho goal:
// samjhana ki ek async ke resuilt next async ko kaise milta hai

// function getUser(username, cb){
//     console.log("getting user details...");

//     setTimeout(()=>{
//         cb({id: 1, username: "Nandani"});
//     }, 1000);
// }

// function getUserPost(id, cb){
//     console.log("getting user Posts");
//     setTimeout(()=> {
//         cb(["Nandani", "Nandani", "Nandani"])
//     }, 2000)
// }

// getUser("Nandani", function(data){
//     getUserPost(data.id, function(allPosts){
//         console.log(data.username.allPosts)
//     });
// });
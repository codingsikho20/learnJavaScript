// Introduction to Error Handaling

// syntax error -> aapne code mein likhte waqt galti kardi

//like

// letq a = 12;

// runtime error -> code likhte waqt error nahi hai chalte waqt error hai

// function abcd(){
//     let a = 12;
//     console.log(a.name.first);
// }

// abcd();

// ye error ko handle karta hai or code ko run bhi karta hai

// try {
//     console.log(a.name.age);
// } catch (err) {
//     console.log(err);
// }

// console.log("Nandani");

// hum ye bhi check kar sakte hai ki erro konsa line or kaha aa raha hai

// try {
//     let a = 12;
//     console.log(a.name.age);
// } catch (err) {
//     console.log(err.stack); // .massage .name .stack
// }

// error me hum apna massage pass kar skate hai 

// try{
//     let a = 12;
//     console.log(a.name.age)
// } catch (err){
//     console.error(
//     new Error("Something went wrong from our side, please wait for some time.")
//     );
// }

// this is the concept of finally ye code humesha chalega fark nahi padt hai ki ye is code me koi error hai 

// try{
//     let a = 12;
//     console.log(a.name.nmmnn);
// } catch (err){
//     console.log(err)
// } finally {
//     console.log("Nanadani")
// }

// code me error ko dekha sakte hai like "throw"

// try{
//     let a = 12;
//     console.log(a.name.age);
// } catch (err){
//     throw new Error(
//         "Something went wrong from our side, please wait for some time "
//     );
// }
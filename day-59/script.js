// js --> single threaded

// ek ek baar mein kar payega 22222222222222
// synchroous aproach
// aynchrous aproach.

// Callback ek function jo turnt nahi chalega 33ye chalega jab aapka koi kaam complete hoga 

// function abcd(){
//     fn(function (fn2){
//         fn2(function (){
//             console.log("hey dost")
//         });
//     });
// }

// abcd(function (fn){
//     fn(function (fn3){
//         fn3();
//     });
// });

function abcd(fn){
    fn(function(fn3){
        fn3(function(fn5){
            fn5();
        });
    });
}

abcd(function(fn2){
    fn2(function(fn4){
        fn4(function(){
            console.log("hey Nandani meri jaan");
        });
    });
});

// Callbacks Stituation

// we have to create a stuation get the repositry data for github


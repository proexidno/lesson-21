// for (let i = 1; i <= 100; i++) {
//     $("#WorkingSpace1").append($("<p>").html(i + "<br>"))
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// for (let i = 100; i >= 1; i--) {
//     $("#WorkingSpace1").append($("<p>").html(i + "<br>"))
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// for (let i = 2; i <= 100; i += 2) {
//     $("#WorkingSpace1").append($("<p>").html(i + "<br>"))
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let X = []
// for (let i = 0; i < 10; i++) {
//     X[i] = "X"
// }
// console.log(X)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let A = []
// for (let i = 0; i < 10; i++) {
//     A[i] = i + 1
// }
// console.log(A)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let A = []
// for (let i = 0; i < 10; i++) {
//     A[i] = Number(Math.random().toFixed(2));
// }
// console.log(A)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let A = []
// for (let i = 0; i < 10; i++) {
//     A[i] = Math.round((Math.random() * 9) + 1)
// }
// console.log(A)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let A = [10, 1, -20, 30, 0, 8, 6, 234, 0.1]
// for (let i = 0; i < 100; i++) {
//     if (A[i] < 10 && A[i] > 0) {
//         console.log(i)
//     }
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let A = [10, 1, -20, 30, 0, 8, 5, 6, 5, 234, 0.1]
// for (let i = 0; i < A.length; i++){
//     if (A[i] == 5){
//         console.log("????????")
//         break
//     }
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let A = [10, 1, -20, 30, 0, 8, 5, 6, 5, 234, 0.1], answ = 0;
// for (let i = 0; i < A.length; i++) {
//     answ += Number(A[i])
// }
// console.log(answ)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let A = [10, 1, -20, 30, 0, 8, 5, 6, 5, 234, 0.1], answ = 0;
// for (let i = 0; i < A.length; i++) {
//     answ += Number(A[i]) * Number(A[i])
// }
// console.log(answ)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let A = [10, 1, -20, 30, 0, 8, 5, 6, 5, 234, 0.1], answ = 0;
// for (let i = 0; i < A.length; i++) {
//     answ += Number(A[i])
// }
// console.log((answ / A.length).toFixed(2))

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// $("#WS1 #button1").click( () => {
//     let answ = 0
//     $("#WS1 input").each( function (value) {
//         if ($(this).attr("id") != "out1"){
//             answ += Number($(this).val())
//         }
//     })
//     $("#out1").val(Number(answ))
// })

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let answ = 0
// $("#WS2 input").on("focusout", function () {
//     let A = $(this).val().split("")
//     for (let i = 0; i < A.length; i++){
//         answ += Number(A[i])
//     }
//     console.log(answ)
// })

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let answ = 0
// $("#WS3 input").on("focusout", function () {
//     let A = $(this).val().split(",")
//     for (let i = 0; i < A.length; i++){
//         answ += Number(A[i])
//     }
//     console.log((answ / A.length).toFixed(2))
// })

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// $("#WS4 #in").on("focusout", function () {
//     let a = $(this)
//     $("#WS4 #out").each( function (index) {
//         $(this).val(a.val().split(" ")[index])
//     })
// })

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// $("#WS5 input").on("focusout", function () {
//     let Max = 0
//     console.log($(this).val().split(" ").length)
//     for (let i = 0; i < $(this).val().split(" ").length; i++){
//         if ($(this).val().split(" ")[i].length > Max){
//             Max = $(this).val().split(" ")[i].length
//         }
//     }
//     console.log(Max)
// })
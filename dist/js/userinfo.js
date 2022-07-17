
let names = sessionStorage.getItem("name");
let points = sessionStorage.getItem("points");
let time = sessionStorage.getItem("time")

document.querySelector(".name").innerHTML = names

document.querySelector(".points").innerHTML = points

document.querySelector(".time").innerHTML = time





// let dt = new Date(new Date().setTime(0))
// let tim = dt.getTime()
// let seconds = Math.floor((tim % (100 * 60)) / 1000)
// let minutes = Math.floor((tim % (1000 * 60 * 60)) / (1000 * 60))

// let timex = 0;

// setInterval(() => {
//     if (seconds < 59) {
//         seconds++
//     } else {
//         minutes++;
//         seconds = 0;
//     }
//     let formatted_sec = seconds < 10 ? `0${seconds}` : `${seconds}`;
//     let formatted_min = minutes < 10 ? `0${minutes}` : `${minutes}`;
//     document.querySelector(".time").innerHTML = `${formatted_min} : ${formatted_sec}`
// }, 1000)











// let names = sessionStorage.getItem("name");
// let points = sessionStorage.getItem("points");
// let time = sessionStorage.getItem("time")
// // console.log(name)
// // console.log(point)
// // console.log(time)

// // userName

// let idName = document.getElementById("userName")
// idName.innerHTML = names

// let idPoint = document.getElementById("point");
// idPoint.innerHTML = points




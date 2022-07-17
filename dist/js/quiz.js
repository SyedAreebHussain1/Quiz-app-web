window.onload = () => {
    show(0);
}
let questions = [
    {
        id: 1,
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Aceapt Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        question: "What is the full form of CPU?",
        answer: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
        ]
    },
    {
        id: 3,
        question: "What is the full form of E-mail",
        answer: "Electronic Mail",
        options: [
            "Electronic Mail",
            "Electric Mail",
            "Engine Mail",
            "None of these"
        ]
    }
];


let submitForm = (e) => {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;

    //store player name
    sessionStorage.setItem("name", name)

    location.href = "quiz.html"

}


let question_count = 0;
let point = 0;

let next = () => {

    let dt = new Date(new Date().setTime(0))
    let tim = dt.getTime()
    let seconds = Math.floor((tim % (100 * 60)) / 1000)
    let minutes = Math.floor((tim % (1000 * 60 * 60)) / (1000 * 60))

    let timex = 0;

    setInterval(() => {
        if (seconds < 59) {
            seconds++
        } else {
            minutes++;
            seconds = 0;
        }
        let formatted_sec = seconds < 10 ? `0${seconds}` : `${seconds}`;
        let formatted_min = minutes < 10 ? `0${minutes}` : `${minutes}`;
        document.querySelector(".time").innerHTML = `${formatted_min} : ${formatted_sec}`
    }, 1000)
    let user_answer = document.querySelector("li.option.active").innerHTML;

    //check answer by the user 
    if (user_answer == questions[question_count].answer) {
        // console.log(user_answer)
        point += 10
        // console.log(point)
        sessionStorage.setItem("points", point)
    }
    if (question_count == questions.length - 1) {
        sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`)
        location.href = "end.html";
        return;
    }

    question_count++
    show(question_count)
}

let show = (count) => {
    let question = document.getElementById("questions");

    question.innerHTML = `<h2>Q${question_count + 1}.${questions[count].question}</h2>
    <ul class="option_group">
        <li class="option">${questions[count].options[0]}</li>
        <li class="option">${questions[count].options[1]}</li>
        <li class="option">${questions[count].options[2]}</li>
        <li class="option">${questions[count].options[3]}</li>
    </ul> 
    `;
    toggleActive()
}

let toggleActive = () => {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let r = 0; r < option.length; r++) {
                if (option[r].classList.contains("active")) {
                    option[r].classList.remove("active")
                }
            }
            option[i].classList.add("active");
        }
    }
}



let names = sessionStorage.getItem("name");
let points = sessionStorage.getItem("points");
let time = sessionStorage.getItem("time")

document.querySelector(".name").innerHTML = names

document.querySelector(".points").innerHTML = points

document.querySelector(".time").innerHTML = time
















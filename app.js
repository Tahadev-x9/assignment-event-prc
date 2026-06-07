let userForm = document.getElementById("userForm");

let username = document.getElementById("username");

let clickBtn = document.getElementById("clickBtn");


// submut event 

userForm.addEventListener(
    "submit",
    function(event){
        event.preventDefault();

        alert(
            "Form submitted : " + 
               username.value
        );
    }
);

//click eevent 
clickBtn.addEventListener(
    "click", 
    function(){
        alert("Button clicked");
    }
);


let liveInput = document.getElementById("liveInput");
let liveText  = document.getElementById("liveText");

liveInput.addEventListener(
    "input",
    function(){
        liveText.innerText = 
        liveInput.value;
    }
);


// let course = document.getElementById("course");

// let selectedCourse = document.getElementById("selectedCourse");

// let box = document.getElementById("box");

//MOUSEOVER EVENT 
// box.addEventListener(
//     "mouseover",
//     function(){

//         box.innerText = 
//         "Mouse Entered";
//     }
// );

// // MOUSEOUT EVENT

// box.addEventListener(
//     "mouseout",
//     function(){
//         box.innerText = 
//         "Submit";
//     }
// );







let userFirm = document.getElementById("userFirm")

let course =
document.getElementById("course");

userFirm.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        alert(
            "Course Submitted : " +
            course.value
        );

    }
);
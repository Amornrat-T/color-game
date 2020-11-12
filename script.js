var colors = [
    "rgb(168, 47, 168)",
    "rgb(76, 224, 224)",
    "rgb(255, 207, 78)",
    "rgb(178, 0, 55)",
    "rgb(162, 150, 255)",
    "rgb(42, 110, 42)"
]
var numSquare = 6;
var colors = [];
var pickedColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var reactDisplay = document.querySelector("#react");
var resetBtn = document.querySelector("#resetBtn");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeBtn = document.querySelectorAll(".mode")

init();

function init() {

    setUpMode();
    // mode button
    // for (var i = 0; i < modeBtn.length; i++) {
    //     modeBtn[i].addEventListener("click", function () {
    //         modeBtn[0].classList.remove("selected");
    //         modeBtn[1].classList.remove("selected");
    //         this.classList.add("selected")   
    //         this.textContent === "EASY" ? numSquare = 3: numSquare = 6;
    //         reset()
    //     });
    // };
    
    // square set
    setUpSquare();
    // for (var i = 0; i < square.length; i++) {
    //     square[i].addEventListener ("click", function () {
    //        var clickedColor = this.style.backgroundColor;
    //        if (clickedColor === pickedColor) {
    //            resetBtn.textContent = "PLAY AGAIN!"
    //             reactDisplay.textContent = " CORRECT ";
    //             changeColor(clickedColor);
    //             document.body.style.backgroundColor = clickedColor;
    //        } else {
    //            this.style.backgroundColor = "#fdfdfd";
    //            reactDisplay.textContent = " TRY AGAIN";
    //        }
    //     });
    // }

    // reset page
    reset();
};

function setUpMode() {
    for (var i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function () {
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected")   
            this.textContent === "EASY" ? numSquare = 3: numSquare = 6;
            reset()
        });
    };
};

function setUpSquare() {
    for (var i = 0; i < square.length; i++) {
        square[i].addEventListener ("click", function () {
           var clickedColor = this.style.backgroundColor;
           if (clickedColor === pickedColor) {
               resetBtn.textContent = "PLAY AGAIN!"
                reactDisplay.textContent = " CORRECT ";
                changeColor(clickedColor);
                document.body.style.backgroundColor = clickedColor;
           } else {
               this.style.backgroundColor = "#fdfdfd";
               reactDisplay.textContent = " TRY AGAIN";
           }
        });
    }
}


// for (var i = 0; i < modeBtn.length; i++) {
//     modeBtn[i].addEventListener("click", function () {
//         modeBtn[0].classList.remove("selected");
//         modeBtn[1].classList.remove("selected");
//         this.classList.add("selected")

//         this.textContent === "EASY" ? numSquare = 3: numSquare = 6;
//         // if (this.textContent === "EASY") {
//         //     numSquare = 3;
//         // } else {
//         //     numSquare = 6;
//         // };
//         reset()
//         // hom many square to show
//         // pick new colors
//         // new pickedColor
//         // update changing
//     });
// };

function reset() {
    colors = generateRandomColors(numSquare);
    pickedColor = pickColor();
    resetBtn.textContent = "NEW COLORS";
    colorDisplay.textContent = pickedColor;
    reactDisplay.textContent = " ";
    for (var i = 0; i < square.length; i++) {
        if (colors[i]) {
            square[i].style.display = "block";
            square[i].style.backgroundColor = colors[i];
        } else {
           square[i].style.display = "none"; 
        }        
    };
    document.body.style.backgroundColor = "#F4F4F4";
};

// easyBtn.addEventListener ("click", function () {
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquare = 3;
//     colors = generateRandomColors(numSquare);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < square.length; i++) {
//         if (colors[i]) {
//             square[i].style.backgroundColor = colors[i];
//         } else {
//             square[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener ("click", function () {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquare = 6;
//     colors = generateRandomColors(numSquare);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < square.length; i++) {
//             square[i].style.backgroundColor = colors[i];
//             square[i].style.display = "block";
//         }
// });

resetBtn.addEventListener("click", function () {
    reset();
    // colors = generateRandomColors(numSquare);
    // pickedColor = pickColor();
    // resetBtn.textContent = "NEW COLORS";
    // colorDisplay.textContent = pickedColor;
    // reactDisplay.textContent = " ";
    // for (var i = 0; i < square.length; i++) {
    //     square[i].style.backgroundColor=colors[i];      
    // };
    // document.body.style.backgroundColor = "#F4F4F4";
});

colorDisplay.textContent = pickedColor;

// for (var i = 0; i < square.length; i++) {
//     square[i].style.backgroundColor = colors[i];

//     square[i].addEventListener ("click", function () {
//        var clickedColor = this.style.backgroundColor;

//        if (clickedColor === pickedColor) {
//            resetBtn.textContent = "PLAY AGAIN!"
//             reactDisplay.textContent = " CORRECT ";
//             changeColor(clickedColor);
//             document.body.style.backgroundColor = clickedColor;
//        } else {
//            this.style.backgroundColor = "#fdfdfd";
//            reactDisplay.textContent = " TRY AGAIN";
//        }
//     });
// }

function changeColor(color) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color;           
    }
};

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
};

function generateRandomColors(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push( randomColor() );
    };

    return arr;
}

function randomColor() {
    /*red*/
    var r = Math.floor( Math.random() * 256 );
    /*green*/
    var g = Math.floor( Math.random() * 256 );
    /*blue*/
    var b = Math.floor( Math.random() * 256 );
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
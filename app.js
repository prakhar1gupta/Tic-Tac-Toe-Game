// let boxes=document.querySelectorAll(".box");
// let resetBtn=document.querySelector("#reset");
// const win=[
//         [0,1,2],
//         [3,4,5],
//         [6,7,8],
//         [0,3,6],
//         [1,4,7],
//         [2,5,8],
//         [0,4,8],
//         [2,4,6]
// ];
// let turn =true;
// boxes.forEach((box) => {
//     box.addEventListener("click",()=>{
//        console.log("box is clicked");
//        if(turn){
//         box.innerText="O";
//         turn=false;
//        }
//        else{
//         box.innerText="X";
//         turn=true;
//        }
//        box.disabled=true;
//        checkWinner();
//     });
// });
 
// const checkWinner = () =>{
//     for(let pattern of win){
//         let pos1=boxes[pattern[0]].innerText;
//         let pos2=boxes[pattern[1]].innerText;
//         let pos3=boxes[pattern[2]].innerText;
//         if(pos1!="" && pos2!="" && pos3!=""){
//             if(pos1===pos2 && pos2===pos3){
//                 console.log("Winner",pos1);
//                 alert("Winner have found");
//                 boxes.forEach(box => {
//                     box.disabled = true; // Disable the button
//                 });
//                 return;
//             }
//         }
//     }
// }

let winsound = new Audio("win s.wav");
let drawsound = new Audio("draw s.mp3");

let music = false;
let a = document.querySelectorAll(".box");
let chance = true;

// Winning patterns
const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Add click event listeners to each box
a.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button is clicked");

        // Alternate between "O" and "X"
        if (chance) {
            box.innerText = "O";
            chance = false;
        } else {
            box.innerText = "X";
            chance = true;
        }

        box.disabled = true; // Disable the clicked box
        checkWinner(); // Check if there's a winner or draw
    });
});

// Function to check for a winner or a draw
const checkWinner = () => {
    for (let pattern of winner) {
        let pos1 = a[pattern[0]].innerText;
        let pos2 = a[pattern[1]].innerText;
        let pos3 = a[pattern[2]].innerText;

        // Check if the current pattern matches
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner", pos1);
                winsound.play(); // Play win sound
                alert(`Winner is ${pos1}`);
                a.forEach((box) => {
                    box.disabled = true; // Disable all boxes
                });
                return;
            }
        }
    }

    // Check for a draw
    let allDisabled = true;
    a.forEach((box) => {
        if (!box.disabled) {
            allDisabled = false;
        }
    });

    if (allDisabled) {
        console.log("It's a draw!");
        drawsound.play(); // Play draw sound
        alert("It's a draw!");
    }
};


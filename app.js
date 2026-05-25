let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newgame=document.querySelector("#newgame");
let msg=document.querySelector('#msg');
let turn0=true;
const winptr=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was pressed");
        if(turn0){
            box.innerText="0";
            box.style.backgroundColor="#5b6057"
            turn0=false;
        }
        else{
            box.innerText="X";
            box.style.backgroundColor="#563635"
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
    resetbtn.addEventListener("click",()=>{
        console.log("reset button was clicked");
        reset();
    });
});
const checkwinner=()=>{
    for(let pattern of winptr){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                announce(pos1val);
            }
        }
    }
}
const reset=()=>{
    boxes.forEach((box1)=>{
            turn0=true;
            msg.style.display="none";
            box1.innerText="";
            box1.style.backgroundColor="#fff";
            box1.disabled=false;
    });
}
newgame.addEventListener("click",()=>{
    console.log("new game was pressed");
    reset();
})
const announce=(pos1val)=>{
    for(let box of boxes){
        box.disabled=true;
    }
    msg.innerText=`Congrats, winner is ${pos1val}!!!`;
    msg.style.display="block";
}

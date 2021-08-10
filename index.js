// Your code here
function razzle() {
    console.log("You've been razzled!");
}
razzle();

function razzle(lawyer = "Billy", target = " 'em") {
    console.log(`${lawyer} razzle-dazzles ${target}!`);
}
razzle();
razzle("Methuselah", "T'challah");


function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const fn = function() {
    console.log("Yet more razzing");
}
fn;


function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(adj = "*") {
    function newAdj(innerAdj = "special") {
        return `You are ${adj}${innerAdj}${adj}!`
    }
    return newAdj;
}

wrapAdjective("%")("a dedicated programmer");
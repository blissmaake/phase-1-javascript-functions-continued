// code your solution here
function saturdayFun(activity = `roller-skate`) {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun (activity = "bathe my dog");

function mondayWork(activity = `go to the office`) {
    return `This Monday, I will ${activity}.`
}
mondayWork(activity = "work from home");

function wrapAdjective(adjective = `*`){
    return function(text = "a hard worker"){
        return `You are ${adjective}${text}${adjective}!`
    }

}
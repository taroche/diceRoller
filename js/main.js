const running = (dice, count, result, minus, plus) => {
    minus.onclick = function() {
        count.stepDown(1);
    };
    plus.onclick = function() {
        count.stepUp(1);
    };
        roll = [];
    dice.onclick = () => {
        for (let i = 0; i < count.value; i++) {
            roll.push(Math.floor(Math.random() * 6) + 1);
        }
        let rollAsString = roll.join(', ')
        if (roll.length <= 20){
            result.innerHTML = rollAsString
        }
        else {
            result.innerHTML = 'You are trying to roll to many Dice.'
        }
        roll.length = 0;
    }
}
const fourSide = function(){
    let dice = document.getElementById('fourSideD');
    let count = document.getElementById('countFourD');
    let result = document.getElementById('resultFourD');
    const minus = document.getElementById('minusFourD');
    const plus = document.getElementById('plusFourD');

    running(dice, count, result, minus, plus)
}();
const sixSide = function(){
    let dice = document.getElementById('sixSideD');
    let count = document.getElementById('countSixD');
    let result = document.getElementById('resultSixD');
    const minus = document.getElementById('minusSixD');
    const plus = document.getElementById('plusSixD');

    running(dice, count, result, minus, plus)
}();
const eightSide = function(){
    let dice = document.getElementById('eightSideD');
    let count = document.getElementById('countEightD');
    let result = document.getElementById('resultEightD');
    const minus = document.getElementById('minusEightD');
    const plus = document.getElementById('plusEightD');

    running(dice, count, result, minus, plus)
}();
const tenSide = function(){
    let dice = document.getElementById('tenSideD');
    let count = document.getElementById('countTenD');
    let result = document.getElementById('resultTenD');
    const minus = document.getElementById('minusTenD');
    const plus = document.getElementById('plusTenD');

    running(dice, count, result, minus, plus)
}();
const twelveSide = function(){
    let dice = document.getElementById('twelveSideD');
    let count = document.getElementById('countTwelveD');
    let result = document.getElementById('resultTwelveD');
    const minus = document.getElementById('minusTwelveD');
    const plus = document.getElementById('plusTwelveD');

    running(dice, count, result, minus, plus)
}();
const twentySide = function(){
    let dice = document.getElementById('twentySideD');
    let count = document.getElementById('countTwentyD');
    let result = document.getElementById('resultTwentyD');
    const minus = document.getElementById('minusTwentyD');
    const plus = document.getElementById('plusTwentyD');

    minus.onclick = function() {
        count.stepDown(1);
    };
    plus.onclick = function() {
        count.stepUp(1);
    };
        roll = [];
    dice.onclick = () => {
        for (let i = 0; i < count.value; i++) {
            roll.push(Math.floor(Math.random() * 20) + 1);
        }
        let rollAsString = roll.join(', ')
        if (roll.length <= 5){
            result.innerHTML = rollAsString
        }
        else {
            result.innerHTML = 'You are trying to roll to many Dice.'
        }
        roll.length = 0;
    }
}();

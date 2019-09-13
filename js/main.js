(function() {
const running = (dice, count, result, minus, plus, number) => {
    minus.onclick = function() {
        count.stepDown(1);
    };
    plus.onclick = function() {
        count.stepUp(1);
    };
        roll = [];
    dice.onclick = () => {
        for (let i = 0; i < count.value; i++) {
            roll.push(Math.floor(Math.random() * number) + 1);
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
};

const fourSide = function(){
    let dice = document.getElementById('fourSideD');
    let count = document.getElementById('countFourD');
    let result = document.getElementById('resultFourD');
    const minus = document.getElementById('minusFourD');
    const plus = document.getElementById('plusFourD');
    const number = 4;

    running(dice, count, result, minus, plus, number)
}();

const sixSide = function(){
    let dice = document.getElementById('sixSideD');
    let count = document.getElementById('countSixD');
    let result = document.getElementById('resultSixD');
    const minus = document.getElementById('minusSixD');
    const plus = document.getElementById('plusSixD');
    const number = 6;

    running(dice, count, result, minus, plus, number)
}();

const eightSide = function(){
    let dice = document.getElementById('eightSideD');
    let count = document.getElementById('countEightD');
    let result = document.getElementById('resultEightD');
    const minus = document.getElementById('minusEightD');
    const plus = document.getElementById('plusEightD');
    const number = 8;

    running(dice, count, result, minus, plus, number)
}();

const tenSide = function(){
    let dice = document.getElementById('tenSideD');
    let count = document.getElementById('countTenD');
    let result = document.getElementById('resultTenD');
    const minus = document.getElementById('minusTenD');
    const plus = document.getElementById('plusTenD');
    const number = 10;

    running(dice, count, result, minus, plus, number)
}();

const twelveSide = function(){
    let dice = document.getElementById('twelveSideD');
    let count = document.getElementById('countTwelveD');
    let result = document.getElementById('resultTwelveD');
    const minus = document.getElementById('minusTwelveD');
    const plus = document.getElementById('plusTwelveD');
    const number = 12;

    running(dice, count, result, minus, plus, number)
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
})();
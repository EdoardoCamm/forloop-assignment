let Number2 = 0
// Counts up from 0-9
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(index)
    }
})
// Adds 1+2+3+4+5+ to 100
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 9; index++) {
        Number2 += 505
    }
    basic.showNumber(Number2)
})
// Counts down from 9-0
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 9; index++) {
        Number2 = 9 - index
        basic.showNumber(Number2)
    }
})
basic.forever(function () {
	
})

let indexMax = 0
let bright = 0
function drawRow (row: number) {
    for (let col = 0; col <= 4; col++) {
        led.plot(col, row)
    }
}
function drawCheckerBoard (size: number) {
    indexMax = size - 1
    for (let col = 0; col <= indexMax; col++) {
        for (let row = 0; row <= indexMax; row++) {
            if ((col + row) % 2 == 0) {
                bright = 100
            } else {
                bright = 5
            }
            led.plotBrightness(col, row, bright)
        }
    }
}
function drawDiag2 () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 4 - index)
    }
}
function drawSquare (size: number) {
    indexMax = size - 1
    for (let col = 0; col <= indexMax; col++) {
        for (let row = 0; row <= indexMax; row++) {
            led.plot(col, row)
        }
    }
}
function drawTriangleV2 (size: number) {
    indexMax = size - 1
    for (let col = 0; col <= indexMax; col++) {
        for (let row = 0; row <= indexMax; row++) {
            if (col + row < size) {
                led.plot(col, row)
            }
        }
    }
}
function drawBright (size: number) {
    indexMax = size - 1
    for (let col = 0; col <= indexMax; col++) {
        for (let row = 0; row <= indexMax; row++) {
            bright = (col + row) * 25 + 5
            led.plotBrightness(col, row, bright)
        }
    }
}
function drawCol (col: number) {
    for (let row = 0; row <= 4; row++) {
        led.plot(col, row)
    }
}
function drawTriangleV1 (size: number) {
    indexMax = size - 1
    for (let col = 0; col <= indexMax; col++) {
        for (let row = 0; row <= col; row++) {
            led.plot(col, row)
        }
    }
}
function drawDiag () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, index)
    }
}

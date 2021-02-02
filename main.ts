control.onEvent(1, 3, function () {
    for (let i = 0; i < 3; i++) {
        light.setAll(0xffff00)
        pause(500)
        light.setAll(0x000000)
        pause(500)
    }
})
let counter_a = 0
control.runInParallel(function () {
    light.setPixelColor(0, 0xff0000)
    light.setPixelColor(1, 0xff0000)
    light.setPixelColor(2, 0xff0000)
    light.setPixelColor(3, 0xff0000)
    pause(3000)
    light.setPixelColor(0, 0x000000)
    light.setPixelColor(1, 0x000000)
    light.setPixelColor(2, 0x000000)
    light.setPixelColor(3, 0x000000)
    pause(500)
    counter_a += 1
    control.raiseEvent(
    1,
    counter_a
    )
})
control.runInParallel(function () {
    light.setPixelColor(4, 0x00ff00)
    light.setPixelColor(5, 0x00ff00)
    light.setPixelColor(6, 0x00ff00)
    pause(1000)
    light.setPixelColor(4, 0x000000)
    light.setPixelColor(5, 0x000000)
    light.setPixelColor(6, 0x000000)
    pause(500)
    counter_a += 1
    control.raiseEvent(
    1,
    counter_a
    )
})
control.runInParallel(function () {
    light.setPixelColor(7, 0x007fff)
    light.setPixelColor(8, 0x007fff)
    light.setPixelColor(9, 0x007fff)
    pause(5000)
    light.setPixelColor(7, 0x000000)
    light.setPixelColor(8, 0x000000)
    light.setPixelColor(9, 0x000000)
    pause(500)
    counter_a += 1
    control.raiseEvent(
    1,
    counter_a
    )
})

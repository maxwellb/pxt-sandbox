input.buttonA.onEvent(ButtonEvent.Click, function () {
    mode += 1
    if (mode > 3) {
        mode = 1
    }
    pause(500)
    control.raiseEvent(
    10,
    mode
    )
})
control.onEvent(10, 1, function () {
    light.setBrightness(255)
    light.setAll(0x000000)
    index = 0
    while (mode == 1) {
        light.setPixelColor(index % 10, 0xff0000)
        light.setPixelColor((index + 1) % 10, 0xff0000)
        light.setPixelColor((index + 2) % 10, 0xffff00)
        pause(100)
        light.setPixelColor(index % 10, 0x000000)
        index += 1
    }
})
control.onEvent(10, 2, function () {
    light.setBrightness(255)
    light.setAll(0x000000)
    while (mode == 2) {
        light.setPixelColor(Math.randomRange(0, 9), light.hsv(Math.randomRange(0, 255), 255, 119))
        light.setPixelColor(Math.randomRange(0, 9), light.hsv(Math.randomRange(0, 255), 255, 119))
        light.setPixelColor(Math.randomRange(0, 9), light.hsv(Math.randomRange(0, 255), 255, 119))
        pause(85)
    }
})
control.onEvent(10, 3, function () {
	
})
input.onLightConditionChanged(LightCondition.Dark, function () {
    ambient = -1
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    mode = 0
    interrupt = 0
    if (steady == 1) {
        steady = 0
        light.setBrightness(8)
        light.showRing(
        `blue blue blue blue blue blue blue blue blue blue`
        )
    } else {
        steady = 1
        interrupt += 1
        light.setBrightness(78)
        light.showRing(
        `black black black black black black black black black black`
        )
        while (interrupt > 0) {
            if (input.temperature(TemperatureUnit.Fahrenheit) > 50) {
                light.setPixelColor(0, 0xff8000)
                blinky = 0
                if (input.temperature(TemperatureUnit.Fahrenheit) > 55) {
                    light.setPixelColor(1, 0xff0000)
                    blinky = 1
                } else {
                    light.setPixelColor(1, 0x000000)
                }
                if (input.temperature(TemperatureUnit.Fahrenheit) > 60) {
                    light.setPixelColor(2, 0xff0000)
                    blinky = 2
                } else {
                    light.setPixelColor(2, 0x000000)
                }
                if (input.temperature(TemperatureUnit.Fahrenheit) > 65) {
                    light.setPixelColor(3, 0xff0000)
                    blinky = 3
                } else {
                    light.setPixelColor(3, 0x000000)
                }
                if (input.temperature(TemperatureUnit.Fahrenheit) > 70) {
                    light.setPixelColor(4, 0xff0000)
                    blinky = 4
                } else {
                    light.setPixelColor(4, 0x000000)
                }
                if (input.temperature(TemperatureUnit.Fahrenheit) > 75) {
                    light.setPixelColor(5, 0xff0000)
                    blinky = 5
                } else {
                    light.setPixelColor(5, 0x000000)
                }
                if (input.temperature(TemperatureUnit.Fahrenheit) > 80) {
                    light.setPixelColor(6, 0xff0000)
                    blinky = 6
                } else {
                    light.setPixelColor(6, 0x000000)
                }
                if (input.temperature(TemperatureUnit.Fahrenheit) > 85) {
                    light.setPixelColor(7, 0xff0000)
                    blinky = 7
                } else {
                    light.setPixelColor(7, 0x000000)
                }
                if (input.temperature(TemperatureUnit.Fahrenheit) > 90) {
                    light.setPixelColor(8, 0xff0000)
                    blinky = 8
                } else {
                    light.setPixelColor(8, 0x000000)
                }
                if (input.temperature(TemperatureUnit.Fahrenheit) > 95) {
                    light.setPixelColor(9, 0xff0000)
                    blinky = 9
                } else {
                    light.setPixelColor(9, 0x000000)
                }
            } else {
                light.setPixelColor(0, 0x7f00ff)
                blinky = 0
                if (input.temperature(TemperatureUnit.Fahrenheit) < 45) {
                    light.setPixelColor(1, 0x007fff)
                    blinky = 1
                } else {
                    light.setPixelColor(1, 0x000000)
                }
                if (input.temperature(TemperatureUnit.Fahrenheit) < 40) {
                    light.setPixelColor(2, 0x007fff)
                    blinky = 2
                } else {
                    light.setPixelColor(2, 0x000000)
                }
                if (input.temperature(TemperatureUnit.Fahrenheit) < 35) {
                    light.setPixelColor(3, 0x007fff)
                    blinky = 3
                } else {
                    light.setPixelColor(3, 0x000000)
                }
                if (input.temperature(TemperatureUnit.Fahrenheit) < 32) {
                    light.setPixelColor(3, 0x00ffff)
                }
                if (input.temperature(TemperatureUnit.Fahrenheit) < 30) {
                    light.setPixelColor(4, 0x00ffff)
                    blinky = 4
                } else {
                    light.setPixelColor(4, 0x000000)
                }
                if (input.temperature(TemperatureUnit.Fahrenheit) < 25) {
                    light.setPixelColor(5, 0x00ffff)
                    blinky = 5
                } else {
                    light.setPixelColor(5, 0x000000)
                }
                if (input.temperature(TemperatureUnit.Fahrenheit) < 20) {
                    light.setPixelColor(6, 0x00ffff)
                    blinky = 6
                } else {
                    light.setPixelColor(6, 0x000000)
                }
                if (input.temperature(TemperatureUnit.Fahrenheit) < 15) {
                    light.setPixelColor(7, 0x00ffff)
                    blinky = 7
                } else {
                    light.setPixelColor(7, 0x000000)
                }
                if (input.temperature(TemperatureUnit.Fahrenheit) < 10) {
                    light.setPixelColor(8, 0x00ffff)
                    blinky = 8
                } else {
                    light.setPixelColor(8, 0x000000)
                }
                if (input.temperature(TemperatureUnit.Fahrenheit) < 5) {
                    light.setPixelColor(9, 0x00ffff)
                    blinky = 9
                } else {
                    light.setPixelColor(9, 0x000000)
                }
            }
            com.github.maxwellb.toolbox.blink(blinky, 50 + 15 * blinky, 2)
            pause(5000 - 460 * blinky)
        }
    }
})
input.onLightConditionChanged(LightCondition.Bright, function () {
    ambient = 1
})
input.buttonB.onEvent(ButtonEvent.LongClick, function () {
    input.setLightThreshold(LightCondition.Bright, input.lightLevel() * 1.5)
    input.setLightThreshold(LightCondition.Dark, input.lightLevel())
})
let blinky = 0
let interrupt = 0
let ambient = 0
let index = 0
let mode = 0
let steady = 0
light.showRing(
`blue purple blue purple blue blue pink blue pink blue`
)
steady = 1

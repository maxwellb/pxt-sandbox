control.onEvent(1, 88, function () {
    list = []
    light.setPixelColor(0, 0x000000)
    light.setPixelColor(2, 0x000000)
    light.setPixelColor(4, 0x000000)
    light.setPixelColor(5, 0x000000)
    light.setPixelColor(7, 0x000000)
    control.timer1.reset()
    com.github.maxwellb.toolbox.noop()
    control.runInParallel(function () {
        pause(Math.randomRange(1, 5) * 1000)
        control.raiseEvent(
        10,
        1
        )
    })
    control.runInParallel(function () {
        pause(Math.randomRange(1, 5) * 1000)
        control.raiseEvent(
        10,
        3
        )
    })
    control.runInParallel(function () {
        pause(Math.randomRange(1, 5) * 1000)
        control.raiseEvent(
        10,
        5
        )
        control.runInParallel(function () {
            pause(Math.randomRange(1, 5) * 1000)
            control.raiseEvent(
            10,
            7
            )
        })
    })
    control.waitForEvent(1, 99)
    pause(1000)
    light.setPixelColor(7, 0x00ff00)
    pause(Math.randomRange(3600, 6900))
    while (1 == toggle || 45 < control.timer1.seconds()) {
        pause(5)
    }
    control.raiseEvent(
    1,
    88
    )
})
control.onEvent(1, 1, function () {
    if (3 <= list.length) {
        control.raiseEvent(
        1,
        99
        )
    }
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    toggle = Math.abs(toggle - 1)
    if (0 < toggle) {
        music.playTone(1700, music.beat(BeatFraction.Eighth))
    } else {
        music.playTone(659, music.beat(BeatFraction.Eighth))
    }
})
control.onEvent(10, 1, function () {
    pause(100 * Math.randomRange(10, 40))
    for (let i = 0; i < Math.randomRange(3, 10); i++) {
        light.setPixelColor(0, light.rgb(60, 40, 0))
        com.github.maxwellb.toolbox.noop()
        pause(500)
        com.github.maxwellb.toolbox.noop()
        light.setPixelColor(0, light.rgb(60, 5, 0))
        com.github.maxwellb.toolbox.noop()
        pause(500)
    }
    light.setPixelColor(0, light.rgb(100, 0, 65))
    control.raiseEvent(
    10,
    2
    )
})
control.onEvent(10, 3, function () {
    pause(100 * Math.randomRange(10, 40))
    for (let i = 0; i < Math.randomRange(3, 10); i++) {
        light.setPixelColor(2, 0xff9da5)
        com.github.maxwellb.toolbox.noop()
        pause(500)
        com.github.maxwellb.toolbox.noop()
        light.setPixelColor(2, 0x65471f)
        com.github.maxwellb.toolbox.noop()
        pause(500)
    }
    light.setPixelColor(2, 0xff8000)
    control.raiseEvent(
    10,
    4
    )
})
control.onEvent(10, 5, function () {
    pause(100 * Math.randomRange(10, 40))
    for (let i = 0; i < Math.randomRange(3, 10); i++) {
        light.setPixelColor(4, 0x00ff00)
        com.github.maxwellb.toolbox.noop()
        pause(500)
        com.github.maxwellb.toolbox.noop()
        light.setPixelColor(4, 0x999999)
        com.github.maxwellb.toolbox.noop()
        pause(500)
    }
    light.setPixelColor(4, light.rgb(0, 80, 80))
    control.raiseEvent(
    10,
    6
    )
})
control.onEvent(10, 7, function () {
    pause(100 * Math.randomRange(10, 40))
    for (let i = 0; i < Math.randomRange(3, 10); i++) {
        light.setPixelColor(5, 0xffff00)
        com.github.maxwellb.toolbox.noop()
        pause(500)
        com.github.maxwellb.toolbox.noop()
        light.setPixelColor(5, 0x00ffff)
        com.github.maxwellb.toolbox.noop()
        pause(500)
    }
    light.setPixelColor(5, 0xff0000)
    control.raiseEvent(
    10,
    8
    )
})
input.buttonB.onEvent(ButtonEvent.LongClick, function () {
    control.reset()
})
control.onEvent(10, 2, function () {
    list.insertAt(0, 1)
    control.raiseEvent(
    1,
    1
    )
})
control.onEvent(10, 4, function () {
    list.insertAt(0, 1)
    control.raiseEvent(
    1,
    1
    )
})
control.onEvent(10, 6, function () {
    list.insertAt(0, 1)
    control.raiseEvent(
    1,
    1
    )
})
control.onEvent(10, 8, function () {
    list.insertAt(0, 1)
    control.raiseEvent(
    1,
    1
    )
})
let toggle = 0
let list: number[] = []
list = []
toggle = 0
control.raiseEvent(
1,
88
)
forever(function () {
    for (let value = 0; value <= 19; value++) {
        light.setPixelColor(9, light.rgb(0, 0, 20 + 11 * value))
        pause(50)
    }
    for (let value = 0; value <= 19; value++) {
        light.setPixelColor(9, light.rgb(0, 0, 20 + 11 * (19 - value)))
        pause(50)
    }
})

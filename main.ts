/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Gavin Gallant
 * Created on: Sep 2024
 * This program uses the RobotBit's Neopixels
*/

// variables
let neopixelStrip: neopixel.Strip = null

// cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
    // Green
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    pause(1000)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    // Yellow
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    pause(500)
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    // Red
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    pause(1000)
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.showIcon(IconNames.Happy)
})
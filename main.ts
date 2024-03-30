input.onButtonPressed(Button.A, function () {
    RTC_DS1307.DateTime(
    2024,
    2,
    27,
    10,
    27,
    19
    )
})
basic.showString("Hola")
basic.forever(function () {
    basic.showString("" + (RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND)))
})

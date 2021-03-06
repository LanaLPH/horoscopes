var JAN = 1
var FEB = 2
var MAR = 3
var APR = 4
var MAY = 5
var JUN = 6
var JUL = 7
var AUG = 8
var SEP = 9
var OCT = 10
var NOV = 11
var DEC = 12

// var declaration  ARIES (March 21-April 19) TAURUS (April 20-May 20) GEMINI (May 21-June 20) CANCER (June 21-July 22) LEO (July 23-Aug. 22) VIRGO (Aug. 23-Sept. 22) LIBRA (Sept. 23-Oct. 22) SCORPIO (Oct. 23-Nov. 21) SAGITTARIUS (Nov. 22-Dec. 21) CAPRICORN (Dec. 22-Jan. 19) AQUARIUS (Jan. 20-Feb. 18) PISCES (Feb. 19-March 20)

var zodiacs = ["Aries (March 21-April 19)", "Taurus (April 20-May 20)", "Gemini (May 21-June 20)", "Cancer (June 21-July 22)", "Leo (July 23-Aug. 22)", "Virgo (Aug. 23-Sept. 22)", "Libra (Sept. 23-Oct. 22)", "Scorpio (Oct. 23-Nov. 21)", "Sagittarius (Nov. 22-Dec. 21)", "Capricorn (Dec. 22-Jan. 19)", "Aquarius (Jan. 20-Feb. 18)", "Pisces (Feb. 19-March 20)"]


function showMonthAndDay(delimeter) {
    var month = document.getElementById('month').value
    var day = document.getElementById('day').value
    alert(month + delimeter + day)
}

function showHoroscope() {
    var month = document.getElementById('month').value
    var day = document.getElementById('day').value

    if (month == DEC && day >= 22 || month == JAN && day < 20)
        return showCapricornHoro()

    if (month == JAN && 19 < day <= 31 || month == FEB && day <= 18) {
        return showAquariusHoro()
    }

    if (month == FEB && 18 < day <= 29 || month == MAR && day < 21) {
        return showPiscesHoro()
    }

    if (month == MAR && day >= 20 || month == APR && day < 20)
        return showAriesHoro()

    if (month == APR && day >= 20 || month == MAY && day < 21)
        return showTaurusHoro()

    if (month == MAY && day < 22 || month == JUN && day <= 20)
        return showGeminiHoro()

    if (month == JUN && day < 22 || month == JUL && day < 23)
        return showCancerHoro()

    if (month == JUL && day > 22 || month == AUG && day < 23)
        return showLeoHoro()

    if (month == AUG && day > 22 || month == SEP && day < 23)
        return showVirgoHoro()

    if (month == SEP && day > 22 || month == OCT && day < 23)
        return showLibraHoro()

    if (month == OCT && day > 22 || month == NOV && day < 22)
        return showScorpioHoro()

    if (month == NOV && day > 21 || month == DEC && day < 22)
        return showSagittariusHoro()

}

function showAquariusHoro() {
    document.getElementById("scopeVideo").src = "https://www.youtube.com/embed/MxtcJadzP9c";
    document.getElementById("scopeMe").src = "images/aquarius.png"; 
    document.getElementById("scopeName").innerHTML = "Hi there Aquarius";
}

function showPiscesHoro() {
    document.getElementById("scopeVideo").src = "https://www.youtube.com/embed/T88fbTPRML8";
    document.getElementById("scopeMe").src = "images/fish.png"; 
    document.getElementById("scopeName").innerHTML = "Hi there Pisces";
}

function showAriesHoro() {
    document.getElementById("scopeVideo").src = "https://www.youtube.com/embed/-Of0SdUYTFs";
    document.getElementById("scopeMe").src = "images/ram.png"; 
    document.getElementById("scopeName").innerHTML = "Hi there Aries";
}

function showTaurusHoro() {
    document.getElementById("scopeVideo").src = "https://www.youtube.com/embed/hMNbaqEM90U";
    document.getElementById("scopeMe").src = "images/bull.png"; 
    document.getElementById("scopeName").innerHTML = "Hi there Taurus";
}

function showGeminiHoro() {
    document.getElementById("scopeVideo").src = "https://www.youtube.com/embed/kTHZ7xYk9Qs";
    document.getElementById("scopeMe").src = "images/twins.png";
    document.getElementById("scopeName").innerHTML = "Hi there Gemini";
}

function showCancerHoro() {
    document.getElementById("scopeVideo").src = "https://www.youtube.com/embed/rIT8_X-_OwI";
    document.getElementById("scopeMe").src = "images/cancer.png"; 
    document.getElementById("scopeName").innerHTML = "Hi there Cancer";
}

function showLeoHoro() {
    document.getElementById("scopeVideo").src = "https://www.youtube.com/embed/eF5icmIg-Kk";
    document.getElementById("scopeMe").src = "images/lion.png"; 
    document.getElementById("scopeName").innerHTML = "Hi there Leo";
}

function showVirgoHoro() {
    document.getElementById("scopeVideo").src = "https://www.youtube.com/embed/Ho64ICRvip8";
    document.getElementById("scopeMe").src = "images/virgo.png"; 
    document.getElementById("scopeName").innerHTML = "Hi there Virgo";
}

function showLibraHoro() {
    document.getElementById("scopeVideo").src = "https://www.youtube.com/embed/H6DT2K3YHg4";
    document.getElementById("scopeMe").src = "images/libra.png"; 
    document.getElementById("scopeName").innerHTML = "Hi there Libra";
}

function showScorpioHoro() {
    document.getElementById("scopeVideo").src = "https://www.youtube.com/embed/RKKSUKvVyS4";
    document.getElementById("scopeMe").src = "images/scorpio.png"; 
    document.getElementById("scopeName").innerHTML = "Hi there Scorpi";
}

function showSagittariusHoro() {
   document.getElementById("scopeVideo").src = "https://www.youtube.com/embed/5OtlgJPIPMw";
    document.getElementById("scopeMe").src = "images/feature-sagittarius.jpg";
    document.getElementById("scopeName").innerHTML = "Hi there Sagittarius"
}

function showCapricornHoro() {
    document.getElementById("scopeVideo").src = "https://www.youtube.com/embed/-ofFO4KNI3g";
    document.getElementById("scopeMe").src = "images/goat.png"; 
    document.getElementById("scopeName").innerHTML = "Hi there Capricorn";
}

function showAllZodiacSigns() {
    var para = document.getElementById('para')
    for (i = 0; i < zodiacs.length; i++) {
        para.innerHTML += zodiacs[i] + "<br>"
    }
}

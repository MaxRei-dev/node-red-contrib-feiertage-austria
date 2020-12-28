module.exports = function(RED) {
    function feiertage(config) {
        RED.nodes.createNode(this,config);
        var context = this.context();
        var node = this;

        var checkNewYear = config.neujahr; // checkbox New Year
        var checkHolyThreeKings = config.heiligDreiKoenige; // checkboy Holy Three Kings
        var checkValentinstag = config.valentinstag; // checkbox Valentinstag
        var checkEasterSunday = config.easterSunday; // checkbox Easter Sunday
        var checkEasterMonday = config.easterMonday; // checkbox Easter Monday
        var checkMariaHimmelfahrt = config.mariaHimmelfahrt; // checkbox Maria Himmelfahrt
        var checkTagDerDeutschenEinheit = config.tagDerDeutschenEinheit; // checkbox Tag der Deutschen Einheit
        var checkHalloween = config.halloween; // checkbox Halloween
        var checkAllerheiligen = config.allerheiligen; // checkbox Allerheiligen
        var checkStMartin = config.stMartin; // checkbox St. Martin
        var checkBussUndBettag = config.bussUndBettag; // checkbox Buß und Bettag
        var checkNikolaus = config.nikolaus; // checkbox Nikolaus
        var checkadvent1 = config.advent1; // checkbox 1. Advent
        var checkAdvent2 = config.advent2; // checkbox 2. Advent
        var checkAdvent3 = config.advent3; // checkbox 3. Advent
        var checkAdvent4 = config.advent4; // checkbox 4. Advent
        var checkChristmasEve = config.heiligabend; // checkbox Christmas Eve
        var checkFirstDayChristmas = config.weihnachten1; // checkbox First day of Chrsitmas
        var checkSecondDayChristmas = config.weihnachten2; // checkbox Second day of Christmas
        var checkNewYearsEve = config.silvester; // checkbox New Years Evev

        var currentDate = new Date(); // generate object of current date
        var currentDay = currentDate.getDate(); // day 1 - 31
        var currentMonth = currentDate.getMonth() + 1; // month 0 - 11 (+1)
        var currentYear = currentDate.getFullYear(); // full year
        var currentWeekday = currentDate.getDay(); // weekday
        var currentHour = currentDate.getHours(); // hours
        var currentMinute = currentDate.getMinutes(); // minutes

        var newYear = currentYear + "-1-1"; // day of New Year
        var holyThreeKings = currentYear + "-1-6"; // day of Holy Three Kings
        var valentinstag = currentYear + "-2-14"; // day of Valentinstag
        var easterSunnday; // day of Easter Sunday
        var easterMonday; // day of easter Sunday
        var mariaHimmelfahrt = currentYear + "-8-15" // day of Maria Himmelfahrt
        var tagDerDeutschenEinheit = currentYear + "-10-3"; // day of Tag der Deutschen Einheit
        var halloween = currentYear + "-10-31"; // day of Halloween
        var allerheiligen = currentYear + "-11-1"; // day of Allerheiligen
        var stMartin = currentYear + "-11-11"; // day of St. Martin
        var bussUndBettag = currentYear + "-11-17"; // day of Buß und Bettag
        var nikolaus = currentYear + "-12-6"; // day of Nikolaus
        var advent1; // day of first Advent
        var advent2; // day of second Advent
        var advent3; // day of third Advent
        var advent4; // day of fourth Advent
        var christmasEve = currentYear + "-12-24"; // day of Christmas Eve
        var firstDayChristmas = currentYear + "-12-25"; // day of First day of Christmas
        var secondDayChristmas = currentYear + "-12-26"; // day of Second day of Christmas
        var newYearsEve = currentYear + "-12-31"; // day of New Years Eve

        var holiday = []; // array contains all holiday

        // check New Year is activated
        if (checkNewYear) {
            holiday.push(newYear); // add New Year to holiday array
        }
        else {
            var index = holiday.indexOf(newYear); // get index of item
            if (index >= 0) {
                holiday.splice(index); // remove item at index
            }
        }
        // check Holy Three Kings is activated
        if (checkHolyThreeKings) {
            holiday.push(holyThreeKings); // add Holy Three Kings to holiday array
        }
        else {
            var index = holiday.indexOf(holyThreeKings); // get index of item
            if (index >= 0) {
                holiday.splice(index); // remove item at index
            }
        }
        // check Valentinstag is activated
        if (checkValentinstag) {
            holiday.push(valentinstag); // add Valentinstag to holiday array
        }
        else {
            var index = holiday.indexOf(valentinstag); // get index of item
            if (index >= 0) {
                holiday.splice(index); // remove item at index
            }
        }
        // check Easter Sunday is activated
        if (checkEasterSunday) {
            holiday.push(easterSunnday); // add Easter Sunday to holiday array
        }
        else {
            var index = holiday.indexOf(easterSunnday); // get index of item
            if (index >= 0) {
                holiday.splice(index); // remove item at index
            }
        }
        // check Easter Monday is activated
        if (checkEasterMonday) {
            holiday.push(easterMonday); // add Easter Monday to holiday array
        }
        else {
            var index = holiday.indexOf(easterMonday); // get index of item
            if (index >= 0) {
                holiday.splice(index); // remove item at index
            }
        }
        // check Maria Himmelfahrt is activated
        if (checkMariaHimmelfahrt) {
            holiday.push(mariaHimmelfahrt); // add Maria Himmelfahrt to holiday array
        }
        else {
            var index = holiday.indexOf(mariaHimmelfahrt); // get index of item
            if (index >= 0) {
                holiday.splice(index); // remove item at index
            }
        }
        // check Tag der Deutschen Einheit is activated
        if (checkTagDerDeutschenEinheit) {
            holiday.push(tagDerDeutschenEinheit); // add Tag der Deutschen Einheit to holiday array
        }
        else {
            var index = holiday.indexOf(tagDerDeutschenEinheit); // get index of item
            if (index >= 0) {
                holiday.splice(index); // remove item at index
            }
        }
        // check Halloween is activated
        if (checkHalloween) {
            holiday.push(halloween); // add Halloween to holiday array
        }
        else {
            var index = holiday.indexOf(halloween); // get index of item
            if (index >= 0) {
                holiday.splice(index); // remove item at index
            }
        }
        // check Allerheiligen is activated
        if (checkAllerheiligen) {
            holiday.push(allerheiligen); // add Allerheiligen to holiday array
        }
        else {
            var index = holiday.indexOf(allerheiligen); // get index of item
            if (index >= 0) {
                holiday.splice(index); // remove item at index
            }
        }
        // check St. Martin is activated
        if (checkStMartin) {
            holiday.push(stMartin); // add St. Martin to holiday array
        }
        else {
            var index = holiday.indexOf(stMartin); // get index of item
            if (index >= 0) {
                holiday.splice(index); // remove item at index
            }
        }
        // check Buß und Bettag is activated
        if (checkBussUndBettag) {
            holiday.push(bussUndBettag); // add Buß und Bettag to holiday array
        }
        else {
            var index = holiday.indexOf(bussUndBettag); // get index of item
            if (index >= 0) {
                holiday.splice(index); // remove item at index
            }
        }
        // check Nikolaus is activated
        if (checkNikolaus) {
            holiday.push(nikolaus); // add Nikolaus to holiday array
        }
        else {
            var index = holiday.indexOf(nikolaus); // get index of item
            if (index >= 0) {
                holiday.splice(index); // remove item at index
            }
        }
        // check 1. Advent is activated
        if (checkadvent1) {
            holiday.push(advent1); // add 1. Advent to holiday array
        }
        else {
            var index = holiday.indexOf(advent1); // get index of item
            if (index >= 0) {
                holiday.splice(index); // remove item at index
            }
        }
        // check 2. Advent is activated
        if (checkAdvent2) {
            holiday.push(advent2); // add 2. Advent to holiday array
        }
        else {
            var index = holiday.indexOf(advent2); // get index of item
            if (index >= 0) {
                holiday.splice(index); // remove item at index
            }
        }
        // check 3. Advent is activated
        if (checkAdvent3) {
            holiday.push(advent3); // add 3. Advent to holiday array
        }
        else {
            var index = holiday.indexOf(advent3); // get index of item
            if (index >= 0) {
                holiday.splice(index); // remove item at index
            }
        }
        // check 4. Advent is activated
        if (checkAdvent4) {
            holiday.push(advent4); // add 4. Advent to holiday array
        }
        else {
            var index = holiday.indexOf(advent4); // get index of item
            if (index >= 0) {
                holiday.splice(index); // remove item at index
            }
        }
        // check Christmas Eve is activated
        if (checkChristmasEve) {
            holiday.push(christmasEve); // add Christmas Eve to holiday array
        }
        else {
            var index = holiday.indexOf(christmasEve); // get index of item
            if (index >= 0) {
                holiday.splice(index); // remove item at index
            }
        }
        // check First day of Christmas is activted
        if (checkFirstDayChristmas) {
            holiday.push(firstDayChristmas); // add First day of Christmas to holiday array
        }
        else {
            var index = holiday.indexOf(firstDayChristmas); // get index of item
            if (index >= 0) {
                holiday.splice(index); // remove item at index
            }
        }
        // check Second day of Christmas is activated
        if (checkSecondDayChristmas) {
            holiday.push(secondDayChristmas); // add Second Christmas Day to holiday array
        }
        else {
            var index = holiday.indexOf(secondDayChristmas); // get index of item
            if (index >= 0) {
                holiday.splice(index); // remove item at index
            }
        }
        // check New Years Eve is activated
        if (checkNewYearsEve) {
            holiday.push(newYearsEve) // add New Years Eve to holiday array
        }
        else {
            var index = holiday.indexOf(newYearsEve); // get index of item
            if (index >= 0) {
                holiday.splice(index); // remove item at index
            }
        }

        var todayHoliday = true;

        this.on('input', function(msg) {
            if (msg.payload == "isTodayHoliday") {
                // output boolean is today holiday
                isTodayHoliday();
                node.send({payload: todayHoliday});
            }
            else if (msg.payload == "nextHoliday") {
                // outputs next holiday date and name
            }
            else if (msg.payload == "advent") {
                // outputs advent dates
                advent(24);
                node.send({payload: advent1});
                node.send({payload: advent2});
                node.send({payload: advent3});
                node.send({payload: advent4});
            }
            else if (msg.payload == "easter") {
                // outputs easter dates
                easter();
                node.send({payload: easterSunnday});
                node.send({payload: easterMonday});
            }
        });

        var dailyInterval = setInterval(function () {
            // send todayIsHoliday every day at 00:01 o'clock
            if (currentHour == 0 && currentMinute == 1) {
                // check 00:01 o'clock
                advent(24);
                easter();
                isTodayHoliday();
                node.send({payload: todayHoliday});
            }
		}, 60000); // set interval 1min

        function isTodayHoliday() {
            // check today is holiday
            for (let i = 0; i < holiday.length; i++) {
                // step through holiday array and check today is holiday
                if (new Date(holiday[i]).toString() == new Date(currentYear + "-" + currentMonth + "-" + currentDay).toString()) {
                    todayHoliday = true;
                    break;
                }
                else {
                    todayHoliday = false;
                }
            }
        }

        function easter() {
            var a = currentYear % 19; // currentYear mod 19
            var b = (19 * a + 24) % 30;
            var easterSundayDay = b + (2 * (currentYear % 4) + 4 * (currentYear % 7) + 6 * b + 5) % 7;
            
            if (easterSundayDay == 35 || (easterSundayDay == 34 && b == 28 && a > 10)) {
                easterSundayDay -= 7;
            }
            // generate Date and change Parameters to easter Date
            var easterDate = new Date(currentYear, 2, 22);
            easterDate.setTime(easterDate.getTime() + 86400000 * easterSundayDay);

            easterSunday = currentYear + "-" + (easterDate.getMonth() + 1) + "-" + easterDate.getDate();
            easterMonday = currentYear + "-" + (easterDate.getMonth() + 1) + "-" + (easterDate.getDate() + 1);
        }

        function advent(day) {
            // calculates days of advent
            var checkDate = new Date("2021" + "-12-" + day); // generate object of specific day
            var checkMonth = checkDate.getMonth() + 1; // month (should be 12)
            var checkWeekday = checkDate.getDay(); // weekday

            // check generated weekday is 0 and generated month is 12
            if (checkWeekday === 0 && checkMonth == 12) {
                advent4 = currentYear + "-" + checkMonth + "-" + day;
                var advent3Day = day - 7; // calculate day of third advent
                advent3 = currentYear + "-" + checkMonth + "-" + advent3Day;
                var advent2Day = day - 14; // calculate day of second advent
                advent2 = currentYear + "-" + checkMonth + "-" + advent2Day;
                var advent1Day = day - 21; // calculate day of fist advent
                if (advent1Day < 1) {
                    // check day of first advent is in november
                    checkMonth = "11";
                    advent1Day = 30 + advent1Day;
                }
                advent1 = currentYear + "-" + checkMonth + "-" + advent1Day;
            }
            else {
                advent(day - 1);
            }
        }

        this.on('close', function() {
            // clears dailyInterval if node is closed
            if (interval) {
                clearInterval(dailyInterval);
            }
        });
    }
    RED.nodes.registerType("feiertage", feiertage);
};
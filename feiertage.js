module.exports = function(RED) {
    function feiertage(config) {
        RED.nodes.createNode(this,config);
        var context = this.context();
        var node = this;

        var currentDate = new Date(); // generate object of current date
        var currentDay = currentDate.getDate(); // day 1 - 31
        var currentMonth = currentDate.getMonth() + 1; // month 0 - 11 (+1)
        var currentYear = currentDate.getFullYear(); // full year
        var currentWeekday = currentDate.getDay(); // weekday

        var newYear = currentYear + "-1-1"; // day of New Year
        var holyThreeKings = currentYear + "-1-6"; // day of Holy Three Kings
        var valentinstag = currentYear + "-2-14"; // day of Valentinstag
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
        var newYearsEve = currentYear + "-12-31"; // day of New Year

        var holiday = [
            newYear,
            holyThreeKings,
            valentinstag,
            mariaHimmelfahrt,
            tagDerDeutschenEinheit,
            halloween,
            allerheiligen,
            stMartin,
            bussUndBettag,
            nikolaus,
            advent1,
            advent2,
            advent3,
            advent4,
            christmasEve,
            firstDayChristmas,
            secondDayChristmas,
            newYearsEve
        ]; // array contains all holiday

        var isTodayHoliday;

        this.on('input', function(msg) {
            if (msg.payload == "isTodayHoliday") {
                // output boolean is today holiday
                isTodayHoliday();
                node.send(isTodayHoliday);
            }
            else if (msg.payload == "nextHoliday") {
                // outputs next holiday date and name
            }
            advent(24);
        });

        function advent(day) {
            // calculates days of advent
            var checkDate = new Date(currentYear + "-12-" + day); // generate object of specific day
            var checkMonth = checkDate.getMonth() + 1; // month (should be 12)
            var checkWeekday = checkDate.getDay(); // weekday

            // check generated weekday is 0 and generated month is 12
            if (checkWeekday === 0 && checkMonth == 12) {
                advent4 = currentYear + "-" + day + "-" + day;
                advent3 = currentYear + "-" + day + "-" + day - 7;
                advent2 = currentYear + "-" + day + "-" + day - 14;
                advent1 = currentYear + "-" + day + "-" + day - 21;
            }
            else {
                advent(day - 1);
            }
        }

        function isTodayHoliday() {
            // check if today is holiday
            for (let i = 0; i < holiday.length; i++) {
                if (new Date(holiday[i]) == new Date()) {
                    isTodayHoliday = true;
                }
                else {
                    isTodayHoliday = false;
                }
            }
        }
    }
    RED.nodes.registerType("feiertage", feiertage);
};
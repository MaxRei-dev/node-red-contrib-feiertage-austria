module.exports = function(RED) {
    function feiertage(config) {
        RED.nodes.createNode(this,config);
        var context = this.context();
        var node = this;

        var checkNewYear = config.neujahr; // checkbox New Year
        var checkHolyThreeKings = config.heiligDreiKoenige; // checkboy Holy Three Kings
        var checkWeiberfastnacht = config.weiberfastnacht; // checkbox Weiberfastnacht
        var checkValentinstag = config.valentinstag; // checkbox Valentinstag
        var checkRosenmontag = config.rosenmontag; // checkbox Rosenmontag
        var checkFastnachtsdienstag = config.fastnachtsdienstag; // checkbox Fastnachtsdienstag
        var checkAschermittwoch = config.aschermittwoch; // checkbox Aschermittwoch
        var checkGruendonnerstag = config.gruendonnerstag; // checkbox Gründonnerstag
        var checkKarfreitag = config.karfreitag; // checkbox Karfreitag
        var checkEasterSunday = config.easterSunday; // checkbox Easter Sunday
        var checkEasterMonday = config.easterMonday; // checkbox Easter Monday
        var checkChristiHimmelfahrt = config.christiHimmelfahrt; // checkbox Christihimmelfahrt
        var checkPfingstsonntag = config.pfingstsonntag; // checkbox Pfingstsonntag
        var checkPfingstmontag = config.pfingstmontag; // checkbox Pfingstmontag
        var checkFronleichnam = config.fronleichnam; // checkbox Fronleichnam
        var checkMariaHimmelfahrt = config.mariaHimmelfahrt; // checkbox Maria Himmelfahrt
        var checkTagDerDeutschenEinheit = config.tagDerDeutschenEinheit; // checkbox Tag der Deutschen Einheit
        var checkHalloween = config.halloween; // checkbox Halloween
        var checkAllerheiligen = config.allerheiligen; // checkbox Allerheiligen
        var checkStMartin = config.stMartin; // checkbox St. Martin
        var checkBussUndBettag = config.bussUndBettag; // checkbox Buß und Bettag
        var checkSanta = config.nikolaus; // checkbox Nikolaus
        var checkadvent1 = config.advent1; // checkbox 1. Advent
        var checkAdvent2 = config.advent2; // checkbox 2. Advent
        var checkAdvent3 = config.advent3; // checkbox 3. Advent
        var checkAdvent4 = config.advent4; // checkbox 4. Advent
        var checkChristmasEve = config.heiligabend; // checkbox Christmas Eve
        var checkFirstDayChristmas = config.weihnachten1; // checkbox First day of Chrsitmas
        var checkSecondDayChristmas = config.weihnachten2; // checkbox Second day of Christmas
        var checkNewYearsEve = config.silvester; // checkbox New Years Evev

        var currentDay; // day 1 - 31
        var currentMonth; // month 0 - 11 (+1)
        var currentYear; // full year
        var currentWeekday; // weekday
        var currentHour; // hours
        var currentMinute; // minutes

        var newYear = []; // day of New Year
        newYear[0] = "New Year";
        newYear[1] = "Neu Jahr";
        newYear[2] = currentYear + "-01-01"; // day of New Year
        var holyThreeKings = []; // day of Holy Three Kings
        holyThreeKings[0] = "Holy Three Kings";
        holyThreeKings[1] = "Heilige drei Könige";
        holyThreeKings[2] = currentYear + "-01-01";
        var weiberfastnacht = []; // day of Weiberfastnacht
        weiberfastnacht[0] = "Weiberfastnacht";
        weiberfastnacht[1] = "Weiberfastnacht";
        var valentinstag = []; // day of Valentinstag
        valentinstag[0] = "Valentinstag";
        valentinstag[1] = "Valentinstag";
        valentinstag[2] = currentYear + "-02-14";
        var rosenmontag = []; // day of Rosenmontag
        rosenmontag[0] = "Rosenmontag";
        rosenmontag[1] = "Rosenmontag";
        var fastnachtsdienstag = []; // day of Fastnachtsdienstag
        fastnachtsdienstag[0] = "Fastnachtdienstag";
        fastnachtsdienstag[1] = "Fastnachtdienstag";
        var aschermittwoch = []; // day of Aschermittwoch
        aschermittwoch[0] = "Aschermittwoch";
        aschermittwoch[1] = "Aschermittwoch";
        var gruendonnerstag = []; // day of Gründonnerstag
        gruendonnerstag[0] = "Gründonnerstag";
        gruendonnerstag[1] = "Gründonnerstag";
        var karfreitag = []; // day of Karfreitag
        karfreitag[0] = "Karfreitag";
        karfreitag[1] = "Karfreitag";
        var easterSunday = []; // day of Easter Sunday
        easterSunday[0] = "Easter Sunday";
        easterSunday[1] = "Ostersonntag";
        var easterMonday = []; // day of easter Sunday
        easterMonday[0] = "Easter Monday";
        easterMonday[1] = "Ostermontag";
        var christiHimmelfahrt = []; // day of Christi Himmelfahrt
        christiHimmelfahrt[0] = "Christi Himmelfahrt";
        christiHimmelfahrt[1] = "Christi Himmelfahrt";
        var pfingstsonntag = []; // day of Pfingstsonntag
        pfingstsonntag[0] = "Pfingstsonntag";
        pfingstsonntag[1] = "Pfingstsonntag";
        var pfingstmontag = []; // day of Pfingstmontag
        pfingstmontag[0] = "Pfingstmontag";
        pfingstmontag[1] = "Pfingstmontag";
        var fronleichnam = []; // day of Fronleichnam
        fronleichnam[0] = "Fronleichnam";
        fronleichnam[1] = "Fronleichnam";
        var mariaHimmelfahrt = []; // day of Maria Himmelfahrt
        mariaHimmelfahrt[0] = "Maria Himmelfahrt";
        mariaHimmelfahrt[1] = "Maria Himmelfahrt";
        mariaHimmelfahrt[2] = currentYear + "-08-15";
        var tagDerDeutschenEinheit = []; // day of Tag der Deutschen Einheit
        tagDerDeutschenEinheit[0] = "Tag der Deutschen Einheit";
        tagDerDeutschenEinheit[1] = "Tag der Deutschen Einheit";
        tagDerDeutschenEinheit[2] = currentYear + "-10-03";
        var halloween = []; // day of Halloween
        halloween[0] = "Halloween";
        halloween[1] = "Halloween";
        halloween[2] = currentYear + "-10-31";
        var allerheiligen = []; // day of Allerheiligen
        allerheiligen[0] = "Allerheiligen";
        allerheiligen[1] = "Allerheiligen";
        allerheiligen[2] = currentYear + "-11-01";
        var stMartin = []; // day of St. Martin
        stMartin[0] = "St. Martin";
        stMartin[1] = "St. Martin";
        stMartin[2] = currentYear + "-11-11";
        var bussUndBettag = []; // day of Buß und Bettag
        bussUndBettag[0] = "Buß und Bettag";
        bussUndBettag[1] = "Buß und Bettag";
        bussUndBettag[2] = currentYear + "-11-17";
        var santa = []; // day of Nikolaus
        santa[0] = "Santa";
        santa[1] = "Nikolaus";
        santa[2] = currentYear + "-12-06";
        var advent1 = []; // day of first Advent
        advent1[0] = "1. Advent";
        advent1[1] = "1. Advent";
        var advent2 = []; // day of second Advent
        advent2[0] = "2. Advent";
        advent2[1] = "2. Advent";
        var advent3 = []; // day of third Advent
        advent3[0] = "3. Advent";
        advent3[1] = "3. Advent";
        var advent4 = []; // day of fourth Advent
        advent4[0] = "4. Advent";
        advent4[1] = "4. Advent";
        var christmasEve = []; // day of Christmas Eve
        christmasEve[0] = "Christmas Eve";
        christmasEve[1] = "Heiligabend";
        christmasEve[2] = currentYear + "-12-24";
        var firstDayChristmas = []; // day of First day of Christmas
        firstDayChristmas[0] = "First day of Christmas";
        firstDayChristmas[1] = "1. Weihnachtsfeiertag";
        firstDayChristmas[2] = currentYear + "-12-25";
        var secondDayChristmas = []; // day of Second day of Christmas
        secondDayChristmas[0] = "Second day of Christmas";
        secondDayChristmas[1] = "2. Weihnachtsfeiertag";
        secondDayChristmas[2] = currentYear + "-12-26";
        var newYearsEve = []; // day of New Years Eve
        newYearsEve[0] = "New Years Eve";
        newYearsEve[1] = "Silvester";
        newYearsEve[2] = currentYear + "-12-31";

        var holiday = []; // array contains all holiday

        getCurrentDate(); // get current Date at startup
        checkbox(); // read checkbox states at startup

        var todayHoliday = false;

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
                node.send({payload: weiberfastnacht});
                node.send({payload: rosenmontag});
                node.send({payload: fastnachtsdienstag});
                node.send({payload: aschermittwoch});
                node.send({payload: gruendonnerstag});
                node.send({payload: karfreitag});
                node.send({payload: easterSunday});
                node.send({payload: easterMonday});
                node.send({payload: christiHimmelfahrt});
                node.send({payload: pfingstsonntag});
                node.send({payload: pfingstmontag});
                node.send({payload: fronleichnam});
            }
        });

        var dailyInterval = setInterval(function () {
            getCurrentDate(); // refresh current Date
            // delete holiday array at New Year
            if (currentDay == 1 && currentMonth == 1 && currentHour == 0 && currentMinute == 1) {
                holiday.length = 0; // delete holiday array
                checkbox(); // read checkbox states
                easter(); // generate easter dates
                advent(24); // generate advent dates
                isTodayHoliday(); // check isToday Holiday
            }
            // send todayIsHoliday every day at 00:01 o'clock
            else if (currentHour == 0 && currentMinute == 1) {
                isTodayHoliday(); // check isTodayHoliday
                node.send({payload: todayHoliday}); // output todayHoliday boolean
            }
        }, 60000); // set interval 1min

        function getCurrentDate() {
            var currentDate = new Date(); // generate object of current date
            currentDay = currentDate.getDate(); // day 1 - 31
            currentMonth = currentDate.getMonth() + 1; // month 0 - 11 (+1)
            currentYear = currentDate.getFullYear(); // full year
            currentWeekday = currentDate.getDay(); // weekday
            currentHour = currentDate.getHours(); // hours
            currentMinute = currentDate.getMinutes(); // minutes
        }
        
        function checkbox() {
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
            // check Weiberfastnacht is activated
            if (checkWeiberfastnacht) {
                holiday.push(weiberfastnacht); // add Weiberfastnacht to holiday array
            }
            else {
                var index = holiday.indexOf(weiberfastnacht); // get index of item
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
            // check Rosenmontag is activated
            if (checkRosenmontag) {
                holiday.push(rosenmontag); // add Rosenmontag to holiday array
            }
            else {
                var index = holiday.indexOf(rosenmontag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Fastnachtsdienstag is activated
            if (checkFastnachtsdienstag) {
                holiday.push(fastnachtsdienstag); // add Fastnachtsdienstag to holiday array
            }
            else {
                var index = holiday.indexOf(fastnachtsdienstag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Aschermittwoch is activated
            if (checkAschermittwoch) {
                holiday.push(aschermittwoch); // add Aschermittwoch to holiday array
            }
            else {
                var index = holiday.indexOf(aschermittwoch); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Gründonnerstag is activated
            if (checkGruendonnerstag) {
                holiday.push(gruendonnerstag); // add Gründonnerstag to holiday array
            }
            else {
                var index = holiday.indexOf(gruendonnerstag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Karfreitag is activated
            if (checkKarfreitag) {
                holiday.push(karfreitag); // add Karfreitag to holiday array
            }
            else {
                var index = holiday.indexOf(karfreitag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Easter Sunday is activated
            if (checkEasterSunday) {
                holiday.push(easterSunday); // add Easter Sunday to holiday array
            }
            else {
                var index = holiday.indexOf(easterSunday); // get index of item
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
            // check Christi Himmelfahrt is activated
            if (checkChristiHimmelfahrt) {
                holiday.push(christiHimmelfahrt); // add Christi Himmelfahrt to holiday array
            }
            else {
                var index = holiday.indexOf(christiHimmelfahrt); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Pfingstsonntag is activated
            if (checkPfingstsonntag) {
                holiday.push(pfingstsonntag); // add Pfingstsonntag to holiday array
            }
            else {
                var index = holiday.indexOf(pfingstsonntag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Pfingstmontag is activated
            if (checkPfingstmontag) {
                holiday.push(pfingstmontag); // add Pfingstmontag to holiday array
            }
            else {
                var index = holiday.indexOf(pfingstmontag); // get index of item
                if (index >= 0) {
                    holiday.splice(index); // remove item at index
                }
            }
            // check Fronleichnam is activated
            if (checkFronleichnam) {
                holiday.push(fronleichnam); // add Fronleichnam to holiday array
            }
            else {
                var index = holiday.indexOf(fronleichnam); // get index of item
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
            // check Santa is activated
            if (checkSanta) {
                holiday.push(santa); // add Santa to holiday array
            }
            else {
                var index = holiday.indexOf(santa); // get index of item
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
        }

        function isTodayHoliday() {
            // check today is holiday
            if (holiday.length == 0) {
                todayHoliday = false; // couldn't be holiday if holiday array is empty
            }
            else {
                for (let i = 0; i < holiday.length; i++) {
                    // step through holiday array and check today is holiday
                    if (new Date(holiday[i]).valueOf() == new Date(currentYear + "-" + currentMonth + "-" + currentDay).valueOf()) {
                        todayHoliday = true;
                        break;
                    }
                    else {
                        todayHoliday = false;
                    }
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
            var easterMonth = easterDate.getMonth() + 1;
            var easterDay = easterDate.getDate();

            var weiberfastnachtDate = new Date(easterDate - new Date(0, 0, 52)); // generate Weiberfastnacht Date object (easterSunday - 52)
            weiberfastnacht[2] = currentYear + "-" + (weiberfastnachtDate.getMonth() + 1) + "-" + weiberfastnachtDate.getDate();

            var rosenmontagDate = new Date(easterDate - new Date(0, 0, 48)); // generate Rosenmontag Date object (easterSunday - 48)
            rosenmontag[2] = currentYear + "-" + (rosenmontagDate.getMonth() + 1) + "-" + rosenmontagDate.getDate();

            var fastnachtsdienstagDate = new Date(easterDate - new Date(0, 0, 47)); // generate Rosenmontag Date object (easterSunday - 47)
            fastnachtsdienstag[2] = currentYear + "-" + (fastnachtsdienstagDate.getMonth() + 1) + "-" + fastnachtsdienstagDate.getDate();

            var aschermittwochDate = new Date(easterDate - new Date(0, 0, 46)); // generate Aschermittwoch Date object (easterSunday - 46)
            aschermittwoch[2] = currentYear + "-" + (aschermittwochDate.getMonth() + 1) + "-" + aschermittwochDate.getDate();

            var gruendonnerstagDate = new Date(easterDate - new Date(0, 0, 3)); // generate Gründonnerstag Date object (easterSunday - 3)
            gruendonnerstag[2] = currentYear + "-" + (gruendonnerstagDate.getMonth() + 1) + "-" + gruendonnerstagDate.getDate();

            var karfreitagDate = new Date(easterDate - new Date(0, 0, 2)); // generate Karfreitag Date object (easterSunday - 2)
            karfreitag[2] = currentYear + "-" + (karfreitagDate.getMonth() + 1) + "-" + karfreitagDate.getDate();
            
            easterSunday[2] = currentYear + "-" + easterMonth + "-" + easterDay;
            easterMonday[2] = currentYear + "-" + easterMonth + "-" + (easterDay + 1); // easterSunnday + 1

            var christiHimmelfahrtDate = new Date(easterSunday);
            christiHimmelfahrtDate.setDate(christiHimmelfahrtDate.getDate() + 39); // generate Christi Himmelfahrt Date object (easterSunday + 39)
            christiHimmelfahrt[2] = currentYear + "-" + (christiHimmelfahrtDate.getMonth() + 1) + "-" + christiHimmelfahrtDate.getDate();

            var pfingstsonntagDate = new Date(easterSunday);
            pfingstsonntagDate.setDate(pfingstsonntagDate.getDate() + 49); // generate Pfingstsonntag Date object (easterSunday + 39)
            pfingstsonntag[2] = currentYear + "-" + (pfingstsonntagDate.getMonth() + 1) + "-" + pfingstsonntagDate.getDate();

            var pfingstmontagDate = new Date(easterSunday);
            pfingstmontagDate.setDate(pfingstmontagDate.getDate() + 50); // generate Pfingstmontag Date object (easterSunday + 50)
            pfingstmontag[2] = currentYear + "-" + (pfingstmontagDate.getMonth() + 1) + "-" + pfingstmontagDate.getDate();

            var fronleichnamDate = new Date(easterSunday);
            fronleichnamDate.setDate(fronleichnamDate.getDate() + 60); // generate Fronleichnam Date object (easterSunday + 60)
            fronleichnam[2] = currentYear + "-" + (fronleichnamDate.getMonth() + 1) + "-" + fronleichnamDate.getDate();
        }

        function advent(day) {
            // calculates days of advent
            var checkDate = new Date("2021" + "-12-" + day); // generate object of specific day
            var checkMonth = checkDate.getMonth() + 1; // month (should be 12)
            var checkWeekday = checkDate.getDay(); // weekday

            // check generated weekday is 0 and generated month is 12
            if (checkWeekday === 0 && checkMonth == 12) {
                advent4[2] = currentYear + "-" + checkMonth + "-" + day;
                var advent3Day = day - 7; // calculate day of third advent
                advent3[2] = currentYear + "-" + checkMonth + "-" + advent3Day;
                var advent2Day = day - 14; // calculate day of second advent
                advent2[2] = currentYear + "-" + checkMonth + "-" + advent2Day;
                var advent1Day = day - 21; // calculate day of fist advent
                if (advent1Day < 1) {
                    // check day of first advent is in november
                    checkMonth = "11";
                    advent1Day = 30 + advent1Day;
                }
                advent1[2] = currentYear + "-" + checkMonth + "-" + advent1Day;
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
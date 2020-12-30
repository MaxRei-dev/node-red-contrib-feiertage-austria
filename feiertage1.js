module.exports = function(RED) {
    function feiertage(config) {
        RED.nodes.createNode(this,config);
        var context = this.context();
        var node = this;

        setCurrentDate();

        var currentYear;
        var currentMonth;
        var currentDay;
        var currentHour;
        var currentMinute;

        var neujahr = [];
        neujahr[0] = "New Year";
        neujahr[1] = "Neujahr";
        neujahr[2] = getNeujahr(currentYear);
        var advent4 = [];
        advent4[0] = "4. Advent";
        advent4[1] = "4. Advent";
        advent4[2] = getAdvent4(24, currentYear);

        this.on('input', function(msg) {
            if (msg.payload == "all") {
                node.send({payload: neujahr});
                node.send({payload: advent4});
            }
        });

        function getNeujahr(year) {
            return year + "-1-1";
        }

        function getHeiligeDreiKoenige(year) {
            return year + "-1-6";
        }

        function getWeiberfastnacht(year) {
            
        }

        function getValentinstag(year) {
            return year + "-2-14";
        }

        function getRosenmontag(year) {

        }

        function getFastnachtsdienstag(year) {
            
        }

        function getAschermittwoch(year) {
            
        }

        function getGruendonnerstag(year) {
            
        }

        function getKarfreitag(year) {
            
        }

        function getOstersonntag(year) {
            
        }

        function getOstermontag(year) {

        }

        function getChristiHimmelfahrt(year) {
            
        }

        function getPfingstsonntag(year) {
            
        }

        function getPfingstmontag(year) {
            
        }

        function getFronleichnam(year) {
            
        }

        function getMariaHimmelfahrt(year) {
            return year + "-8-15";
        }

        function getTagDerDeutschenEinheit(year) {
            return year + "-10-3";
        }

        function getHalloween(year) {
            return year + "-10-31";
        }

        function getAllerheiligen(year) {
            return year + "-11-1";
        }

        function getStMartin(year) {
            return year + "-11-11";
        }

        function getBussUndBettag(year) {
            return year + "-11-17";
        }

        function getNikolaus(year) {
            return year + "-12-6";
        }

        function getAdvent1(year) {
            
        }

        function getAdvent2(year) {
            
        }

        function getAdvent3(year) {
            
        }

        function getAdvent4(day, year) {
            // calculates days of advent
            var checkDate = new Date(year + "-12-" + day); // generate object of specific day
            var checkMonth = checkDate.getMonth() + 1; // month (should be 12)
            var checkWeekday = checkDate.getDay(); // weekday

            // check generated weekday is 0 and generated month is 12
            if (checkWeekday === 0 && checkMonth == 12) {
                return year + "-" + checkMonth + "-" + day;
            }
            else {
                getAdvent4(day - 1, year);
            }
        }

        function getHeiligabend(year) {
            return year + "-12-24";
        }

        function getWeihnachtsfeiertag1(year) {
            return year + "-12-25";
        }

        function getWeihnachtsfeiertag2(year) {
            return year + "-12-26";
        }

        function getSilvester(year) {
            return year + "-12-31";
        }

        function setCurrentDate() {
            var currentDate = new Date();
            currentYear = currentDate.getFullYear();
            currentMonth = currentDate.getMonth() + 1;
            currentDay = currentDate.getDate();
            currentHour = currentDate.getHours();
            currentMinute = currentDate.getMinutes();
        }
    }
    RED.nodes.registerType("feiertage", feiertage);
};
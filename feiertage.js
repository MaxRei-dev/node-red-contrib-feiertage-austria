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

        var advent1; // day of first Advent
        var advent2; // day of second Advent
        var advent3; // day of third Advent
        var advent4; // day of fourth Advent

        this.on('input', function(msg) {
            advent(24);
        });

        function advent(day) {
            // calculates days of advent
            var checkDate = new Date(currentYear + "-12-" + day); // generate object of specific day
            var checkMonth = checkDate.getMonth() + 1; // month (should be 12)
            var checkWeekday = checkDate.getDay(); // weekday

            // check generated weekday is 0 and generated month is 12
            if (checkWeekday === 0 && checkMonth == 12) {
                advent4 = day;
                advent3 = day - 7;
                advent2 = day - 14;
                advent1 = day - 21;
            }
            else {
                advent(day - 1);
            }
        }
    }
    RED.nodes.registerType("feiertage", feiertage);
};

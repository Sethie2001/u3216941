// IF Time after 0900
//  Check Sleep_Status
// IF Sleep_Status "asleep"
//  Turn on Alarm
// LOOP while "asleep"
// ELSE End

var current_time = 1; //we will start at 1 and count up from there
var sleep_status = (math.ceil)(math.random() * 10); //this would be replaced with a movement/noise senor
//for the purposes of this less than 4 is asleep
var alarm = "beep beep beep"
//would be replaced with an actual alarm
var get_up = 9; //

while (current_time >= get_up) {

    if (sleep_status < 4) {
        document.write(alarm);
        break;
    } else {

    }
}
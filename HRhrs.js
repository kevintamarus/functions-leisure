var HRhours = function() {
  var log = {
    june26 : ["8:30am", "9:00pm"],
    june27 : ["7:30am", "10:15pm"],
    june28 : ["7:45am", "11:00pm"],
    june29 : ["8:30am", "11:00pm"]
  }
  var totalHRtime = 0;
  for (var date in log) {
    totalHRtime += timeDifference(log[date][0], log[date][1]);
  }
  return totalHRtime;
}

var convertToArray = function(time) {
  var hour = '';
  var minute = '';
  var button = 1;
  for(var i=0; i<time.length; i++) {
    if (time[i] === ":" ) {
      button++;
    }
    else if (button === 1 && time[i]) {
      hour = hour + time[i];
    }
    else if (button === 2 && time[i]) {
      minute = minute + time[i];
    }
  }
  return [parseInt(hour), parseInt(minute)]
}

var timeDifference = function(time1, time2){
  time1Array = convertToArray(time1);
  time2Array = convertToArray(time2);
  var am = 12 - (time1Array[0] + (time1Array[1]/60))
  var pm = time2Array[0] + (time2Array[1]/60);
  return am+pm;
}

console.log( HRhours() );
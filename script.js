dateDisplayEl = $("#currentDay");
timeBlocksEl = $("#time-blocks")



var today = dayjs().format('dddd[,] MMMM D');
//console.log(today);
dateDisplayEl.text(today)


//HH = the hour in 2 digits
var now = dayjs().format('HH');
console.log(now)



var times = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
for (var i = 0; i < times.length; i++) {

    var timesEl = $('<li>'); 
    timesEl.text(times[i]);

    timesEl.addClass('row');

    timeBlocksEl.append(timesEl);
        
}



    
  
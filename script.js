dateDisplayEl = $("#currentDay");
timeBlocksEl = $("#time-blocks")



var today = dayjs().format('dddd[,] MMMM D');
//console.log(today);
dateDisplayEl.text(today)


//HH = the hour in 2 digits
var now = dayjs().format('HH');
console.log(now)
console.log(typeof now)
numberNow = now * 1;
console.log(numberNow);
console.log(typeof numberNow);



var times = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];


for (var i = 0; i < times.length; i++) {
//create list item
    var timesEl = $('<li>'); 

    //compare the time now to the time on the calendar to allocate class past/present/future
 if (numberNow == hours[i]) {
        timesEl.attr('class', 'present');
    }
    else if (hours[i] < numberNow){
        timesEl.attr('class', 'past');
    
    }
    else {
    times.El.attr('class', 'future');
    }

    timesEl.text(times[i]);

    timesEl.addClass('row');

    timeBlocksEl.append(timesEl);
        
}






    
  
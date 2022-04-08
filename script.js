//today's date in the following format: Jan 1st, 1999
var today = moment();
$("#time-display").text(today.format("MMM Do, YYYY"));

var timeDisplayEl = $("#time-display")

//handle displaying time
displayTime()
function displayTime() {
    var currentTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a')
    timeDisplayEl.text(currentTime)
}
setInterval(displayTime,1000)


var saveButtonEl = $('.btn')
var descriptionEl = $('.description')
var currTime = moment().hour()


//color code each time blocks based on current time
function timeBlock() {
$(".time-block").each(function() {
    var colorCodeTime = parseInt($(this).attr("id"))
console.log(colorCodeTime)

    if (colorCodeTime === currTime) {
        $(this).addClass("present")
        $(this).removeClass("future")
        $(this).removeClass("past")
    } else if (colorCodeTime < currTime) {
        $(this).addClass("past")
        $(this).removeClass("future")
        $(this).removeClass("future")
    } else {
        $(this).addClass("future")
        $(this).removeClass("past")
        $(this).removeClass("present")
    }
})
}


//when save button is clicked, the text is saved in local storage
$(".btn").on("click", function() {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})
    

// load saved input from local storage
$("#9am .description").val(localStorage.getItem("9am"))
$("#10am .description").val(localStorage.getItem("10am"))
$("#11am .description").val(localStorage.getItem("11am"))
$("#12pm .description").val(localStorage.getItem("12pm"))
$("#1pm .description").val(localStorage.getItem("1pm"))
$("#2pm .description").val(localStorage.getItem("2pm"))
$("#3pm .description").val(localStorage.getItem("3pm"))
$("#4pm .description").val(localStorage.getItem("4pm"))
$("#5pm .description").val(localStorage.getItem("5pm"))


//call function
timeBlock()





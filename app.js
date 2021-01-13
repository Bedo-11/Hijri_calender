$(function () {

  initHijrDatePicker();

  initHijrDatePickerDefault();



  // جميع الإجازات الرسمية علي مدار السنة 
let holidays;
holidays = [
  moment("1442-05-29", 'iYYYY-iMM-iDD'), // format of disabled hijri date
  moment("01-25-2021"), // format of disabled gregorian date
];


  // function that return gregorian date 
  $(".hijri-date-input").on('dp.change', function (arg) {

    if (!arg.date) {
      $("#selected-date").html('');
      return;
    };

    let date = arg.date;
    

    $("#selected-date").html(" التاريخ بالميلادي:" + date.format("YYYY/M/D") + "<br>" + " التاريخ بالهجري:" + date.format("iYYYY/iM/iD"));
  });





  var today = moment().startOf('d');


  $('.disable-date').hijriDatePicker({
    disabledDates: holidays, 
    daysOfWeekDisabled: [5,6],
    viewMode: "months",
    format: "DD-MM-YYYY",
    hijriFormat: "iYYYY-iMM-iDD",
    hijri: true,
    debug: true,
    showClear: true,
    showTodayButton: true,
    showClose: true,
    showSwitcher: true,
    minDate: today
  });


});



function initHijrDatePicker() {

  $(".hijri-date-input").hijriDatePicker({
    locale: "ar-sa",
    format: "DD-MM-YYYY",
    hijriFormat: "iYYYY-iMM-iDD",
    dayViewHeaderFormat: "MMMM YYYY",
    hijriDayViewHeaderFormat: "iMMMM iYYYY",
    showSwitcher: true,
    allowInputToggle: true,
    showTodayButton: false,
    isRTL: true,
    viewMode: 'years',
    keepOpen: false,
    hijri: true,
    debug: true,
    showClear: true,
    showTodayButton: true,
    showClose: true,

  });
}

function initHijrDatePickerDefault() {

  $(".hijri-date-input").hijriDatePicker();
}










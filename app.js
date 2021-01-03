// $(function() {

//   // $("#hijri-date-input").hijriDatePicker();

//   // document.write(writeIslamicDate(-1));

//     var holidays = [
//       '1.1.2020',
//       '2.1.2020',
//       '20.2.2020',
//       '19.1.2020',
//       '1.8.2020',
//       '15.8.2020',
//       '1.11.2020',
//       '8.12.2020',
//       '25.12.2020',
//       '26.12.2020'
//     ];


//     function noSundaysOrHolidays(date) {
//       var day = date.getDay();
//       if (day != 5 && day != 6) {
//         var d = date.getDate();
//         var m = date.getMonth();
//         var y = date.getFullYear();
//         for (i = 0; i < holidays.length; i++) {
//           if($.inArray((d) + '.' + (m+1) + '.' + y, holidays) != -1) {
//             return [false];
//           }
//         }
//         return [true];
//       } else {
//         return [(day != 5 && day !=6), ''];
//       }
//     }
    

  
//     $('#date').datepicker({
//       onClose: function(dateText, inst) { 
//           $(this).attr("disabled", false);
//           console.log('mewo!');
//           console.log(this.value);
//           convertToHijri(this.value);
//       },
//       beforeShow: function(input, inst) {
//         $(this).attr("disabled", true);
//       },
//       beforeShowDay: noSundaysOrHolidays,
//       minDate: 0,
//       dateFormat: 'dd.mm.yy',
//     });

    


//   });

//  let btn =  document.querySelector('#gregorianInput');

//  btn.addEventListener('click', convertToHijri);

//   function convertToHijri(d) {

//     console.log('Hoo');
//     var gregorianDate = d.value
//     var hijriDate = document.getElementById("hijriDate");

//     var date = HijriJS.toHijri(gregorianDate, "/");
//     hijriDate.innerHTML = date.toString();
//   }
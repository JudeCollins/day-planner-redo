$(document).ready(function() {

    // Buttons to listen to events
    $(".saveBtn").on("click", function() {
      
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      console.log('value:', value);
      console.log('time:', time);
  
      
      localStorage.setItem(time, value);
      });


      //  stored data from localStorage and put into correct row
    var hour9 = localStorage.getItem("hour-9");
    $("#hour-9 .description").val(hour9);
  
    var hour10 = localStorage.getItem("hour-10");
    $("#hour-10 .description").val(hour10);
  
    var hour11 = localStorage.getItem("hour-11");
    $("#hour-11 .description").val(hour11);
    
    var hour12 = localStorage.getItem("hour-12");
    $("#hour-12 .description").val(hour12);
    
    var hour13 = localStorage.getItem("hour-13");
    $("#hour-13 .description").val(hour13);
    
    var hour14 = localStorage.getItem("hour-14");
    $("#hour-14 .description").val(hour14);
    
    var hour15 = localStorage.getItem("hour-15");
    $("#hour-15 .description").val(hour15);
    
    var hour16 = localStorage.getItem("hour-16");
    $("#hour-16 .description").val(hour16);
    
    var hour17 = localStorage.getItem("hour-17");
    $("#hour-17 .description").val(hour17);
  
    
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
  });
  
    function hourUpdater() {
      
      var currentHour = moment().hours();
  
      //  jQuery loop 
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        
        if (blockHour < currentHour) {
          //  rows will appear grey as determined by class (past)
          $(this).addClass("past");
          // row will appear green as determined by class (present) removing (past)
        } else if (blockHour === currentHour) {
          $(this).removeClass("past").addClass("present");
          //  row will appear green as determined by class (future)--removing (past) and (present)
        } else {
          $(this).removeClass("past present").addClass("future");
        }
      });
    }

   
    setInterval(function(){
        hourUpdater();
      }, 15000);
      
  
    // Calling the hourUpdater function upon   (ready)
    hourUpdater();
  
    
    55
window.onload = function(){

   // console('Hello');
    
    printTime();    
    };       
    function printTime() {      
      var d = new Date();       
     var hours = d.getHours();     
       var mins = d.getMinutes();     
       var secs = d.getSeconds();     
       var day = d.getDay();      
      var date = d.getDate();      
      var month = d.getMonth();      
      var year = d.getFullYear();     
            switch (day){            
              case 0:
                    day = "Sunday";        
                break;               
     case 1:
                    day = "Monday";        
                break;             
       case 2:
                    day = "Tuesday";        
                break;              
      case 3:
                    day = "Wednesday";       
                 break;               
     case 4:
                    day = "Thursday";        
                break;             
       case 5:
                    day = "Friday";          
              break;            
        case 6:
                    day = "Saturday";    
                    break;           
        }         
       if(hours<=12){             
       hours = "0" + hours; 
       m="AM";        
       }   
       else if(hours>12)  {
           hours=hours-12;
           m="PM"
       }

           if(mins<10){               
                mins = "0" + mins;     
           }       
         if(secs<10){         
               secs = "0" + secs;       
         }           
       month = month + 1;
     document.getElementById("test").innerHTML = hours+":"+mins+":"+secs+" "+m;    
    document.getElementById("ttt").innerHTML = day + ", " + date + "." + month + "." + year;
    }    
    setInterval(printTime,1000);
    
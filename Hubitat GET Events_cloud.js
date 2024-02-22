//var pageCounter = 1;
var eventsContainer = document.getElementById("events-info");
var btn = document.getElementById("btn");
var in_out_select_btn = document.getElementById("in-out-select");
var inside_temperature_device = 33;
var outside_temperature_device = 99;
var device_selected = 99;

//window.location.reload();

btn.addEventListener("click", function() {

    
  //  btn.innerText =" changed now ";
    var ourRequest = new XMLHttpRequest();
    
// ourRequest.open('GET', 'http://192.168.12.107/apps/api/97/devices/99/events?access_token=420ac040-5c42-4246-bed9-5574e4ead0ff');
ourRequest.open('GET', "https://cloud.hubitat.com/api/5fb2ffaa-47ac-4554-b948-19691990134a/apps/97/devices/"+device_selected+"/events?access_token=420ac040-5c42-4246-bed9-5574e4ead0ff");
//  https://cors-anywhere.herokuapp.com/https://cloud.hubitat.com/api/5fb2ffaa-47ac-4554-b948-19691990134a/apps/97/devices/99/events?access_token=420ac040-5c42-4246-bed9-5574e4ead0ff

console.log()
ourRequest.onload = function() {

 console.log(ourRequest.responseText);
  var ourData = JSON.parse(ourRequest.responseText);
  
  renderHTML(ourData);
  console.log(ourData[1] + "   testing here    ");
  console.log(ourData);
};  /// end of function()   ***********************************************

ourRequest.send();

});           ///   end of add event listner  ***************************




in_out_select_btn.addEventListener("click", function() {   //   ====================
 
    if(in_out_select_btn.innerText == "Get Outdoor Temp")  {
        in_out_select_btn.innerText = "Get Indoor Temp";
        device_selected = 33;
    }
    else { in_out_select_btn.innerText = "Get Outdoor Temp";
            device_selected = 99
          }


})   //  ================================================================


 

function renderHTML(data) {
    var htmlString = "";
    var updateTime;
    
console.log("Length of data   " + data.length);

    for(i=0; i< data.length; i++) {
        htmlString ="";
         updateTime = new Date(data[i].date);
         myDate = updateTime.toLocaleDateString('en-US');
         myTime = updateTime.toLocaleTimeString('en-US');
         console.log(myDate + " " +myTime);
if(data[i].name == "temperature")  {
 //   htmlString += "<p>  "  + myDate + " " +myTime + "  @  " + data[i].value + " @" + data[i].label + " @  " + data[i].name + " @ " + data[i].unit + "  </p>";     
 htmlString += "\r\n   "  + myDate + " " +myTime + "  @  " + data[i].value + " @" + data[i].label + " @  " + data[i].name + " @ " + data[i].unit +  "</br>";     
 
    eventsContainer.insertAdjacentHTML('beforeend', htmlString );
   // eventsContainer.insertAdjacentHTML('beforeend', "--------------------------------------------------------------" );
} // end of if statement

    }  // end of for loop
}  //  end of function renderHtML(data)     

///  \u{1F641}  sad face emoji            \u{0009}  should be a tab


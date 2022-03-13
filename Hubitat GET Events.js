//var pageCounter = 1;
var eventsContainer = document.getElementById("events-info");
var btn = document.getElementById("btn");

//window.location.reload();

btn.addEventListener("click", function() {

    var ourRequest = new XMLHttpRequest();
    
ourRequest.open('GET', 'http://192.168.12.142/apps/api/97/devices/99/events?access_token=420ac040-5c42-4246-bed9-5574e4ead0ff');


ourRequest.onload = function() {

 console.log(ourRequest.responseText);
  var ourData = JSON.parse(ourRequest.responseText);
  
  renderHTML(ourData);
  console.log(ourData[1] + "   testing here    ");
  console.log(ourData);
};  /// end of function()   ***********************************************

ourRequest.send();

});           ///   end of add event listner

 

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


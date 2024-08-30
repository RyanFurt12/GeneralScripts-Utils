var wbook = SpreadsheetApp.openByUrl('SHEET LINK');
var sheet = wbook.getSheetByName('SHEET NAME')

function doGet(){
  return ContentService.createTextOutput("Aoba")
          .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e){
  var event = JSON.parse(e.postData.contents);
  var eventRow = getEventRow(event.event);

  if(eventRow == 0) return addEvent(event);
  else return countEvent(eventRow);
}

function addEvent(event){
  sheet.appendRow([event.event, JSON.stringify(event.data, null, 2), 1]);

  return ContentService.createTextOutput("Added Success")
        .setMimeType(ContentService.MimeType.TEXT);
}

function countEvent(eventRow){
  var countCell = sheet.getRange(eventRow, 3);
  var currentCount = countCell.getValue();
  var newCount = (currentCount || 0) + 1; 
  countCell.setValue(newCount);

  return ContentService.createTextOutput("Count Success")
        .setMimeType(ContentService.MimeType.TEXT);
}

function getEventRow(eventName){
  var dataEventsRange = sheet.getRange('A:A'); 
  var dataEvents = dataEventsRange.getValues(); 
  var eventRow = dataEvents.findIndex( row => row[0] === eventName ) + 1;
  return eventRow;
}
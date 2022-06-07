const errorMsg = document.getElementById("errMsg");
const sContentPar01El = document.getElementById("content01-par");
const menuButtonEl = document.getElementById("navigation-btn");

const sNavigationMsgEl = document.getElementById("navigation-msg");
const sMini01MsgEl = document.getElementById("mini01-msg");
const sMini02MsgEl = document.getElementById("mini02-msg");
const sMini03MsgEl = document.getElementById("mini03-msg");
const sContent01MsgEl = document.getElementById("content01-msg");
const sContent02MsgEl = document.getElementById("content02-msg");
const sContent03MsgEl = document.getElementById("content03-msg");
const sContent04MsgEl = document.getElementById("content04-msg");
const sMessagesGnrEl = document.getElementById("messages-gnr");

const conversionTable = [
  ["length", " meters ", " feet ", 3.2809, 0.3048],
  ["volume", " litres ", " gallons ", 0.22, 4.5459],
  ["mass", " kilograms ", " pounds ", 2.2046, 0.45359237],
];

const iRoundFactor = 100; // Faktor for avrunding til 2 desimaler
const iValueConversionBase = 2; // hardkodet tall til konvertering
const iDebugFlag = parseInt(document.getElementById("debug-flg").textContent);

const dividend = 40
const divisor = 6
const kvotient = Math.round((dividend / divisor) * iRoundFactor) / iRoundFactor;
const intKvotient = Math.floor(dividend/divisor)
const remainder = dividend % divisor 


// some more hardcoded values. I'll provide other means of doing this later
menuButtonEl.textContent = "Menu toggle";
errorMsg.textContent =
  "When shit happens, the error message will display itself here.";

// get som element id's
sNavigationMsgEl.textContent = "Navigation element id: " + sNavigationMsgEl.id;
sMini01MsgEl.textContent = "Mini box element id: " + sMini01MsgEl.id;
sMini02MsgEl.textContent = "Mini box element id: " + sMini02MsgEl.id;
sMini03MsgEl.textContent = "Mini box element id: " + sMini03MsgEl.id;
sContent01MsgEl.textContent = "Content element01 id: " + sContent01MsgEl.id;
sContent02MsgEl.textContent = "Content element02 id: " + sContent02MsgEl.id;
sContent03MsgEl.textContent = "Content element03 id: " + sContent03MsgEl.id;
sContent04MsgEl.textContent = "Content element04 id: " + sContent04MsgEl.id;
sMessagesGnrEl.textContent = "General messages element id: " + sMessagesGnrEl.id;

// ...and some controlled rubbish(ish)
sContentPar01El.innerHTML = `<br><br>
Dividend: ${dividend} <br>
Divisor: ${divisor}<br>
<br>
Kvotient: ${kvotient}<br>
Heltallskvotient: ${intKvotient}<br>
Rest: ${remainder}<br>`

// divisjonsoppgave
  sMini03MsgEl.innerHTML = `<br><br>
Dividend: ${dividend} <br>
Divisor: ${divisor}<br>
<br>
Kvotient: ${kvotient}<br>
Heltallskvotient: ${intKvotient}<br>
Rest: ${remainder}<br>`

 

function toggleVisibility(sDOMelementId, bForceClose, attributeValue) {
    let visibilityElement = document.getElementById(sDOMelementId);
    let displaySetting = visibilityElement.style.display; // get current display setting for given element

    displaySetting = (bForceClose) ? attributeValue : displaySetting;
    
    // now handle the navigation element depending on current state
    if (displaySetting != attributeValue) {
      // Navigation frame is hidden. show it
      visibilityElement.style.display = attributeValue;
    } else {
        // Navigation frame is visible. hide it
      visibilityElement.style.display = "none";
    }
}

// The two following lines are kept as a reminder of further investigation
// input.onblur = inputBlur
// input.onfocus = inputFocus

iterateArray();

printLog("iValueConversionBase: ", iValueConversionBase);
printLog("conversionTable[0][1]: ", conversionTable[0][1]);
printLog("conversionTable[0][3]: ", conversionTable[0][3]);
printLog("conversionTable[0][2]: ", conversionTable[0][2]);
printLog("conversionTable[0][4]: ", conversionTable[0][4]);


printConversionData(
  iValueConversionBase,
  conversionTable[0][1],
  conversionTable[0][3],
  conversionTable[0][2],
  conversionTable[0][4],
  document.getElementById("length-id")
);

printConversionData(
  iValueConversionBase,
  conversionTable[1][1],
  conversionTable[1][3],
  conversionTable[1][2],
  conversionTable[1][4],
  document.getElementById("volume-id")
);

printConversionData(
  iValueConversionBase,
  conversionTable[2][1],
  conversionTable[2][3],
  conversionTable[2][2],
  conversionTable[2][4],
  document.getElementById("mass-id")
);

function iterateArray() {
  if (iDebugFlag) {
    console.table(conversionTable);
    console.log("iDebugFlag: " + iDebugFlag);

    // loop the outer array
    for (let i = 0; i < conversionTable.length; i++) {
      // get the size of the inner array
      var innerArrayLength = conversionTable[i].length;

      // loop the inner array
      for (let j = 0; j < innerArrayLength; j++) {
        console.log("[" + i + "," + j + "] = " + conversionTable[i][j]);
      }
    }
  }
}

function printConversionData(
  baseValue,
  conversionText01,
  conversionFactor01,
  conversionText02,
  conversionFactor02,
  elementHTML
) {
  elementHTML.textContent =
    baseValue +
    conversionText01 +
    "= " +
    convertValue(baseValue, conversionFactor01) +
    conversionText02 +
    "| " +
    baseValue +
    conversionText02 +
    convertValue(baseValue, conversionFactor02) +
    conversionText01;
}

function convertValue(baseValue, conversionFactor) {
  return Math.round(baseValue * conversionFactor * iRoundFactor) / iRoundFactor;
}

function printLog(leadText, valueOfInterest) {
  if (iDebugFlag) {
    console.log(leadText + ":  ", valueOfInterest);
  }
}

/*
  let newPage  = (currentWindow == 'dokkerOpg3.html') ? 'dokkerOpg3audio.html' : 'dokkerOpg3.html'
  window.location.href=newPage





*/


errorMsg.innerHTML = `ERROR for Christ's sake!!!!  <span class="subText">
  pretty stupid reference for an atheist, but nevertheless..</span><br><br> Not if (but when) shit happens, the error message will display itself here. This line is extended to see what happens when line breaks have to be used. This dodgy text is found in the bible of the Nonsensical, a guide to the outer space of mental activities.`

  referenceElm.innerHTML = `Performed by: <a href="https://freemusicarchive.org/music/John_Harrison_with_the_Wichita_State_University_Chamber_Players/">John Harrison with the Wichita State University Chamber Players</a><br>
  Provided by: <a href="https://freemusicarchive.org/home">Free Music Archive</a><br>
  Licensed: <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA</a>`






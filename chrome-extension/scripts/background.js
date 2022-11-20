// // function createWebSocketConnection() {
// //     if('WebSocket' in window){
// //         chrome.storage.local.get("instance", function(data) {
// //             connect('wss://' + data.instance + '/ws/demoPushNotifications');
// //         });
// //     }
// // }

// // //Make a websocket connection with the server.
// // function connect(host) {
// //     if (websocket === undefined) {
// //         websocket = new WebSocket(host);
// //     }

// //     websocket.onopen = function() {
// //         chrome.storage.local.get(["username"], function(data) {
// //             websocket.send(JSON.stringify({"currentPlayState": "playing"}));
// //         });
// //     };
    
    
// //     websocket.onmessage = function (event) {
// //         var received_msg = JSON.parse(event.data);
// //         var demoNotificationOptions = {
// //             type: "basic",
// //             title: received_msg.subject,
// //             message: received_msg.message,
// //             iconUrl: "images/demo-icon.png"
// //         }
// //         chrome.notifications.create("", demoNotificationOptions);
// //         updateToolbarBadge();
// //     };

// //     //If the websocket is closed but the session is still active, create new connection again
// //     websocket.onclose = function() {
// //         websocket = undefined;
// //         chrome.storage.local.get(['demo_session'], function(data) {
// //             if (data.demo_session) {
// //                 createWebSocketConnection();
// //             }
// //         });
// //     };
// // }

// // //Close the websocket connection
// // function closeWebSocketConnection(username) {
// //     if (websocket != null || websocket != undefined) {
// //         websocket.close();
// //         websocket = undefined;
// //     }
// // }

// // createWebSocketConnection()
// // connect()

// // Play Pause Button


// var playPause = document.querySelector('[class*="atvwebplayersdk-playpause-button"]')


// // Time Stamp Slider
// // var slider = document.querySelector('[class*="atvwebplayersdk-trickplay-container"]');


// var checkbox = document.querySelector("input[name=checkbox]");

// checkbox.addEventListener("change", function () {
//   if (this.checked) {
//     SendPlay();
//   } else {
//     SendStop()
//   }
// });

// function SendPlay() {
//   // fetch("https://reqbin.com/echo/post/json", {
//   //   method: "POST",
//   //   headers: {
//   //     Accept: "application/json",
//   //     "Content-Type": "application/json",
//   //   },
//   //   body: JSON.stringify({ id: 78912 }),
//   // });
//   console.log("Hello")
// }

// function SendStop() {
//   // fetch("https://reqbin.com/echo/post/json", {
//   //   method: "POST",
//   //   headers: {
//   //     Accept: "application/json",
//   //     "Content-Type": "application/json",
//   //   },
//   //   body: JSON.stringify({ id: 78912 }),
//   // });
//   console.log("Bye")
// }



function reddenPage() {
  document.body.style.backgroundColor = 'red';
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting
  if(!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage
    });
  }
});


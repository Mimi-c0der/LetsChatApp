
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCCIh305WoK2XOL2Gq_f8-JgW3rcZBzzOs",
    authDomain: "letschatapp-b85ba.firebaseapp.com",
    databaseURL: "https://letschatapp-b85ba-default-rtdb.firebaseio.com",
    projectId: "letschatapp-b85ba",
    storageBucket: "letschatapp-b85ba.appspot.com",
    messagingSenderId: "738135629452",
    appId: "1:738135629452:web:c4bb49a13a388c938d25a9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";

function addRoom(){
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name" , room_name);
    firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
window.location = "kwitter_page.html"
}

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";    
    document.getElementById("output").innerHTML += row;
});
});
}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html";

}

function logout(){
    window.location = "index.html"; 
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
}
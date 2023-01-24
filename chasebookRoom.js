var firebaseConfig = {
      apiKey: "AIzaSyDMeLokSgzCoTdKSspYprFBKBtOFMtratY",
      authDomain: "kwitter-65f3f.firebaseapp.com",
      databaseURL: "https://kwitter-65f3f-default-rtdb.firebaseio.com",
      projectId: "kwitter-65f3f",
      storageBucket: "kwitter-65f3f.appspot.com",
      messagingSenderId: "866775763741",
      appId: "1:866775763741:web:d440cc6fe0aa612591eff4"
    };
    
    firebase.initializeApp(firebaseConfig); 
username = localStorage.getItem("username");
document.getElementById("username").innerHTML="Welcome "+ username

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Names : " + Room_names);
      row = "<div class='roomName' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>" ;
document.getElementById("output").innerHTML += row;
      });});}
getData();

function addRoom(){
  roomName = document.getElementById("roomname").value;
  firebase.database().ref("/").child(roomName).update({
    purpose:"adding room name"
  });
localStorage.setItem("roomName", roomName);
window.location="chasebookPage.html";
}

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("roomName" , name);
  window.location="chasebookPage.html";
}

function logout(){
  localStorage.removeItem("username")
  localStorage.removeItem("roomName")
  window.location="index.html"
}


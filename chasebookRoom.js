const firebaseConfig = {
      apiKey: "AIzaSyDMeLokSgzCoTdKSspYprFBKBtOFMtratY",
      authDomain: "kwitter-65f3f.firebaseapp.com",
      databaseURL: "https://kwitter-65f3f-default-rtdb.firebaseio.com",
      projectId: "kwitter-65f3f",
      storageBucket: "kwitter-65f3f.appspot.com",
      messagingSenderId: "866775763741",
      appId: "1:866775763741:web:d440cc6fe0aa612591eff4"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function addRoom(){
      window.alert("1");
      roomname=document.getElementById("roomname").value;
      localStorage.setItem("roomname",roomname);
      window.alert(roomname);
      window.location="chasebookRoom.html";
}

function logOut(){
      logout=document.getElementById("logout").value;
      localStorage.setItem("logout",logout);
      window.location="index.html";
}
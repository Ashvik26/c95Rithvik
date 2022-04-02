var firebaseConfig = {
      apiKey: "AIzaSyAZuK9clEOBPw67aTTDoRxT0hy4IvLnK0Q",
      authDomain: "kwitterrithvik.firebaseapp.com",
      databaseURL: "https://kwitterrithvik-default-rtdb.firebaseio.com",
      projectId: "kwitterrithvik",
      storageBucket: "kwitterrithvik.appspot.com",
      messagingSenderId: "669129099880",
      appId: "1:669129099880:web:c8e67451d9226b058389dd"
    };
firebase.initializeapp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

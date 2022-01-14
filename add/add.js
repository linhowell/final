const firebaseConfig = {
    apiKey: "AIzaSyCrzmpl5N7MLGlaK8XJdf23Pq5nELbVVCA",
    authDomain: "final-32184.firebaseapp.com",
    projectId: "final-32184",
    storageBucket: "final-32184.appspot.com",
    messagingSenderId: "1081645645391",
    appId: "1:1081645645391:web:a070c0eee9bc592cfef43a",
    measurementId: "G-LQXMHDBCTK"
  };
function uplode(){
  var app1 = firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  var money = document.getElementById("money").value;
  var str = document.getElementById("itemname").value;
  var app = db.collection('菜單').doc(str);
  app.set({
      price:money,
      itemName:str,
      count:0
  });

}







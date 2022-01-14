const firebaseConfig = {
    apiKey: "AIzaSyCrzmpl5N7MLGlaK8XJdf23Pq5nELbVVCA",
    authDomain: "final-32184.firebaseapp.com",
    projectId: "final-32184",
    storageBucket: "final-32184.appspot.com",
    messagingSenderId: "1081645645391",
    appId: "1:1081645645391:web:a070c0eee9bc592cfef43a",
    measurementId: "G-LQXMHDBCTK"
  };
function cheak(){
    var menu=[];
    var i=0;
    var times = 0;
    const app1 = firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();
    var ref = db.collection('使用者')
    var inputname = document.getElementById("username").value;
    var inputpassword = document.getElementById("password").value;
    ref.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            menu.push(doc.data())
            times++;
        });
    });
    var cheakpoint = 3;
    setTimeout(function(){
        console.log(times)
        for(i = 0;i < times;i++){
            if(inputname == menu[i].user && inputpassword == menu[i].password){
                cheakpoint = menu[i].cheak;
                break;
            }
        }
    },3000);
    setTimeout(function(){
        if(cheakpoint == 0){
            location.href = "../add/add.html";
        }
        else if(cheakpoint == 1){
            location.href = "../delete/delete.html";
        }
        else if(cheakpoint == 2){
            location.href = "../main/main.html";
        }
        else if(cheakpoint == 3){
            history.go(0)
        }
    },4000);

}

function newuser(){
    var inputname = document.getElementById("username2").value;
    var inputpassword = document.getElementById("password2").value;
    var menu=[];
    var i=0;
    var times = 0;
    const app1 = firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();
    var ref = db.collection('使用者')
    ref.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            menu.push(doc.data())
            times++;
        });
    });
    setTimeout(function(){
        for(i = 0;i < times;i++){
            if(inputname == menu[i].user){
                history.go(0);
            }
        }
    },2000);
    setTimeout(function(){
        ref.doc(inputname).set({
            cheak:2,
            user:inputname,
            password:inputpassword
        });
    },2500);
    setTimeout(function(){
        history.go(0);
    },5000);
}




function show_hide() {
    var login = document.getElementById("container1");
    var signup = document.getElementById("container2");
    var copyright = document.getElementById("copyright");
  
    if (login.style.display === "none") {
        login.style.display = "block";  //lonin出現
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        signup.style.display = "none";  //signup消失
        
    } else {
        login.style.display = "none";   //login消失
        signup.style.display = "block"; //signup出現
        signup.style.visibility="visible";
        
     
        
        document.getElementById("username2").value="";
        document.getElementById("password2").value="";
        
    }
    
}
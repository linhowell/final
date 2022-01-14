const firebaseConfig = {
    apiKey: "AIzaSyCrzmpl5N7MLGlaK8XJdf23Pq5nELbVVCA",
    authDomain: "final-32184.firebaseapp.com",
    projectId: "final-32184",
    storageBucket: "final-32184.appspot.com",
    messagingSenderId: "1081645645391",
    appId: "1:1081645645391:web:a070c0eee9bc592cfef43a",
    measurementId: "G-LQXMHDBCTK"
  };
var menu=[];
var i=0;
const app1 = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var ref = db.collection('訂單');

ref.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        menu.push(doc.data());
        i++;
    });
});




var app = new Vue({
    el:'#app',
    data:{
        itemList:menu
    },
    methods:{
        handledelete: function(index){
            delet(index);
            this.itemList.splice(index,1);
        }
    },
    computed:{

    }
})
function delet(index){
    console.log(menu[index].itemName);
    ref = db.collection('訂單').doc(menu[index].itemName);
    ref.delete();
}
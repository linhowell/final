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
var ref = db.collection('菜單')

ref.get().then(querySnapshot => {
  querySnapshot.forEach(doc => {
      menu.push(doc.data())
      i++;
  });
});

console.log(menu)

var app = new Vue({
  el:'#app',
  data:{
      itemList:menu
  },
  methods:{
      handlePlus: function(item){
          item.count++;
      },
      handleSub: function(item){
          if(item.count>0){
          item.count--;                
          }
      },
      handledelete: function(index){
          console.log(this);
          this.itemList.splice(index,1);
      }
  },
  computed:{

  }
})

function up(){
  db = firebase.firestore();

  for(i = 0;i < menu.length;i++){
    console.log(menu[i].itemName)
    app = db.collection('訂單');
    if(menu[i].count != 0){
      app.doc(menu[i].itemName).set({
        price:menu[i].price,
        itemName:menu[i].itemName,
        count:menu[i].count
      });
    }
  }
  setTimeout(function(){
    history.go(0)
  },2000);
  
}
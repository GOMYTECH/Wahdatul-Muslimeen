  // Your web app's Firebase configuration


  const firebaseConfig = {


    apiKey: "AIzaSyBuZKsIywHs8BfYMCXjVmHzGTx7s29ZkBs",


    authDomain: "timit-63209.firebaseapp.com",


    databaseURL: "https://timit-63209-default-rtdb.firebaseio.com",


    projectId: "timit-63209",


    storageBucket: "timit-63209.firebasestorage.app",


    messagingSenderId: "387541308403",


    appId: "1:387541308403:web:2e2cbf2cdb56fb020df886"


  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// reference  your database
const timitDB=firebase.database().ref('timit');
document.getElementById('').addEventListener('submit',submitform);

function submitform(e)(
e.preventDefault();

  var firstName = getelementval('firstName');
  var familyName = getelementval('familyName);
var gender = getelementval('gender');
var age = getelementval('age');
  var level = getelementval('level');
var phonenumber = getelementval('phone');
var departmentofstudy= getelementval('department');
var schoolname = getelementval('schoolname');
var skills = getelementval('skills');

const savemessages=()=>(
  var timit = timitDB.push();
newtimit.set((
  ));
const getElementval = (id) => (
  return document.getElementById(id).value;
  );

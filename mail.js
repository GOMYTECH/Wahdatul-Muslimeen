// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuZKsIywHs8BfYMCXjVmHzGTx7s29ZkBs",
  authDomain: "timit-63209.firebaseapp.com",
  databaseURL: "https://timit-63209-default-rtdb.firebaseio.com",
  projectId: "timit-63209",
  storageBucket: "timit-63209.appspot.com",
  messagingSenderId: "387541308403",
  appId: "1:387541308403:web:2e2cbf2cdb56fb020df886"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
const timitDB = firebase.database().ref("timit");

// Add event listener to the form
document.getElementById("registrationForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get form values
  var firstName = getElementVal("firstName");
  var familyName = getElementVal("familyName");
  var gender = getElementVal("gender");
  var age = getElementVal("age");
  var level = getElementVal("level");
  var phoneNumber = getElementVal("phone");
  var departmentOfStudy = getElementVal("department");
  var schoolName = getElementVal("schoolName");
  var skills = getElementVal("skills");

  // Save the form data to Firebase
  saveMessages(firstName, familyName, gender, age, level, phoneNumber, departmentOfStudy, schoolName, skills);

  // Clear the form
  document.getElementById("registrationForm").reset();
}

const saveMessages = (firstName, familyName, gender, age, level, phoneNumber, departmentOfStudy, schoolName, skills) => {
  var newTimitEntry = timitDB.push();
  newTimitEntry.set({
    firstName: firstName,
    familyName: familyName,
    gender: gender,
    age: age,
    level: level,
    phoneNumber: phoneNumber,
    departmentOfStudy: departmentOfStudy,
    schoolName: schoolName,
    skills: skills,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

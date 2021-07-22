// treats as a list
const messagesRef = firebase.database().ref();

//curly braces for objects, firebase makes a random key for us 
messagesRef.push({

    message:"This was made with Javascript",
    passcode: "Javascript"

});
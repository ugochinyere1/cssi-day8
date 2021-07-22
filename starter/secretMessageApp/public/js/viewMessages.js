/*
const getMessages = () => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot)=> {
        const data = snapshot.val();
        console.log(data);
        for(let key in data){
            const message = data[key];
            console.log(message);
            if (myPass == message.passcode){
                renderMessage(message);
            }
          
        }
    })
}

const findMessages = (myPass) => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot)=> {
        const data = snapshot.val();
        console.log(data);
        for(let key in data){
            const message = data[key];
            console.log(message);
            //if (myPass == message.passcode){
            //    renderMessage(message);
           // }
          
        }
    })
}


const passcode = document.querySelector("#passcode").value;
findMessages();
*/

//const display = (messageObject) => {
  //  console.log(messageObject)
//}
document.querySelector("#viewMsg").addEventListener("click", (e) => {
    const userPasscodeGuess = document.querySelector("#passcode").value;
    const messagesRef = firebase.database().ref();
    //firebase version of addEventListener
    messagesRef.on("value", (snapshot) => {
       
        const data = snapshot.val();
        for(let key in data){
             if(data[key].passcode == userPasscodeGuess){
                 display(data[key]);
             }
        }

    });
});

function display(messageObject) {
    document.querySelector("#message").innerHTML = messageObject.message;
  //console.log(message);
}
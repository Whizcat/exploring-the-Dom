console.log(document)

const myButton = document.querySelector(".btn");
const username = document.querySelector(".username");
const message = doument.querySelector(".message");
  
myButton.addEventListener('click', function() {

      if (username.value.length > 0 ) {
        message.innerText = 'Hello, ' + username.value;
        username.value = '';
        
      }
      else {
        message.innerText = "please enter a name";
      }
});
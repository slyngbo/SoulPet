var app6 = new Vue({
  el: '#app-6',
  data: {
    message: ''
  }
})
function goToQuestionPage () {
  location.href="google.com";
}
var startButton = getElementById('startbutton');

startButton.onclick = goToQuestionPage();

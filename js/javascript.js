var app6 = new Vue({
  el: '#app-6',
  data: {
    message: ''
  }
})

var startButton = getElementsByClassName ('bodyMain-mainMainPage-sectionButton--center-startButton-center')
function goToQuestionPage () {
  startButton.click = window.location.href="question.html";
}

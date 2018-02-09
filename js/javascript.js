var app6 = new Vue({
  el: '#app-6',
  data: {
    message: ''
  }
})

var startButton = getElementsByClassName ('bodyMain-mainMainPage-sectionButton--center-startButton-center')
function goToQuestionPage () {
  location.href="C:/SoulPet/question.html";
}
startButton.onclick = goToQuestionPage();


const btns = document.querySelectorAll('.dropDownBtn');
const answers = document.querySelectorAll('.answers');

window.addEventListener('DOMContentLoaded', function() {
  for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
      dropDown(answers[i], btns[i]);
    })
  }
})

function dropDown(answer, button) {
  
  if (answer.classList.contains('invisible')) {
    //remove answer for each other question block
    answers.forEach(function(ans) {
      if (!(ans.classList.contains('invisible'))) {
        ans.classList.add('invisible');
      }
    })

    btns.forEach(function(btn) {
      btn.firstChild.textContent = "+";
    })

    answer.classList.remove('invisible');
    button.firstChild.textContent = "-";
    
  } else {
    answer.classList.add('invisible');
    button.firstChild.textContent = "+";
  }
}
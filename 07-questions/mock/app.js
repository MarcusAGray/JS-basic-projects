const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const ans1 = document.getElementById('answer1');
const ans2 = document.getElementById('answer2');
const ans3 = document.getElementById('answer3');

const btnArr = [btn1, btn2, btn3];
const ansArr = [ans1, ans2, ans3];

btn1.addEventListener('click', function() {
  dropDown(ans1, btn1);
})

btn2.addEventListener('click', function() {
  dropDown(ans2, btn2);
})

btn3.addEventListener('click', function() {
  dropDown(ans3, btn3);
})

function dropDown(answerId, btnId) {
  
  if (answerId.classList.contains('invisible')) {

    //remove answer for each other question block
    ansArr.forEach(function(ans) {
      if (!(ans.classList.contains('invisible'))) {
        ans.classList.add('invisible');
      }
    })

    btnArr.forEach(function(btn) {
      btn.firstChild.textContent = "+";
    })

    answerId.classList.remove('invisible');
    btnId.firstChild.textContent = "-";
    
  } else {
    answerId.classList.add('invisible');
    btnId.firstChild.textContent = "+";
  }
}

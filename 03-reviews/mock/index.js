const reviews = [
  {
    picture: "images/person-1.jpeg",
    name: "Anna Johnson",
    role: "Web Designer",
    des: `Helvetica artisan kinfolk thundercats 
    lumbersexual blue bottle. Disrupt glossier 
    gastropub deep v vice franzen hell of brooklyn
     twee enamel pin fashion axe.photo booth jean 
     shorts artisan narwhal.`
  },
  {
    picture: "images/person-2.jpg",
    name: "Peter Jones",
    role: "Intern",
    des: `Helvetica artisan kinfolk thundercats 
    lumbersexual blue bottle. Disrupt glossier 
    gastropub deep v vice franzen hell of brooklyn
     twee enamel pin fashion axe.photo booth jean 
     shorts artisan narwhal.`
  },
  {
    picture: "images/person-3.jpg",
    name: "Bill Anderson",
    role: "The Boss",
    des: `Helvetica artisan kinfolk thundercats 
    lumbersexual blue bottle. Disrupt glossier 
    gastropub deep v vice franzen hell of brooklyn
     twee enamel pin fashion axe.photo booth jean 
     shorts artisan narwhal.`
  }
]

const profilePic = document.getElementById('profilePic');
const profileName = document.getElementById('name');
const role = document.getElementById('role');
const reviewEntry = document.getElementById('reviewEntry');

const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const surpriseBtn = document.getElementById('surpriseBtn');

let index = 0;

function loadReview(review) {
  profilePic.innerHTML = `<img 
                            alt="Profile Picture of Reviewer" 
                            src="${reviews[index].picture}"
                            >`;
  profileName.textContent = reviews[index].name;
  role.textContent = reviews[index].role;
  reviewEntry.textContent = reviews[index].des;
}

window.addEventListener('DOMContentLoaded', function() {
  loadReview(reviews[index]);
})

rightBtn.addEventListener('click', function() {
  index = (index == reviews.length - 1) ? 0 : index += 1;
  loadReview(reviews[index]);
})

leftBtn.addEventListener('click', function() {
  index = (index == 0) ? reviews.length - 1 : index -= 1;
  loadReview(reviews[index]);
})

surpriseBtn.addEventListener('click', function() {
  let random;
  do { //loop prevents same review been chosen
    random = Math.floor(Math.random() * 3);
  } while (random == index);
  index = random;
  loadReview(reviews[index]);
})
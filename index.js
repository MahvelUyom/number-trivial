let getFactBtn = document.querySelector('.get-fact');
let randomFactBtn = document.querySelector('.rand-fact')
let fact = document.querySelector('.fact')

let url = "http://numbersapi.com/";

let fetchFact = (num) =>{
  let finalUrl = url+ num;
  fetch(finalUrl)
  .then((resp)=>resp.text())
  .then((data) =>{
    fact.style.display = "block"
    fact.innerHTML = `<h2>${num}</h2>
    <p>${data}</p>`;
    document.querySelector('.container').append(fact);
  })
};

let getFact = () =>{
  let num = document.querySelector('#num').value;
  if(num){
    if(num >=0 && num <= 300){
      fetchFact(num)
    }
    else {
      fact.style.display = "block";
      fact.innerHTML = `<p class = "msg">Please enter a anumber between 0 and 300</p>`
    }
  }
  else{
    fact.style.display = "block";
    fact.innerHTML = `<p class = "msg">Input field cannot be empty</p>`
  }
};

let getRandomFact = () =>{
  let num = Math.floor(Math.random() * 301);
  fetchFact(num)
}
getFactBtn.addEventListener("click", getFact);
randomFactBtn.addEventListener("click", getRandomFact);
window.addEventListener("load", getRandomFact) 
const btn = document.querySelector(".btn");
const quoteContent = document.querySelector("#quoteC");
const quoteAuthor = document.querySelector("#quoteA");
const quoteDiv = document.querySelector(".quoteDiv");
let i =0;
const getQuote = ()=>{
    fetch("https://dummyjson.com/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    if(i>30){
        i=0;
    }
    quoteContent.innerHTML = data.quotes[i].quote;
    quoteAuthor.innerHTML = `- ${data.quotes[i].author}`;
    i++;
    console.log(data.quotes[i].quote);
  });
}
getQuote();

btn.addEventListener('click',getQuote);
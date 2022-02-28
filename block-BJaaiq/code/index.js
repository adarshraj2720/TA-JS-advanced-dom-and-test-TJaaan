let quoteList=document.querySelector('.quote-list')


function createUI(){
    quotes.forEach((ele)=>{
        let div=document.createElement('div');
        let li=document.createElement('li');
        li.innerText=ele.quoteText
        let cite=document.createElement('cite');
        cite.innerText=ele.quoteAuthor
        div.append(li,cite)
        quoteList.append(div)
    })

}
createUI()

document.addEventListener("DOMContentLoaded", message);
function message() {
    alert('The content of the DOM is loaded');


  }

//   document.addEventListener("DOMContentLoaded", ready);

//   window.addEventListener('scroll', function() {
//     document.getElementById('.quote-list').innerHTML = window.pageYOffset +'px';
//   });



  // when we're on the top of the page
// window-relative top = 0
// document.documentElement.getBoundingClientRect().top = 0

// // window-relative bottom = 2000
// // the document is long, so that is probably far beyond the window bottom
// document.documentElement.getBoundingClientRect().bottom = 2000


// // document top is above the window 500px
// document.documentElement.getBoundingClientRect().top = -500
// // document bottom is 500px closer
// document.documentElement.getBoundingClientRect().bottom = 1500


// // document top is above the window 1400px
// document.documentElement.getBoundingClientRect().top = -1400
// // document bottom is below the window 600px
// document.documentElement.getBoundingClientRect().bottom = 600


function scroll() {
    while(true) {
      // document bottom
      let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
  
      // if the user hasn't scrolled far enough (>100px to the end)
      if (windowRelativeBottom > document.documentElement.clientHeight + 100) break;
  
      // let's add more data
      document.body.insertAdjacentHTML("beforeend", createUI());
    }
  }

  window.addEventListener('scroll', scroll);
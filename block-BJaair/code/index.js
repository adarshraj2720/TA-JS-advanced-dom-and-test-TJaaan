let title=document.querySelector('#title')
let author=document.querySelector('#author')
let btn=document.querySelector('.add-btn')
let form=document.querySelector('form')
let item=document.querySelector('.item');

let data={}

function add(event){
    event.preventDefault()
    data.title=form.elements.title.value;
    data.author=form.elements.author.value;
    console.log(data);
    dataList()
    form.elements.title.value="";
    form.elements.author.value="";
}
form.addEventListener("submit",add)

function dataList(){
    let body=document.querySelector('body')
    let data1=document.createElement('div')
    
    data1.classList.add('box');
    // data1.style.display="flex"

// data1.style.backgroundColor="red"




let h1=document.createElement('h1');
h1.style.textDecoration="underline"
h1.innerText=`${data.title}`;

    
let p=document.createElement('p');
p.innerText=`${data.author}`;
data1.append(h1,p);
item.append(data1)
console.log(data)
}
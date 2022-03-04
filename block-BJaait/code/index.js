let title=document.querySelector('#title')
let author=document.querySelector('#author')
let btn=document.querySelector('.add-btn')
let form=document.querySelector('form')
let item=document.querySelector('.item');

let data={}

function add(event){
    event.preventDefault()
    data.title=form.elements.title.value;
    //data.author=form.elements.author.value;
    //console.log(data);
    dataList()
    form.elements.title.value="";
    //form.elements.author.value="";
}
form.addEventListener("submit",add)

function handleEdit(event,info){
    let elem= event.target;
    let input=document.createElement('input')
    input.value=info;
    input.addEventListener("keyup",(e)=>{
        if(e.keyCode === 13){
           
            let updateValue=e.target.value
            data.title=updateValue
            console.log("pressed enter")
            
        }
        dataList()
    })
    let parent=event.target.parentElement;
    parent.replaceChild(input,elem)
}


function dataList(){
    let body=document.querySelector('body')
    let data1=document.createElement('div')
    let small=document.createElement('small');
    small.innerText="Drag Me"
    small.style.color="#2672F4"
    small.style.paddingRight="20px"
    data1.classList.add('box');
    // data1.style.display="flex"
    // data1.style.alignItems="center"
    // data1.style.justifyContent="center"
    // data1.textalign="left"

// data1.style.backgroundColor="red"




let h1=document.createElement('h1');
// h1.classList.add('draggable')
// h1.addEventListener("dblclick",(event)=>handleEdit(event,data.title))
// h1.style.textDecoration="underline"
h1.style.color="#2672F4"
h1.style.fontWeight="800"
h1.style.paddingLeft="20px"
h1.innerText=`${data.title}`;

    
//let p=document.createElement('p');
//p.innerText=`${data.author}`;
data1.append(h1,small);
item.append(data1)
console.log(data)
}





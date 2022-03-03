function getFullName(firstName,lastName){
    return `${firstName+lastName}`;
}




// function isPalindrone(){



// }
function getCircumference(radius){
    return `The circumfernce is  ${2*Math.PI*radius}`;
}

function getArea(radius){
    return `The area is ${Math.PI*radius*radius}`
}

module.exports={getFullName,getCircumference,getArea}
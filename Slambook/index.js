let form;

let allSlamArray=[];
//Write code below to select the form element
form = document.querySelector('form')
console.log(form,"form");
// Write your code above

// Add the evenlistner below
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(document.querySelector('[name="contactName"]').value);
    console.log(document.querySelector('[name="relationship"]').value);
    console.log(document.querySelector('[name="likeInMe"]').value);
    console.log(document.querySelector('[name="hateInMe"]').value);
    console.log(document.querySelector('[name="deadReaction"]').value);
    console.log(document.querySelector('[name="firstImpression"]').value);
    console.log(document.querySelector('[name="beautifulMessage"]').value);
    console.log(document.querySelector('[name="nickname"]').value);
    console.log(document.querySelector('[name="songForMe"]').value);
    console.log(document.querySelector('[name="shareOpinion"]').value);
})
 
//Write your code above

        
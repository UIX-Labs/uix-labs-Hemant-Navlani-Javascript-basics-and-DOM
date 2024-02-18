let form;

let allSlamArray=[];
let formValue = {};
let err ;
//Write code below to select the form element
form = document.querySelector('form')
console.log(form,"form");
// Write your code above

// Add the evenlistner below
form.addEventListener('submit',function(e){
    
    formValue={}
    allSlamArray=[];
    e.preventDefault();
    if (err){
    err.forEach((element)=>{
        let tag = element.parentNode.querySelector('input')
        element.remove(element)
        tag.style = ""
    });
    }
    const contactName = document.querySelector('[name="contactName"]')
    const relationship = document.querySelector('[name="relationship"]')
    const likeInMe = document.querySelector('[name="likeInMe"]')
    const hateInMe = document.querySelector('[name="hateInMe"]')
    const deadReaction = document.querySelector('[name="deadReaction"]')
    const firstImpression = document.querySelector('[name="firstImpression"]')
    const beautifulMessage = document.querySelector('[name="beautifulMessage"]')
    const nickname = document.querySelector('[name="nickname"]')
    const songForMe = document.querySelector('[name="songForMe"]')
    const shareOpinion = document.querySelector('[name="shareOpinion"]')

    function addSpan(tag){
        tag.style = "border-bottom: 5px solid red;"
        const span = document.createElement('p');
        span.style.color = 'red';
        span.innerHTML = "Error : The text is required"
        span.className = "error"
        tag.after(span);
        return;
    }
    if (contactName.value === "") {addSpan(contactName);}
    if (relationship.value === "") {addSpan(relationship);}
     if (likeInMe.value === ""){addSpan(likeInMe); }
     if (hateInMe.value === "") {addSpan(hateInMe); }
     if (deadReaction.value === "") {addSpan(deadReaction); }
     if (firstImpression.value === "") {addSpan(firstImpression); }
     if (beautifulMessage.value === "") {addSpan(beautifulMessage);}
     if (nickname.value === "") {addSpan(nickname); }
     if (songForMe.value === ""){ addSpan(songForMe);}
     if (shareOpinion.value === "") {addSpan(shareOpinion); }

     err = document.querySelectorAll('.error');
     console.log(err);
    formValue.contactName = document.querySelector('[name="contactName"]').value
    formValue.relationship = document.querySelector('[name="relationship"]').value
    formValue.likeInMe = document.querySelector('[name="likeInMe"]').value
    formValue.hateInMe = document.querySelector('[name="hateInMe"]').value
    formValue.deadReaction = document.querySelector('[name="deadReaction"]').value
    formValue.firstImpression = document.querySelector('[name="firstImpression"]').value
    formValue.beautifulMessage = document.querySelector('[name="beautifulMessage"]').value
    formValue.nickname = document.querySelector('[name="nickname"]').value
    formValue.songForMe = document.querySelector('[name="songForMe"]').value
    formValue.shareOpinion = document.querySelector('[name="shareOpinion"]').value
    allSlamArray.push(formValue)
    console.log(formValue)
console.log(allSlamArray)


})
 
//Write your code above






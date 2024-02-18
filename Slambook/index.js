let form;

let allSlamArray=[];
let formValue = {};
let err ;
//Write code below to select the form element
form = document.querySelector('form')
// console.log(form,"form");
// Write your code above

// Add the evenlistner below
form.addEventListener('submit',function(e){
    
    formValue={}
    // allSlamArray=[];
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
    let flag = false;
    if (contactName.value === "") {addSpan(contactName); flag = true;}
    if (relationship.value === "") {addSpan(relationship);flag = true;}
     if (likeInMe.value === ""){addSpan(likeInMe); flag = true;}
     if (hateInMe.value === "") {addSpan(hateInMe); flag = true;}
     if (deadReaction.value === "") {addSpan(deadReaction); flag = true;}
     if (firstImpression.value === "") {addSpan(firstImpression); flag = true;}
     if (beautifulMessage.value === "") {addSpan(beautifulMessage);flag = true;}
     if (nickname.value === "") {addSpan(nickname); flag = true;}
     if (songForMe.value === ""){ addSpan(songForMe);flag = true;}
     if (shareOpinion.value === "") {addSpan(shareOpinion); flag = true;}
     err = document.querySelectorAll('.error');

     if (flag) return;


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
    // console.log(formValue)
// console.log(allSlamArray)
showSlamList();
})

function showSlamList(){

    const allSlams = document.querySelector('.allSlams')
            allSlams.innerHTML += `<div class="card">
<p>My name in your contact is <span class="answer">${formValue.contactName}</span></p>
<p>Relationship between us is <span class="answer">${formValue.relationship}</span></p>
<p>Something you like in me is <span class="answer">${formValue.likeInMe}</span></p>
<p>Something you hate in me is <span class="answer">${formValue.hateInMe}</span></p>
<p>If I die what would be your reaction?</p>
<p><span class="answer">${formValue.deadReaction}</span></p>
<p>What did you feel when you first saw me?</p>
<p><span class="answer">${formValue.firstImpression}</span></p>
<p>A beautiful message for me?</p>
<p><span class="answer">${formValue.beautifulMessage}</span></p>
<p>A nickname for me is <span class="answer">${formValue.nickname}</span></p>
<p>A song you want to dedicate to me is <span class="answer">${formValue.songForMe}</span></p>
<p>Can I share your opinion in my status?</p>
<p><span class="answer">${formValue.shareOpinion}</span></p>
</div>`
}

 
//Write your code above






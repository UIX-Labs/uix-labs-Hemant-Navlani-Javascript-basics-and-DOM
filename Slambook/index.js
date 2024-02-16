let form;

let allSlamArray=[];
//Write code below to select the form element
form = document.querySelector('form')
console.log(form,"form");
// Write your code above

// Add the evenlistner below
form.addEventListener('submit',function(e){
    e.preventDefault();
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
    function removeSpan(tag){
        tag.style = "border-bottom: 5px solid red;"
        const span = document.createElement('p');
        span.style.color = 'red';
        span.innerHTML = "Error : The text is required"
        span.className = "error"
        tag.after(span);
        return;
    }
    if (contactName.value === "") addSpan(contactName);
    if (relationship.value === "") addSpan(relationship);
     if (likeInMe.value === "") addSpan(likeInMe);
     if (hateInMe.value === "") addSpan(hateInMe);
     if (deadReaction.value === "") addSpan(deadReaction);
     if (firstImpression.value === "") addSpan(firstImpression);
     if (beautifulMessage.value === "") addSpan(beautifulMessage);
     if (nickname.value === "") addSpan(nickname);
     if (songForMe.value === "") addSpan(songForMe);
     if (shareOpinion.value === "") addSpan(shareOpinion);

})
 
//Write your code above

        
// listing Element
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

    // get refernce to from element using their ids

const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement
   const nameElement = document.getElementById('name') as HTMLInputElement;
   const emailElement = document.getElementById('email') as HTMLInputElement;
   const phoneElement = document.getElementById('phone') as HTMLInputElement;
   const educationElement = document.getElementById('education') as HTMLInputElement;
   const experienceElement = document.getElementById('experience') as HTMLInputElement;
   const skillsElement = document.getElementById('skills') as HTMLInputElement;

   
   if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){

    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experiance = experienceElement.value;
    const skills = skillsElement.value;

    // profilePicture Element
    const profilePictureFile = profilePictureInput.files?.[0]
    const profilePictureURL = profilePictureFile? URL.createObjectURL(profilePictureFile) : "";


   // create resume output
   const resumeOutput = `
   <h2>Resume</h2>
   ${profilePictureURL ? `<img src="${profilePictureURL} alt="Profile Picture" class="profilePicture"> `: '' }
   <p><strong>Name:</strong>${name} </p>
   <p><strong>Email:</strong> ${email}  </p>
   <p><strong>Phone:</strong> ${phone} </p>
   <h3>Education</h3>
   <p>${education}</p>
   <h3>Experiance</h3>
   <p>${experiance}</h3>
   <h3>Skills</h3>
   <p>${skills}</h3>
   `;

   const resumeOutputElement = document.getElementById('resumeOutput')
   if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;
    makeEditable();
   }   
} else{
    console.error('One OR More Output Element are Missing')
}
});

function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click' , function() {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            //replace content
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN'){
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentValue
                input.classList.add('editing-input')
                
                input.addEventListener('blur', function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove()
                })

                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }
        })
    })
}
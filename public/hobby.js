  const typeOfDancesYouDo = document.querySelectorAll('input[name="language"]');

const yourGender = document.querySelectorAll('input[name="gender"]');

const typeOfDancesYouLike = document.querySelectorAll('input[name="like"]');

const perceptionOfDancing = document.querySelectorAll('input[name="perception"]');

let data= {};

const input = document.querySelectorAll('.other');

let leblelanguage, leblegender, leblelike, lebleperception;

if (document.getElementById('submit')!=null) {
 document.getElementById('submit').addEventListener('click' , (event)=>{
   sendForm();
})
}

input.forEach((input) => {
    input.addEventListener('change', (event)=>{
        showInput(event);
    });
});


function showInput(event){
    const key = event.target.checked;
    let sp = event.target.parentElement.querySelector('.sp');
    let value =  event.target.parentElement.className;

    if(key==true){
        sp.innerHTML = '<input id='+ value +'type="text" name="other" style="border:none;border-bottom:1px solid rgb(211, 208, 208);margin-bottom: 20px;">';
       
        document.querySelector(`#${value}`).addEventListener('change', (event)=>{
            if (value == 'language ') {
                leblelanguage = event.target.value;
                
            }
            if (value == 'like ') {
                leblelike = event.target.value;
            }
          });
    }
}



typeOfDancesYouDo.forEach((language) => {
    language.addEventListener('click', (event)=>{
        const key = event.target.className;
        let input = document.querySelector(`#language`);
        if(key === "other"){
            return;
        }
        else{
            if(input){
              input.remove();
            }
            leblelanguage = event.target.value;
        }
    });
});


yourGender.forEach((gender) => {
    gender.addEventListener('click', (event)=>{
        leblegender = event.target.value;
    });
});


perceptionOfDancing.forEach((perception) => {
    perception.addEventListener('click', (event)=>{
        lebleperception = event.target.value;
    });
});

typeOfDancesYouLike.forEach((like) => {
    like.addEventListener('click', (event)=>{
        const key = event.target.className;
        if(key === "other"){
            return;
        }
        else{
            leblelike = event.target.value;
        }
    });
});

function sendForm() { 
    const fullName = document.querySelector('input[name="fullname"]').value;
    const dateofBirth = document.querySelector('input[type="date" ][name = "originalDate"]').value;
    const yourGender = leblegender;
    const yearsofDancing = document.querySelector('input[name="author"]').value;
    const typeOfDancesYouLike = leblelike;
    const perceptionOfDancing = lebleperception;
    const roleModel = document.querySelector('input[name="edition"]').value;
    const experiencewithPartnerDances = document.querySelector('input[name="dimensions"]').value;
    const needForSpecialSportsWear = document.querySelector('input[name="publisher"]').value;
    const participationInCompetitions = document.querySelector('input[name="genre"]').value;
    const namesOfCompetitions = document.querySelector('input[name="age"]').value;
    const typeOfDancesYouDo = leblelanguage; 
    
    
    if (fullName == "") {
        return
    }
    if ( dateofBirth == "" ) {
        return
    }
    if (!yourGender) {
        return
    }
    if(!typeOfDancesYouDo){
        return;
    }
    if (!perceptionOfDancing) {
        return
    }
    if (!typeOfDancesYouLike) {
        return
    }

    if (yearsofDancing == "") {
        return
    }
    if (needForSpecialSportsWear == "" ) {
        return
    }
    if (participationInCompetitions == "") {
        return
    }

    data = {
        "owner":"MeriMadanyan",
        "project":"Dance",
        fullName,
        dateofBirth,
        yourGender,
        yearsofDancing,
        typeOfDancesYouLike,
        perceptionOfDancing, 
        roleModel, 
        experiencewithPartnerDances, 
        needForSpecialSportsWear, 
        participationInCompetitions,
        namesOfCompetitions,
        typeOfDancesYouDo,       
    }
    
    console.log(data); 
   
 $.ajax({
    type: 'POST',
    url: "https://cse-120-2021-api-meri.herokuapp.com/data",
    data: data,
    cache: false,
    dataType : 'json',
    success: function (data) {
      console.log("success");
      document.location = "add";
    },
    error: function (xhr) {
      console.error("Error in post", xhr);
    },
    complete: function () {
      console.log("Complete");  
    }
  });
} 

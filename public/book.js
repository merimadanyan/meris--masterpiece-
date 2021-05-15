    
const coverType = document.querySelectorAll('input[name="coverType"]');

const language = document.querySelectorAll('input[name="language"]');

const originalLanguage =  document.querySelectorAll('input[name="originalLanguage"]');
const input = document.querySelectorAll('.other');

let labelCover,leblelanguage,lebleOriginalLanguage;

document.getElementById('sumbit').addEventListener('click' , (event)=>{
   sendForm();
})

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
          sp.innerHTML = '<input id='+ value +' type="text" name="other" style="border:none;border-bottom:1px solid rgb(211, 208, 208);margin-bottom: 20px;">';
        document.querySelector(`#${value}`).addEventListener('change', (event)=>{
            
            if(value =='cover'){
                labelCover = event.target.value;
             
            }
            if(value == 'language '){
                leblelanguage = event.target.value;
                
            }
            if(value =='originalLanguage '){
                lebleOriginalLanguage =event.target.value;
                
            }
          });
    }
}

coverType.forEach((cover) => {
    cover.addEventListener('click', (event)=>{
        const key = event.target.className;
        let input = document.getElementById('cover');
        if(key === "other"){
            return;
        }
        else{
            if(input){
                input.remove();
            }
            labelCover = event.target.value;
        }
    });
});
language.forEach((language) => {
    language.addEventListener('click', (event)=>{
        const key = event.target.className;
        let input = document.getElementById('language');
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

originalLanguage.forEach((language) => {
    language.addEventListener('click', (event)=>{
        const key = event.target.className;
        let input = document.getElementById('originalLanguage');
        if(key === "other"){
            return;
        }
        else{
            if(input){
                input.remove();
            }
            lebleOriginalLanguage = event.target.value;
        }
    });
});

function sendForm() { 
    const fullName = document.querySelector('input[name="fullname"]').value;
    const title = document.querySelector('input[name="title"]').value;
    const author = document.querySelector('input[name="author"]').value;
    const colour = document.querySelector('input[name="colour"]').value;
    const number = document.querySelector('input[name="number"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const currency = document.querySelector('input[name="currency"]').value;
    const edition = document.querySelector('input[name="edition"]').value;
    const dimensions = document.querySelector('input[name="dimensions"]').value;
    const publisher = document.querySelector('input[name="publisher"]').value;
    const genre = document.querySelector('input[name="genre"]').value;
    const age = document.querySelector('input[name="age"]').value;
    const publisherDate = document.querySelector('input[type="date"][ name = "publisherDate"]').value;
    const originalDate = document.querySelector('input[type="date" ][name = "originalDate"]').value;
    const coverType = labelCover;
    const originalLanguage =  lebleOriginalLanguage;
    const language = leblelanguage;

    
     if (fullName == "") {
        return
    }
    if (title == "" ) {
        return
    }
    if (author == "") {
        return
    }
    if (number == "" ) {
        return
    }
    if (price == "") {
        return
    }
    if (currency == "" ) {
        return
    }
    if (publisher == "") {
        return
    }
    if (genre == "" ) {
        return
    }
    if(publisherDate == ""){
        return
    }
    if (!coverType) {
        return
    }
    if (!language) {
        return
    }
    const data = {
        "owner":"MeriMadanyan",
        "project":"Book",
        fullName,
        title,
        author, 
        colour, 
        number, 
        price, 
        currency,
        edition,
        dimensions,
        publisher, 
        genre,
        age,
        publisherDate,
        originalDate,
        coverType,
        originalLanguage,
        language,
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


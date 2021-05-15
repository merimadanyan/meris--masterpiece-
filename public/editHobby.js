       
function updateDance() {
  let lebleDoYou, leblegender, leblelike, lebleperception;
  localStorage = window.localStorage;
  editItem = JSON.parse(localStorage.getItem("editItem"));
  const id = editItem._id;

      if ( document.getElementById("checkMale").checked === true) {
        leblegender = "Male"
      } 
      else if ( document.getElementById("checkFemale").checked === true) {
          leblegender = "Female";
      } 

      if(document.getElementById("checkBallet").checked === true){
        lebleDoYou = "Ballet";
      }
      else if( document.getElementById('checkHipHop').checked === true){
        lebleDoYou = "Hip Hop";
      }
      else if(document.getElementById('checkContemporary').checked === true){
        lebleDoYou = "Contemporary";
      }
      else if( document.getElementById('checkFolk').checked === true){
        lebleDoYou = "Folk";
      }
      else if(document.getElementById('typeOFDanceOther').checked === true){
        lebleDoYou = document.getElementById('typeOfDanceInput').value;

      }


      if(document.getElementById("checkHobby").checked === true){
        lebleperception = "A hobby";

      }
      else if(  document.getElementById('checkArt').checked === true){
        lebleperception = "An art"
      }
      else if(document.getElementById('checkProfession').checked === true){
        
        lebleperception = "A profession";
      }
      else if( document.getElementById('checkSport').checked === true){
       
        lebleperception = "A sport";
      }

  
    
      if(document.getElementById("checkModern").checked === true){
        leblelike = "Modern types of dancing";
      }
      else if(document.getElementById('checkClassic').checked === true){
        leblelike = "Classic types of dancing";
      }
      else if( document.getElementById('checkLike').checked === true){
        leblelike = "I like both styles same way";
      }
      else if(document.getElementById('checkMovement').checked === true){
        leblelike = "I like the movement of one style and the costumes of another";
      }
        else if( document.getElementById('checkappealingOther').checked === true){

        leblelike = document.getElementById('appealingInput').value;

      }



  var tmp = {
    "id" : id,
    "fullName": document.getElementById("fullName").value,
    "dateofBirth": document.getElementById("BirthDate").value,
    "yourGender":  leblegender,
    "yearsofDancing":  document.getElementById("beDancing").value,
    "typeOfDancesYouLike": leblelike,
    "perceptionOfDancing":lebleperception, 
    "roleModel":  document.getElementById("role").value, 
    "experiencewithPartnerDances":  document.getElementById("partenDanc").value, 
    "needForSpecialSportsWear":  document.getElementById("sportswear").value , 
    "participationInCompetitions":  document.getElementById("competition").value ,
    "namesOfCompetitions":  document.getElementById("question").value,
    "typeOfDancesYouDo":  lebleDoYou, 
  }
  console.log(tmp);
  
    $.ajax({
        type: 'POST',
        url: "https://cse-120-2021-api-meri.herokuapp.com/data/update",
        data: tmp,
        cache: false,
        dataType : 'json',
        success: function (data) {
            console.log("success");
            document.location = "admin";
        },
        error: function (xhr) {
            console.error("Error in post", xhr);
        },
        complete: function () {
            console.log("Complete");  
        }
    });


}






function loadEditItem() {
  localStorage = window.localStorage;
  editItem = JSON.parse(localStorage.getItem("editItem"));
  console.log(editItem)
  const project = editItem.project

    if (editItem["yourGender"]) {
      if (editItem["yourGender"] == "Male") {
        document.getElementById("checkMale").checked = true;
      } 
      else if (editItem["yourGender"] == "Female") {
          document.getElementById("checkFemale").checked = true;
      } 
    }
     if(editItem["typeOfDancesYouDo"]){
      if(editItem["typeOfDancesYouDo"] == "Ballet"){
        document.getElementById("checkBallet").checked = true;
      }
      else if(editItem["typeOfDancesYouDo"] == "Hip Hop"){
        document.getElementById('checkHipHop').checked = true;
      }
      else if(editItem["typeOfDancesYouDo"] == "Contemporary"){
        document.getElementById('checkContemporary').checked = true;
      }
      else if(editItem["typeOfDancesYouDo"] == "Folk"){
        document.getElementById('checkFolk').checked = true;
      }
      else if(editItem["typeOfDancesYouDo"] != "Ballet" && editItem["typeOfDancesYouDo"] != "Hip Hop" && editItem["typeOfDancesYouDo"] != "Folk" && editItem["typeOfDancesYouDo"] != "Contemporary"){
        document.getElementById('typeOFDanceOther').checked = true;
        document.getElementById('typeOfDanceInput').value = editItem["typeOfDancesYouDo"] ;

      }
    }
    if(editItem["perceptionOfDancing"]){
      if(editItem["perceptionOfDancing"] == "A hobby"){
        document.getElementById("checkHobby").checked = true;
      }
      else if(editItem["perceptionOfDancing"] == "An art"){
        document.getElementById('checkArt').checked = true;
      }
      else if(editItem["perceptionOfDancing"] == "A profession"){
        document.getElementById('checkProfession').checked = true;
      }
      else if(editItem["perceptionOfDancing"] == "A sport"){
        document.getElementById('checkSport').checked = true;
      }

    }
    if(editItem["typeOfDancesYouLike"]){
      if(editItem["typeOfDancesYouLike"] == "Modern types of dancing"){
        document.getElementById("checkModern").checked = true;
      }
      else if(editItem["typeOfDancesYouLike"] == "Classic types of dancing"){
        document.getElementById('checkClassic').checked = true;
      }
      else if(editItem["typeOfDancesYouLike"] == "I like both styles same way"){
        document.getElementById('checkLike').checked = true;
      }
      else if(editItem["typeOfDancesYouLike"] == "I like the movement of one style and the costumes of another"){
        document.getElementById('checkMovement').checked = true;
      }
        else {
        document.getElementById('checkappealingOther').checked = true;
        document.getElementById('appealingInput').value = editItem["typeOfDancesYouLike"] ;

      }

    }
  document.getElementById("fullName").value = editItem["fullName"];
  document.getElementById("BirthDate").value = editItem["dateofBirth"];
  document.getElementById("beDancing").value = editItem["yearsofDancing"];    
  document.getElementById("role").value = editItem["roleModel"]; 
  document.getElementById("partenDanc").value = editItem["experiencewithPartnerDances"]; 
  document.getElementById("sportswear").value = editItem["needForSpecialSportsWear"]; 
  document.getElementById("competition").value = editItem["participationInCompetitions"]; 
  document.getElementById("question").value = editItem["namesOfCompetitions"];
  }
  



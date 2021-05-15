
    
function updateBook() {
 let labelCover,leblelanguage,lebleOriginalLanguage;
  localStorage = window.localStorage;
  editItem = JSON.parse(localStorage.getItem("editItem"));

if (document.getElementById("checkCoverHardcover").checked === true) {
    labelCover = "hardcover";
  } else if (document.getElementById("checkCoverPaperBack").checked === true) {
    labelCover = "paperBack";
  } else if(document.getElementById("checkCoverOther").checked === true){
    labelCover = document.getElementById("coverInput").value;
  }

  if (document.getElementById("checkEnglish").checked === true) {
    leblelanguage = "english";
  } else if (document.getElementById("checkArmenian").checked === true) {
    leblelanguage = "armenian";
  } else if (document.getElementById("checkRussian").checked === true) {
    leblelanguage = "russian";
  } else if (document.getElementById("checkFrench").checked === true) {
    leblelanguage = "french";
  } else if(document.getElementById("checkLanguageOther").checked === true){
    leblelanguage = document.getElementById("languageInput").value;
  }

  if (document.getElementById("checkOriginEnglish").checked === true) {
    lebleOriginalLanguage = "english";
  } else if (document.getElementById("checkOriginArmenian").checked === true) {
    lebleOriginalLanguage = "armenian";
  } else if (document.getElementById("checkOriginRussian").checked === true) {
    lebleOriginalLanguage = "russian";
  } else if (document.getElementById("checkOriginFrench").checked === true) {
    lebleOriginalLanguage = "french";
  }
  else if(document.getElementById("checkOriginLanguageOther").checked === true){
      lebleOriginalLanguage = document.getElementById("originLanguageInput").value;
  }
  let tmp = {
    "id" : editItem._id,
    "title" : document.getElementById("title").value,
    "fullName":document.getElementById("fullName").value,
    "author":document.getElementById("author").value, 
    "colour":document.getElementById("colour").value,
    "number":document.getElementById("page").value, 
    "price": document.getElementById("price").value,
    "currency":document.getElementById("currency").value,
    "edition": document.getElementById("edition").value,
    "publisher":document.getElementById("pubDate").value , 
    "genre":   document.getElementById("genre").value,
    "age": document.getElementById("age").value,
    "publisherDate": document.getElementById("publisher").value,
    "originalDate": document.getElementById("origPubDate").value,
    "coverType": labelCover ,
    "originalLanguage":lebleOriginalLanguage ,
    "language":leblelanguage
     
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


  if (editItem["coverType"]) {
      if (editItem["coverType"] == "hardcover") {
        document.getElementById("checkCoverHardcover").checked = true;
      } 
      else if (editItem["coverType"] == "paperBack") {
          document.getElementById("checkCoverPaperBack").checked = true;
      } else {
        document.getElementById("checkCoverOther").checked = true;
        document.getElementById("coverInput").value = editItem["coverType"];
      }
    }
    if(editItem["language"]){
      if(editItem["language"] == "english"){
        document.getElementById("checkEnglish").checked = true;
      }
      if(editItem["language"] == "armenian"){
        document.getElementById('checkArmenian').checked = true;
      }
      if(editItem["language"] == "russian"){
        document.getElementById('checkRussian').checked = true;
      }
      if(editItem["language"] == "french"){
        document.getElementById('checkFrench').checked = true;
      }
      else if(editItem["language"] != "english" && editItem["language"] != "armenian" && editItem["language"] != "russian" && editItem["language"] != "french"){
        document.getElementById('checkLanguageOther').checked = true;
        document.getElementById('languageInput').value = editItem["language"] ;

      }
    }

    if(editItem["originalLanguage"]){
      if(editItem["originalLanguage"] === "english"){
        document.getElementById("checkOriginEnglish").checked = true;
      }
      else if(editItem["originalLanguage"] === "armenian"){
        document.getElementById('checkOriginArmenian').checked = true;
      }
      else if(editItem["originalLanguage"] === "russian"){
        document.getElementById('checkOriginRussian').checked = true;
      }
      else if(editItem["originalLanguage"] === "french"){
        document.getElementById('checkOriginFrench').checked = true;
      }
      else if(editItem["originalLanguage"] !== "english" && editItem["originalLanguage"] !== "armenian" && editItem["originalLanguage"] !== "russian" && editItem["originalLanguage"] !== "french"){
        document.getElementById('checkOriginLanguageOther').checked = true;
        document.getElementById('originLanguageInput').value = editItem["originalLanguage"] ;
  
      }
    }

    document.getElementById("fullName").value = editItem["fullName"];
    document.getElementById("title").value = editItem["title"];
    document.getElementById("author").value = editItem["author"];
    document.getElementById("colour").value = editItem["colour"];
    document.getElementById("page").value = editItem["number"];
    document.getElementById("price").value = editItem["price"];
    document.getElementById("currency").value = editItem["currency"];
    document.getElementById("edition").value = editItem["edition"];
    document.getElementById("publisher").value = editItem["publisher"];
    document.getElementById("dimensions").value = editItem["dimensions"];
    document.getElementById("pubDate").value = editItem["publisherDate"];
    document.getElementById("origPubDate").value = editItem["originalDate"];
    document.getElementById("genre").value = editItem["genre"];
    document.getElementById("age").value = editItem["age"];
  }

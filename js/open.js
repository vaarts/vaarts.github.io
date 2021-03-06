// function setNewImage(){
//    document.getElementsByClassName(".gallery");

// }

// function setOldImage(){

// }



// function image(img) {
//     var src = img.src;
//     window.open(src);
// }



function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
  }
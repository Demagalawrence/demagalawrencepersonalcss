const word = document.querySelector(".text");
const careers = ["web_developer", "designer", "freelancer", "creator"];
let careerindex = 0;
let charaterindex = 0;

update();
function update () {
    charaterindex++;
    word.innerHTML = `<h3>  And l am a ${careers[careerindex].slice(0,charaterindex)}</h3>`;
  
   if(charaterindex === careers[careerindex].length){
    careerindex++;
    charaterindex = 0;
   } 
   if(careerindex === careers.length){
    careerindex = 0;
   }




setTimeout(update,400);


}
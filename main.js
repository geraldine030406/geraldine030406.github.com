let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Este sitio web habla sobre mi vida cotidiana')
  .pauseFor(200)
  .deleteChars(10)
  .start();

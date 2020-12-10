let button = document.getElementById('download-button');
let div = document.getElementById('cat-photo');



button.addEventListener('click', function(){
  let random1 = Math.floor(Math.random() * 10);
  let random2 = Math.floor(Math.random() * 10);

  div.innerHTML = `
    <img class = "responsive-img z-depth-5" src="https://source.unsplash.com/80${random1}x60${random2}/?cat,dog,puppy,kitten" alt="">
  `

});

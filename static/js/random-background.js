window.onload = function() {

var bimages = [
"http://upload.wikimedia.org/wikipedia/en/4/4e/Shibe_Inu_Doge_meme.jpg", 
"http://local.brookings.k12.sd.us/krscience/images/two-cute-animals-cute-fox.jpg", 
"http://superbpix.com/files/funzug/imgs/walls/big/cute_cats_wal_03.jpg", 
"http://www.evilkid.com/katamari3/cat_tent1.jpg"];

var rand=Math.floor(Math.random()*4);

newImage = "url("+bimages[rand]+")";

if (Math.random()*10<3)
  {
  document.body.style.backgroundImage = newImage;
  };

}
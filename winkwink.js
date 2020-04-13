var secret = document.querySelector('#WINKWINK');
var wink = document.querySelector('#wink');

secret.addEventListener('mouseover', function(){
wink.classList.add('active')
});

secret.addEventListener('mouseout', function(){
wink.classList.remove('active');
});

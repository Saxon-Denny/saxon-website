var i = 0;
var tel = '07554660968';
var speed = 200; 

function typeWriterPhone() { 
  if (i < tel.length) {
    document.getElementById("number").innerHTML += tel.charAt(i);
    i++;
    setTimeout(typeWriterPhone, speed);
  }
}

var j = 0;
var email = 'saxondenny@live.co.uk'; 

function typeWriterEmail() {
  if (j < email.length) {
    document.getElementById("linkToEmail").innerHTML += email.charAt(j);
    j++;
    setTimeout(typeWriterEmail, speed);
  }
}

let a = document.getElementById("linkToEmail") 
a.href="mailto:saxondenny@live.com?subject=Hello"



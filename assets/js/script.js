function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySideNav").style.width="0";
}

let jsGroup = document.querySelectorAll(".jsGroup");

// jsGroup.innerHTML += sayac();

// function sayac(){

//     let baslat= 9; //başlatma sayın kaç istiyorsan (10 için 9)
//         let interval = setInterval(function(){
//             baslat+= 1;
//             if(baslat=== 50){ // durmasını istediğin sayı
//                 clearInterval(interval);
//             }

//             console.log(baslat);
//         }, 80); // 2 saniyede bir tetikleme yapsın. (1 saniye için = 1000)
//         return;
// }

let count = 0;
setInterval(_ => console.log(count++), 10_000);




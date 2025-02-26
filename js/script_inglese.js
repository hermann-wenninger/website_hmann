let rest = document.getElementById("rest");
rest.addEventListener("click", function () {
  const meeer = document.getElementById("meeer");
  //meeer.style.zIndex=99;
  rest.classList.toggle("resttop");
  rest.classList.toggle("expand-fwd");
});
/////////////////////////////preload images//////////////////////////////////////
function preloadImages(urls, allImagesLoadedCallback) {
  var loadedCounter = 0;
  var toBeLoadedNumber = urls.length;
  urls.forEach(function (url) {
    preloadImage(url, function () {
      loadedCounter++;
      console.log("nummer des geladenen bildes " + loadedCounter);
      if (loadedCounter == toBeLoadedNumber) {
        allImagesLoadedCallback();
      }
    });
  });
  function preloadImage(url, anImageLoadedCallback) {
    var img = new Image();
    img.onload = anImageLoadedCallback;
    img.src = url;
  }
}

// call the loading
preloadImages(
  [
    ////////////////////////////////////////
    "pictures/beifang/herz/herz1.jpg",
    "pictures/beifang/herz/herz2.jpg",
    "pictures/beifang/herz/herz3.jpg",
    "pictures/beifang/herz/herz4.jpg",
    "pictures/beifang/herz/herz5.jpg",
    "pictures/beifang/herz/herz6.jpg",
    "pictures/beifang/herz/herz7.jpg",
    "pictures/beifang/herz/herz8.jpg",
    /////////////////////////////////////////
    "pictures/beifang/jongleur/jong1.jpg",
    "pictures/beifang/jongleur/jong2.jpg",
    "pictures/beifang/jongleur/jong3.jpg",
    "pictures/beifang/jongleur/jong4.jpg",
    "pictures/beifang/jongleur/jong5.jpg",
    "pictures/beifang/jongleur/jong6.jpg",
    "pictures/beifang/jongleur/jong7.jpg",

    "pictures/beifang/jongleur/artist1.jpg",
    "pictures/beifang/jongleur/artist2.jpg",
    "pictures/beifang/jongleur/artist3.jpg",
    "pictures/beifang/jongleur/artist4.jpg",
    "pictures/beifang/jongleur/artist5.jpg",
    "pictures/beifang/jongleur/artist6.jpg",

    "pictures/beifang/jongleur/gheber1.jpg",
    "pictures/beifang/jongleur/gheber2.jpg",
    "pictures/beifang/jongleur/gheber3.jpg",
    "pictures/beifang/jongleur/gheber4.jpg",
    "pictures/beifang/jongleur/gheber5.jpg",
    "pictures/beifang/jongleur/gheber6.jpg",
    "pictures/beifang/jongleur/gheber7.jpg",
    "pictures/beifang/jongleur/gheber8.jpg",
    //////////////////////////////////////////
    "pictures/beifang/springer/springer1.jpg",
    "pictures/beifang/springer/springer2.jpg",
    "pictures/beifang/springer/springer3.jpg",
    "pictures/beifang/springer/springer4.jpg",
    "pictures/beifang/springer/springer5.jpg",
    "pictures/beifang/springer/springer6.jpg",
    //////////////////////////////////////////
  ],
  function () {
    console.log("Alle bilder geladen nach: soll 14secs");
  }
);

//////////////////////////////////navigation///////////////////////////////////////
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//////////////////////////////////////mare////////////////

let handfisch = document.querySelector("body > div.ende > footer");
handfisch.addEventListener("click", function () {
  document.getElementById("handfisch").classList.toggle("handfisch_top");
});

//////////////////////////////////////springer///////////////////////////////////////////////

var startspringer = document.getElementById("startspringer");
startspringer.addEventListener("click", springani);
function springani() {
  var index = 0;
  var iterations = 0;
  function updateImage() {
    console.log("start");
    var images = [
      "pictures/beifang/springer/springer1.jpg",
      "pictures/beifang/springer/springer2.jpg",
      "pictures/beifang/springer/springer3.jpg",
      "pictures/beifang/springer/springer4.jpg",
      "pictures/beifang/springer/springer5.jpg",
      "pictures/beifang/springer/springer6.jpg",
    ];

    if (index >= images.length - 1) {
      index = 0;
      iterations++;
    }
    console.log("index", index);
    index++;
    let img = document.getElementById("springer");
    img.src = images[index];
    console.log(img.src);
    if (iterations >= 2) {
      clearInterval(interval);
      img.src = "pictures/beifang/springer/springer1.jpg";

      function go() {
        /* let viertertext = document.getElementById("viertertext");
        viertertext.textContent =
          "vierter ergänzender Text zur Komplexität der Dinge und soviel ist zu sagen das es gut ist ggggggggg gggggg gggggg ggggg uuuu uuuu uuuuu";
        viertertext.classList.add("tracking-in-expand-fwd-top");
        viertertext.style.color = "white";*/

        setTimeout(go, 2000);
      }

      go();

      //startjongleur.appendChild(anschluss);
    } else {
    }
  }
  var interval = setInterval(updateImage, 500);
  updateImage();
}

//////////////////////////////////////jongleur////////////////////////////////////////////////

var startjongleur = document.getElementById("startjong");
startjongleur.addEventListener("click", jongani);
function jongani() {
   let mini = document.getElementById("innjong");
   mini.classList.add("glass");
   startjongleur.classList.add("unlook");
  let zweitertext = document.getElementById("zweitertext");
  zweitertext.textContent =
    "but no matter what technology we use to bring our projects to market...";
  zweitertext.classList.add("tracking-in-expand-fwd-top");
  zweitertext.style.color = "white";
  var index = 0;
  var iterations = 0;
  function updateImage() {
    console.log("startjongens");
    var images = [
      "pictures/beifang/jongleur/artist1.jpg",
      "pictures/beifang/jongleur/artist2.jpg",
      "pictures/beifang/jongleur/artist3.jpg",
      "pictures/beifang/jongleur/artist4.jpg",
      "pictures/beifang/jongleur/artist5.jpg",
      "pictures/beifang/jongleur/artist6.jpg",
      "pictures/beifang/jongleur/gheber1.jpg",
      "pictures/beifang/jongleur/gheber2.jpg",
      "pictures/beifang/jongleur/gheber3.jpg",
      "pictures/beifang/jongleur/gheber4.jpg",
      "pictures/beifang/jongleur/gheber5.jpg",
      "pictures/beifang/jongleur/gheber6.jpg",
      "pictures/beifang/jongleur/gheber7.jpg",
      "pictures/beifang/jongleur/gheber8.jpg",
    ];
    let back = document.getElementById("jongleur");
    back.style.backgroundImage = "url(/pictures/beifang/jongleur/gheber8.jpg)";
    if (index >= images.length) {
      index = 0;
      iterations++;
    }

    let img = document.getElementById("overcome");

    back.style.backgroundImage = "url(/pictures/beifang/jongleur/gheber8.jpg)";
    img.src = images[index];

    index++;
    if (iterations >= 1) {
      mini.classList.remove("glass");
      startjongleur.classList.remove("unlook");
      clearInterval(interval);
      img.src = "pictures/beifang/jongleur/gheber8.jpg";
      let anschluss = document.createElement("div");
      setClass();
      setTimeout(removeClass, 14000);

      function setClass() {
        let timer = 0;
        console.log("set");
        let presecondo = document.getElementById("preloader-second");
        presecondo.classList.add("flip-preloader");
        presecondo.classList.add("go");
      }
      function removeClass() {
        console.log("remove");
        let presecondo = document.getElementById("preloader-second");
        presecondo.classList.remove("flip-preloader");
        presecondo.classList.remove("go");
      }

      //startjongleur.appendChild(anschluss);
    } else {
    }
  }
  var interval = setInterval(updateImage, 1000);
  updateImage();
}

/////////////////////////////////////herzani and vieport raumschiff aspect ratio//////////////

var startherz = document.getElementById("startherz");
startherz.addEventListener("click", herzani);
function herzani() {
  var index = 0;
  var iterations = 0;
  function updateImage() {
    console.log("startherz");
    var images = [
      "pictures/beifang/herz/herz1.jpg",
      "pictures/beifang/herz/herz2.jpg",
      "pictures/beifang/herz/herz3.jpg",
      "pictures/beifang/herz/herz4.jpg",
      "pictures/beifang/herz/herz5.jpg",
      "pictures/beifang/herz/herz6.jpg",
      "pictures/beifang/herz/herz7.jpg",
      "pictures/beifang/herz/herz8.jpg",
    ];

    if (index >= images.length - 1) {
      index = 0;
      iterations++;
    }
    console.log("index", index);
    index++;
    let img = document.getElementById("overherz");
    img.src = images[index];
    if (iterations >= 11) {
      clearInterval(interval);
      img.src = "pictures/beifang/herz/herz1.jpg";
      let anschluss = document.createElement("div");
      setClass();
      setTimeout(removeClass, 14000);

      function setClass() {
        let drittertext = document.getElementById("drittertext");
        drittertext.textContent =
          "because without triggering positive emotions, a website does not remain in the memory of our users.";
        drittertext.classList.add("tracking-in-expand-fwd-top");
        drittertext.style.color = "white";
        let timer = 0;
        console.log("set");
        let presecondo = document.getElementById("preloader-third");
        presecondo.classList.add("flip-preloader");
        presecondo.classList.add("go");
      }
      function removeClass() {
        console.log("remove");
        let presecondo = document.getElementById("preloader-third");
        presecondo.classList.remove("flip-preloader");
        presecondo.classList.remove("go");
      }

      //startjongleur.appendChild(anschluss);
    } else {
    }
  }
  var interval = setInterval(updateImage, 60);
  updateImage();
}
function raumschiff() {
  const mediaQueryList = window.matchMedia("(orientation: portrait)");
  const raum = document.getElementById("raum");
  const ungeheuer = document.getElementById("ungeheuer");
  if (mediaQueryList.matches) {
    console.log("treffer versenkt portrait orientatition");
    //raum.style.width = 99 + "%";
    //raum.style.bottom = -3 + "%";
    //ungeheuer.style.width = 60 + "%";
    //ungeheuer.style.height = 50 + "%";
  } else {
    console.log("other orientation");
  }
}
raumschiff();

/////////////////////////////////////viewporting///////////////////////////////////////////////
(function () {
  "use strict";
  const nav = document.getElementById("navbar");
  const number1 = document.getElementById("halftop");
  const number2 = document.getElementById("startjong");
  const number3 = document.getElementById("startherz");
  const number4 = document.getElementById("startspringer");
  const start1 = document.getElementById("erstertext");
  const start2 = document.getElementById("zweitertext");
  const start3 = document.getElementById("drittertext");
  const start4 = document.getElementById("viertertext");
  const startTheBien = document.getElementById("root");
  const meeer = document.getElementById("meeer");
  const jongi = document.getElementById("overcome");
  const herz = document.getElementById("hard");
  const springer = document.getElementById("toping");
  
  var items = [
    start1,
    start2,
    start3,
    start4,
    startTheBien,
    herz,
    springer,
    jongi,
  ];
  var items2 = [meeer];

  var items3 = [number1, number2, number3, number4];

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  //////////////////////////////////textani/////////////////////////////////////////////////////////////////////////////////////////////
  function textani() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        if (items[i] === start1) {
          startTheBien.classList.add("slide-r");
        }
        if (items[i] === start2) {
          jongi.classList.add("slide-fwd");
          
        }
        if (items[i] === start3) {
          nav.style.backgroundColor = "rgb(195 57 2)";
          herz.classList.add("slide-r");
        }
        if (items[i] === start4) {
          nav.style.backgroundColor = "rgb(28 30 102)";
          springer.classList.add("slide-fwd");
        }
        if (i % 2 === 0) {
          items[i].classList.add("slide-fwd");
        } else {
          items[i].classList.add("slide-r");
        }
      }
    }
  }
  ////////////////////////////////textani2////////////////////////////////////////////////////////////////////////////////////////////////
  function textani2() {
    for (let i = 0; i < items2.length; i++) {
      if (isElementInViewport(items2[i])) {
        items2[i].classList.add("tracking-in-expand-fwd-top");
      }
    }
  }

  function startbuttonani() {
    for (let i = 0; i < items3.length; i++) {
      if (isElementInViewport(items3[i])) {
        items3[i].classList.add("slideandstinger");
      }
    }
  }

  ///////////////////////////////////startbien/////////////////////////////////////////////////////////
  const startbutton1 = document.getElementById("halftop");

  console.log("startbien");
  function aniBI() {
    var layers = 9;
    var start = 4;
    for (var i = 1; i <= layers; i++) {
      var n = i * start;
      for (var j = 0; j < n; j++) {
        addCircle(i, j / n);
      }
    }

    function addCircle(layer, fraction) {
      var bienen = document.getElementById("root");
      var element = document.createElement("img");

      element.src = "pictures/beifang/biene.png";

      if (window.innerWidth < 400) {
        element.style.width = 40 + "px";
        element.style.height = 40 + "px";
      }
      if (window.innerWidth > 400) {
        element.style.width = 45 + "px";
        element.style.height = 45 + "px";
      }
      if (window.innerWidth > 600) {
        element.style.width = 50 + "px";
        element.style.height = 50 + "px";
      }
      if (window.innerWidth > 1000) {
        element.style.width = 70 + "px";
        element.style.height = 70 + "px";
      }

      bienen.addEventListener("click", function () {
        element.classList.toggle("circle");
      });

      startbutton1.addEventListener("click", firstfunc);

      function firstfunc() {
        let pre = document.getElementById("preloader-first");
        pre.classList.add("flip-preloader");
        pre.classList.add("go");
        element.classList.toggle("circle");
        let erstertext = document.getElementById("erstertext");
        erstertext.innerHTML =
          "We try to save time and data volume in all areas. <br> It means keeping the ball low.";
        erstertext.classList.add("tracking-in-expand-fwd-top");
        erstertext.style.color = "white";
      }
      let helper;
      if (window.innerWidth > 1300) {
        helper = 38;
      } else helper = 28;
      console.log("helper", helper);
      let variant = window.innerWidth / helper;
      element.layer = i;
      element.fraction = j / n;
      var rotate = "rotate(" + 360 * element.fraction + "deg)";
      var translate = "translate(" + element.layer * variant + "px)";
      element.style.transform = rotate + " " + translate;
      element.style.positon = "absolute";
      element.animate(
        [
          { transform: rotate + " rotate(0deg) " + translate },
          { transform: rotate + " rotate(360deg) " + translate },
        ],
        {
          duration: 2100 * layer,
          iterations: 12000,
        }
      );
      bienen.appendChild(element);
    }
  }
  //aniBI();
  requestAnimationFrame(aniBI);

  window.addEventListener("load", textani);
  window.addEventListener("resize", textani);
  window.addEventListener("scroll", textani);
  window.addEventListener("load", textani2);
  window.addEventListener("resize", textani2);
  window.addEventListener("scroll", textani2);
  window.addEventListener("load", startbuttonani);
  window.addEventListener("resize", startbuttonani);
  window.addEventListener("scroll", startbuttonani);
})();

function preloadImages(e, t) {
  var n = 0,
    r = e.length;
  e.forEach(function (e) {
    !(function (e, t) {
      var n = new Image();
      (n.onload = t), (n.src = e);
    })(e, function () {
      n++, console.log("nummer des geladenen bildes " + n), n == r && t();
    });
  });
}
preloadImages(
  [
    "pictures/beifang/herz/herz1.jpg",
    "pictures/beifang/herz/herz2.jpg",
    "pictures/beifang/herz/herz3.jpg",
    "pictures/beifang/herz/herz4.jpg",
    "pictures/beifang/herz/herz5.jpg",
    "pictures/beifang/herz/herz6.jpg",
    "pictures/beifang/herz/herz7.jpg",
    "pictures/beifang/herz/herz8.jpg",
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
    "pictures/beifang/springer/springer1.jpg",
    "pictures/beifang/springer/springer2.jpg",
    "pictures/beifang/springer/springer3.jpg",
    "pictures/beifang/springer/springer4.jpg",
    "pictures/beifang/springer/springer5.jpg",
    "pictures/beifang/springer/springer6.jpg",
  ],
  function () {
    console.log("Alle bilder geladen nach: soll 14secs");
  }
),
  (window.onscroll = function () {
    myFunction();
  });
var navbar = document.getElementById("navbar"),
  sticky = navbar.offsetTop;
function myFunction() {
  window.pageYOffset >= sticky
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
}
let handfisch = document.querySelector("body > div.ende > footer");
handfisch.addEventListener("click", function () {
  document.getElementById("handfisch").classList.toggle("handfisch_top");
});
var startspringer = document.getElementById("startspringer");
function springani() {
  var e = 0,
    t = 0;
  function n() {
    console.log("start");
    var n = [
      "pictures/beifang/springer/springer1.jpg",
      "pictures/beifang/springer/springer2.jpg",
      "pictures/beifang/springer/springer3.jpg",
      "pictures/beifang/springer/springer4.jpg",
      "pictures/beifang/springer/springer5.jpg",
      "pictures/beifang/springer/springer6.jpg",
    ];
    e >= n.length - 1 && ((e = 0), t++), console.log("index", e), e++;
    let i = document.getElementById("springer");
    if (((i.src = n[e]), console.log(i.src), t >= 2)) {
      clearInterval(r),
        (i.src = "pictures/beifang/springer/springer1.jpg"),
        (function e() {
          let t = document.getElementById("viertertext");
          (t.textContent =
            "vierter ergänzender Text zur Komplexität der Dinge und soviel ist zu sagen das es gut ist ggggggggg gggggg gggggg ggggg uuuu uuuu uuuuu"),
            t.classList.add("tracking-in-expand-fwd-top"),
            (t.style.color = "white"),
            setTimeout(e, 2e3);
        })();
    }
  }
  var r = setInterval(n, 500);
  n();
}
startspringer.addEventListener("click", springani);
var startjongleur = document.getElementById("startjong");
function jongani() {
  var e = 0,
    t = 0;
  function n() {
    console.log("startjongens");
    var n = [
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
    let i = document.getElementById("jongleur");
    (i.style.backgroundImage = "url(/pictures/beifang/jongleur/gheber8.jpg)"),
      e >= n.length && ((e = 0), t++);
    let g = document.getElementById("overcome");
    if (
      ((i.style.backgroundImage =
        "url(/pictures/beifang/jongleur/gheber8.jpg)"),
      (g.src = n[e]),
      e++,
      t >= 1)
    ) {
      clearInterval(r), (g.src = "pictures/beifang/jongleur/gheber8.jpg");
      document.createElement("div");
      !(function () {
        console.log("set");
        let e = document.getElementById("preloader-second");
        e.classList.add("flip-preloader"), e.classList.add("go");
        let t = document.getElementById("zweitertext");
        (t.textContent = "..aber egal wie Sie Ihre App stemmen"),
          t.classList.add("tracking-in-expand-fwd-top"),
          (t.style.color = "white");
      })(),
        setTimeout(function () {
          console.log("remove");
          let e = document.getElementById("preloader-second");
          e.classList.remove("flip-preloader"), e.classList.remove("go");
        }, 14e3);
    }
  }
  var r = setInterval(n, 1e3);
  n();
}
startjongleur.addEventListener("click", jongani);
var startherz = document.getElementById("startherz");
function herzani() {
  var e = 0,
    t = 0;
  function n() {
    console.log("startherz");
    var n = [
      "pictures/beifang/herz/herz1.jpg",
      "pictures/beifang/herz/herz2.jpg",
      "pictures/beifang/herz/herz3.jpg",
      "pictures/beifang/herz/herz4.jpg",
      "pictures/beifang/herz/herz5.jpg",
      "pictures/beifang/herz/herz6.jpg",
      "pictures/beifang/herz/herz7.jpg",
      "pictures/beifang/herz/herz8.jpg",
    ];
    e >= n.length - 1 && ((e = 0), t++), console.log("index", e), e++;
    let i = document.getElementById("overherz");
    if (((i.src = n[e]), t >= 11)) {
      clearInterval(r), (i.src = "pictures/beifang/herz/herz1.jpg");
      document.createElement("div");
      !(function () {
        let e = document.getElementById("drittertext");
        (e.textContent = "zweiter ergänzender Text zur Komplexität der Dinge"),
          e.classList.add("tracking-in-expand-fwd-top"),
          (e.style.color = "white");
        console.log("set");
        let t = document.getElementById("preloader-third");
        t.classList.add("flip-preloader"), t.classList.add("go");
      })(),
        setTimeout(function () {
          console.log("remove");
          let e = document.getElementById("preloader-third");
          e.classList.remove("flip-preloader"), e.classList.remove("go");
        }, 14e3);
    }
  }
  var r = setInterval(n, 500);
  n();
}
function raumschiff() {
  const e = window.matchMedia("(orientation: portrait)"),
    t = document.getElementById("raum");
  document.getElementById("ungeheuer");
  e.matches
    ? (console.log("treffer versenkt portrait orientatition"),
      (t.style.width = "99%"),
      (t.style.bottom = "-3%"))
    : console.log("other orientation");
}
startherz.addEventListener("click", herzani),
  raumschiff(),
  (function () {
    "use strict";
    const e = document.getElementById("navbar"),
      t = document.getElementById("halftop"),
      n = document.getElementById("startjong"),
      r = document.getElementById("startherz"),
      i = document.getElementById("startspringer"),
      g = document.getElementById("erstertext"),
      s = document.getElementById("zweitertext"),
      o = document.getElementById("drittertext"),
      a = document.getElementById("viertertext"),
      l = document.getElementById("root"),
      c = document.getElementById("meeer"),
      d = document.getElementById("overcome"),
      u = document.getElementById("hard"),
      p = document.getElementById("toping");
    var f = [g, s, o, a, l, u, p, d],
      m = [c],
      h = [t, n, r, i];
    function j(e) {
      var t = e.getBoundingClientRect();
      return (
        t.top >= 0 &&
        t.left >= 0 &&
        t.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        t.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    function b() {
      for (var t = 0; t < f.length; t++)
        j(f[t]) &&
          (f[t] === g && l.classList.add("slide-r"),
          f[t] === s && d.classList.add("slide-fwd"),
          f[t] === o &&
            ((e.style.backgroundColor = "rgb(195 57 2)"),
            u.classList.add("slide-r")),
          f[t] === a &&
            ((e.style.backgroundColor = "rgb(28 30 102)"),
            p.classList.add("slide-fwd")),
          t % 2 == 0
            ? f[t].classList.add("slide-fwd")
            : f[t].classList.add("slide-r"));
    }
    function v() {
      for (let e = 0; e < m.length; e++)
        j(m[e]) && m[e].classList.add("tracking-in-expand-fwd-top");
    }
    function y() {
      for (let e = 0; e < h.length; e++)
        j(h[e]) && h[e].classList.add("slideandstinger");
    }
    const w = document.getElementById("halftop");
    console.log("startbien"),
      requestAnimationFrame(function () {
        for (var e = 1; e <= 9; e++)
          for (var t = 4 * e, n = 0; n < t; n++) r(e);
        function r(r, i) {
          var g = document.getElementById("root"),
            s = document.createElement("img");
          let o;
          (s.src = "pictures/beifang/biene.png"),
            window.innerWidth < 400 &&
              ((s.style.width = "40px"), (s.style.height = "40px")),
            window.innerWidth > 400 &&
              ((s.style.width = "45px"), (s.style.height = "45px")),
            window.innerWidth > 600 &&
              ((s.style.width = "50px"), (s.style.height = "50px")),
            window.innerWidth > 1e3 &&
              ((s.style.width = "70px"), (s.style.height = "70px")),
            g.addEventListener("click", function () {
              s.classList.toggle("circle");
            }),
            w.addEventListener("click", function () {
              let e = document.getElementById("preloader-first");
              e.classList.add("flip-preloader"),
                e.classList.add("go"),
                s.classList.toggle("circle");
              let t = document.getElementById("erstertext");
              (t.textContent =
                "dabei versuchen wir in allen Bereichen Zeit und Datenvolumen zu sparen"),
                t.classList.add("tracking-in-expand-fwd-top"),
                (t.style.color = "white");
            }),
            (o = window.innerWidth > 1300 ? 38 : 28),
            console.log("helper", o);
          let a = window.innerWidth / o;
          (s.layer = e), (s.fraction = n / t);
          var l = "rotate(" + 360 * s.fraction + "deg)",
            c = "translate(" + s.layer * a + "px)";
          (s.style.transform = l + " " + c),
            (s.style.positon = "absolute"),
            s.animate(
              [
                { transform: l + " rotate(0deg) " + c },
                { transform: l + " rotate(360deg) " + c },
              ],
              { duration: 2100 * r, iterations: 12e3 }
            ),
            g.appendChild(s);
        }
      }),
      window.addEventListener("load", b),
      window.addEventListener("resize", b),
      window.addEventListener("scroll", b),
      window.addEventListener("load", v),
      window.addEventListener("resize", v),
      window.addEventListener("scroll", v),
      window.addEventListener("load", y),
      window.addEventListener("resize", y),
      window.addEventListener("scroll", y);
  })();

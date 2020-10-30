//variables (there are a lot)
var button1 = document.getElementById("buttonOne");
var button2 = document.getElementById("buttonTwo");
var button3 = document.getElementById("buttonThree");
var button4 = document.getElementById("buttonFour");
var button5 = document.getElementById("buttonFive");
var button6 = document.getElementById("buttonSix");
var button7 = document.getElementById("buttonSeven");
var button8 = document.getElementById("buttonEight");
var button9 = document.getElementById("buttonNine");

//x and o variables
var x1 = document.getElementById("X");
var x2 = document.getElementById("X2");
var x3 = document.getElementById("X3");
var x4 = document.getElementById("X4");
var x5 = document.getElementById("X5");
var x6 = document.getElementById("X6");
var x7 = document.getElementById("X7");
var x8 = document.getElementById("X8");
var x9 = document.getElementById("X9");
var o1 = document.getElementById("O");
var o2 = document.getElementById("O2");
var o3 = document.getElementById("O3");
var o4 = document.getElementById("O4");
var o5 = document.getElementById("O5");
var o6 = document.getElementById("O6");
var o7 = document.getElementById("O7");
var o8 = document.getElementById("O8");
var o9 = document.getElementById("O9");

//vues, enough for 9 boxes these dictate which svg gets filled  and with what
new Vue ({
  el: '#spot1',
  data( ){
    return {
      hover: false,
      q:'hi',
    };
  },

  methods: {
    pressedQ: function() {
        x1.innerHTML = '<defs><style>.cls-1,.cls-2{fill:none;stroke-miterlimit:10;stroke-width:5px;}.cls-1{stroke:url(#Orange_Yellow);}.cls-2{stroke:url(#Orange_Yellow-2);}</style><linearGradient id="Orange_Yellow" x1="0.65" y1="51.55" x2="102.03" y2="51.55" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff33b"/><stop offset="0.04" stop-color="#fee72e"/><stop offset="0.12" stop-color="#fed51b"/><stop offset="0.2" stop-color="#fdca10"/><stop offset="0.28" stop-color="#fdc70c"/><stop offset="0.67" stop-color="#f3903f"/><stop offset="0.89" stop-color="#ed683c"/><stop offset="1" stop-color="#e93e3a"/></linearGradient><linearGradient id="Orange_Yellow-2" x1="0" y1="51.23" x2="102.46" y2="51.23" xlink:href="#Orange_Yellow"/></defs><line class="cls-1" x1="2.42" y1="2.63" x2="100.26" y2="100.48"/><line class="cls-2" x1="1.77" y1="100.69" x2="100.69" y2="1.77"/>'
    },
    pressedE: function() {
        o1.innerHTML = '<defs><style>.cls-1{fill:#fff;stroke-miterlimit:10;stroke-width:11px;stroke:url(#Orange_Yellow);}</style><linearGradient id="Orange_Yellow" y1="45.5" x2="91" y2="45.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff33b"/><stop offset="0.04" stop-color="#fee72e"/><stop offset="0.12" stop-color="#fed51b"/><stop offset="0.2" stop-color="#fdca10"/><stop offset="0.28" stop-color="#fdc70c"/><stop offset="0.67" stop-color="#f3903f"/><stop offset="0.89" stop-color="#ed683c"/><stop offset="1" stop-color="#e93e3a"/></linearGradient></defs><circle class="cls-1" cx="45.5" cy="45.5" r="40"/>'
    }
  }
})
new Vue ({
  el: '#spot2',
  methods: {
    pressedQ: function() {
        x2.innerHTML = '<defs><style>.cls-1,.cls-2{fill:none;stroke-miterlimit:10;stroke-width:5px;}.cls-1{stroke:url(#Orange_Yellow);}.cls-2{stroke:url(#Orange_Yellow-2);}</style><linearGradient id="Orange_Yellow" x1="0.65" y1="51.55" x2="102.03" y2="51.55" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff33b"/><stop offset="0.04" stop-color="#fee72e"/><stop offset="0.12" stop-color="#fed51b"/><stop offset="0.2" stop-color="#fdca10"/><stop offset="0.28" stop-color="#fdc70c"/><stop offset="0.67" stop-color="#f3903f"/><stop offset="0.89" stop-color="#ed683c"/><stop offset="1" stop-color="#e93e3a"/></linearGradient><linearGradient id="Orange_Yellow-2" x1="0" y1="51.23" x2="102.46" y2="51.23" xlink:href="#Orange_Yellow"/></defs><line class="cls-1" x1="2.42" y1="2.63" x2="100.26" y2="100.48"/><line class="cls-2" x1="1.77" y1="100.69" x2="100.69" y2="1.77"/>'
    },
    pressedE: function() {
        o2.innerHTML = '<defs><style>.cls-1{fill:#fff;stroke-miterlimit:10;stroke-width:11px;stroke:url(#Orange_Yellow);}</style><linearGradient id="Orange_Yellow" y1="45.5" x2="91" y2="45.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff33b"/><stop offset="0.04" stop-color="#fee72e"/><stop offset="0.12" stop-color="#fed51b"/><stop offset="0.2" stop-color="#fdca10"/><stop offset="0.28" stop-color="#fdc70c"/><stop offset="0.67" stop-color="#f3903f"/><stop offset="0.89" stop-color="#ed683c"/><stop offset="1" stop-color="#e93e3a"/></linearGradient></defs><circle class="cls-1" cx="45.5" cy="45.5" r="40"/>'
    }
  }
})
new Vue ({
  el: '#spot3',

  methods: {
    pressedQ: function() {
        x3.innerHTML = '<defs><style>.cls-1,.cls-2{fill:none;stroke-miterlimit:10;stroke-width:5px;}.cls-1{stroke:url(#Orange_Yellow);}.cls-2{stroke:url(#Orange_Yellow-2);}</style><linearGradient id="Orange_Yellow" x1="0.65" y1="51.55" x2="102.03" y2="51.55" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff33b"/><stop offset="0.04" stop-color="#fee72e"/><stop offset="0.12" stop-color="#fed51b"/><stop offset="0.2" stop-color="#fdca10"/><stop offset="0.28" stop-color="#fdc70c"/><stop offset="0.67" stop-color="#f3903f"/><stop offset="0.89" stop-color="#ed683c"/><stop offset="1" stop-color="#e93e3a"/></linearGradient><linearGradient id="Orange_Yellow-2" x1="0" y1="51.23" x2="102.46" y2="51.23" xlink:href="#Orange_Yellow"/></defs><line class="cls-1" x1="2.42" y1="2.63" x2="100.26" y2="100.48"/><line class="cls-2" x1="1.77" y1="100.69" x2="100.69" y2="1.77"/>'
    },
    pressedE: function() {
        o3.innerHTML = '<defs><style>.cls-1{fill:#fff;stroke-miterlimit:10;stroke-width:11px;stroke:url(#Orange_Yellow);}</style><linearGradient id="Orange_Yellow" y1="45.5" x2="91" y2="45.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff33b"/><stop offset="0.04" stop-color="#fee72e"/><stop offset="0.12" stop-color="#fed51b"/><stop offset="0.2" stop-color="#fdca10"/><stop offset="0.28" stop-color="#fdc70c"/><stop offset="0.67" stop-color="#f3903f"/><stop offset="0.89" stop-color="#ed683c"/><stop offset="1" stop-color="#e93e3a"/></linearGradient></defs><circle class="cls-1" cx="45.5" cy="45.5" r="40"/>'
    }
  }
})
new Vue ({
  el: '#spot4',

  methods: {
    pressedQ: function() {
        x4.innerHTML = '<defs><style>.cls-1,.cls-2{fill:none;stroke-miterlimit:10;stroke-width:5px;}.cls-1{stroke:url(#Orange_Yellow);}.cls-2{stroke:url(#Orange_Yellow-2);}</style><linearGradient id="Orange_Yellow" x1="0.65" y1="51.55" x2="102.03" y2="51.55" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff33b"/><stop offset="0.04" stop-color="#fee72e"/><stop offset="0.12" stop-color="#fed51b"/><stop offset="0.2" stop-color="#fdca10"/><stop offset="0.28" stop-color="#fdc70c"/><stop offset="0.67" stop-color="#f3903f"/><stop offset="0.89" stop-color="#ed683c"/><stop offset="1" stop-color="#e93e3a"/></linearGradient><linearGradient id="Orange_Yellow-2" x1="0" y1="51.23" x2="102.46" y2="51.23" xlink:href="#Orange_Yellow"/></defs><line class="cls-1" x1="2.42" y1="2.63" x2="100.26" y2="100.48"/><line class="cls-2" x1="1.77" y1="100.69" x2="100.69" y2="1.77"/>'
    },
    pressedE: function() {
        o4.innerHTML = '<defs><style>.cls-1{fill:#fff;stroke-miterlimit:10;stroke-width:11px;stroke:url(#Orange_Yellow);}</style><linearGradient id="Orange_Yellow" y1="45.5" x2="91" y2="45.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff33b"/><stop offset="0.04" stop-color="#fee72e"/><stop offset="0.12" stop-color="#fed51b"/><stop offset="0.2" stop-color="#fdca10"/><stop offset="0.28" stop-color="#fdc70c"/><stop offset="0.67" stop-color="#f3903f"/><stop offset="0.89" stop-color="#ed683c"/><stop offset="1" stop-color="#e93e3a"/></linearGradient></defs><circle class="cls-1" cx="45.5" cy="45.5" r="40"/>'
    }
  }
})
new Vue ({
  el: '#spot5',

  methods: {
    pressedQ: function() {
        x5.innerHTML = '<defs><style>.cls-1,.cls-2{fill:none;stroke-miterlimit:10;stroke-width:5px;}.cls-1{stroke:url(#Orange_Yellow);}.cls-2{stroke:url(#Orange_Yellow-2);}</style><linearGradient id="Orange_Yellow" x1="0.65" y1="51.55" x2="102.03" y2="51.55" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff33b"/><stop offset="0.04" stop-color="#fee72e"/><stop offset="0.12" stop-color="#fed51b"/><stop offset="0.2" stop-color="#fdca10"/><stop offset="0.28" stop-color="#fdc70c"/><stop offset="0.67" stop-color="#f3903f"/><stop offset="0.89" stop-color="#ed683c"/><stop offset="1" stop-color="#e93e3a"/></linearGradient><linearGradient id="Orange_Yellow-2" x1="0" y1="51.23" x2="102.46" y2="51.23" xlink:href="#Orange_Yellow"/></defs><line class="cls-1" x1="2.42" y1="2.63" x2="100.26" y2="100.48"/><line class="cls-2" x1="1.77" y1="100.69" x2="100.69" y2="1.77"/>'
    },
    pressedE: function() {
        o5.innerHTML = '<defs><style>.cls-1{fill:#fff;stroke-miterlimit:10;stroke-width:11px;stroke:url(#Orange_Yellow);}</style><linearGradient id="Orange_Yellow" y1="45.5" x2="91" y2="45.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff33b"/><stop offset="0.04" stop-color="#fee72e"/><stop offset="0.12" stop-color="#fed51b"/><stop offset="0.2" stop-color="#fdca10"/><stop offset="0.28" stop-color="#fdc70c"/><stop offset="0.67" stop-color="#f3903f"/><stop offset="0.89" stop-color="#ed683c"/><stop offset="1" stop-color="#e93e3a"/></linearGradient></defs><circle class="cls-1" cx="45.5" cy="45.5" r="40"/>'
    }
  }
})
new Vue ({
  el: '#spot6',

  methods: {
    pressedQ: function() {
        x6.innerHTML = '<defs><style>.cls-1,.cls-2{fill:none;stroke-miterlimit:10;stroke-width:5px;}.cls-1{stroke:url(#Orange_Yellow);}.cls-2{stroke:url(#Orange_Yellow-2);}</style><linearGradient id="Orange_Yellow" x1="0.65" y1="51.55" x2="102.03" y2="51.55" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff33b"/><stop offset="0.04" stop-color="#fee72e"/><stop offset="0.12" stop-color="#fed51b"/><stop offset="0.2" stop-color="#fdca10"/><stop offset="0.28" stop-color="#fdc70c"/><stop offset="0.67" stop-color="#f3903f"/><stop offset="0.89" stop-color="#ed683c"/><stop offset="1" stop-color="#e93e3a"/></linearGradient><linearGradient id="Orange_Yellow-2" x1="0" y1="51.23" x2="102.46" y2="51.23" xlink:href="#Orange_Yellow"/></defs><line class="cls-1" x1="2.42" y1="2.63" x2="100.26" y2="100.48"/><line class="cls-2" x1="1.77" y1="100.69" x2="100.69" y2="1.77"/>'
    },
    pressedE: function() {
        o6.innerHTML = '<defs><style>.cls-1{fill:#fff;stroke-miterlimit:10;stroke-width:11px;stroke:url(#Orange_Yellow);}</style><linearGradient id="Orange_Yellow" y1="45.5" x2="91" y2="45.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff33b"/><stop offset="0.04" stop-color="#fee72e"/><stop offset="0.12" stop-color="#fed51b"/><stop offset="0.2" stop-color="#fdca10"/><stop offset="0.28" stop-color="#fdc70c"/><stop offset="0.67" stop-color="#f3903f"/><stop offset="0.89" stop-color="#ed683c"/><stop offset="1" stop-color="#e93e3a"/></linearGradient></defs><circle class="cls-1" cx="45.5" cy="45.5" r="40"/>'
    }
  }
})
new Vue ({
  el: '#spot7',

  methods: {
    pressedQ: function() {
        x7.innerHTML = '<defs><style>.cls-1,.cls-2{fill:none;stroke-miterlimit:10;stroke-width:5px;}.cls-1{stroke:url(#Orange_Yellow);}.cls-2{stroke:url(#Orange_Yellow-2);}</style><linearGradient id="Orange_Yellow" x1="0.65" y1="51.55" x2="102.03" y2="51.55" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff33b"/><stop offset="0.04" stop-color="#fee72e"/><stop offset="0.12" stop-color="#fed51b"/><stop offset="0.2" stop-color="#fdca10"/><stop offset="0.28" stop-color="#fdc70c"/><stop offset="0.67" stop-color="#f3903f"/><stop offset="0.89" stop-color="#ed683c"/><stop offset="1" stop-color="#e93e3a"/></linearGradient><linearGradient id="Orange_Yellow-2" x1="0" y1="51.23" x2="102.46" y2="51.23" xlink:href="#Orange_Yellow"/></defs><line class="cls-1" x1="2.42" y1="2.63" x2="100.26" y2="100.48"/><line class="cls-2" x1="1.77" y1="100.69" x2="100.69" y2="1.77"/>'
    },
    pressedE: function() {
        o7.innerHTML = '<defs><style>.cls-1{fill:#fff;stroke-miterlimit:10;stroke-width:11px;stroke:url(#Orange_Yellow);}</style><linearGradient id="Orange_Yellow" y1="45.5" x2="91" y2="45.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff33b"/><stop offset="0.04" stop-color="#fee72e"/><stop offset="0.12" stop-color="#fed51b"/><stop offset="0.2" stop-color="#fdca10"/><stop offset="0.28" stop-color="#fdc70c"/><stop offset="0.67" stop-color="#f3903f"/><stop offset="0.89" stop-color="#ed683c"/><stop offset="1" stop-color="#e93e3a"/></linearGradient></defs><circle class="cls-1" cx="45.5" cy="45.5" r="40"/>'
    }
  }
})
new Vue ({
  el: '#spot8',

  methods: {
    pressedQ: function() {
        x8.innerHTML = '<defs><style>.cls-1,.cls-2{fill:none;stroke-miterlimit:10;stroke-width:5px;}.cls-1{stroke:url(#Orange_Yellow);}.cls-2{stroke:url(#Orange_Yellow-2);}</style><linearGradient id="Orange_Yellow" x1="0.65" y1="51.55" x2="102.03" y2="51.55" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff33b"/><stop offset="0.04" stop-color="#fee72e"/><stop offset="0.12" stop-color="#fed51b"/><stop offset="0.2" stop-color="#fdca10"/><stop offset="0.28" stop-color="#fdc70c"/><stop offset="0.67" stop-color="#f3903f"/><stop offset="0.89" stop-color="#ed683c"/><stop offset="1" stop-color="#e93e3a"/></linearGradient><linearGradient id="Orange_Yellow-2" x1="0" y1="51.23" x2="102.46" y2="51.23" xlink:href="#Orange_Yellow"/></defs><line class="cls-1" x1="2.42" y1="2.63" x2="100.26" y2="100.48"/><line class="cls-2" x1="1.77" y1="100.69" x2="100.69" y2="1.77"/>'
    },
    pressedE: function() {
        o8.innerHTML = '<defs><style>.cls-1{fill:#fff;stroke-miterlimit:10;stroke-width:11px;stroke:url(#Orange_Yellow);}</style><linearGradient id="Orange_Yellow" y1="45.5" x2="91" y2="45.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff33b"/><stop offset="0.04" stop-color="#fee72e"/><stop offset="0.12" stop-color="#fed51b"/><stop offset="0.2" stop-color="#fdca10"/><stop offset="0.28" stop-color="#fdc70c"/><stop offset="0.67" stop-color="#f3903f"/><stop offset="0.89" stop-color="#ed683c"/><stop offset="1" stop-color="#e93e3a"/></linearGradient></defs><circle class="cls-1" cx="45.5" cy="45.5" r="40"/>'
    }
  }
})
new Vue ({
  el: '#spot9',

  methods: {
    pressedQ: function() {
        x9.innerHTML = '<defs><style>.cls-1,.cls-2{fill:none;stroke-miterlimit:10;stroke-width:5px;}.cls-1{stroke:url(#Orange_Yellow);}.cls-2{stroke:url(#Orange_Yellow-2);}</style><linearGradient id="Orange_Yellow" x1="0.65" y1="51.55" x2="102.03" y2="51.55" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff33b"/><stop offset="0.04" stop-color="#fee72e"/><stop offset="0.12" stop-color="#fed51b"/><stop offset="0.2" stop-color="#fdca10"/><stop offset="0.28" stop-color="#fdc70c"/><stop offset="0.67" stop-color="#f3903f"/><stop offset="0.89" stop-color="#ed683c"/><stop offset="1" stop-color="#e93e3a"/></linearGradient><linearGradient id="Orange_Yellow-2" x1="0" y1="51.23" x2="102.46" y2="51.23" xlink:href="#Orange_Yellow"/></defs><line class="cls-1" x1="2.42" y1="2.63" x2="100.26" y2="100.48"/><line class="cls-2" x1="1.77" y1="100.69" x2="100.69" y2="1.77"/>'
    },
    pressedE: function() {
        o9.innerHTML = '<defs><style>.cls-1{fill:#fff;stroke-miterlimit:10;stroke-width:11px;stroke:url(#Orange_Yellow);}</style><linearGradient id="Orange_Yellow" y1="45.5" x2="91" y2="45.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff33b"/><stop offset="0.04" stop-color="#fee72e"/><stop offset="0.12" stop-color="#fed51b"/><stop offset="0.2" stop-color="#fdca10"/><stop offset="0.28" stop-color="#fdc70c"/><stop offset="0.67" stop-color="#f3903f"/><stop offset="0.89" stop-color="#ed683c"/><stop offset="1" stop-color="#e93e3a"/></linearGradient></defs><circle class="cls-1" cx="45.5" cy="45.5" r="40"/>'
    }
  }
})
//This is code so the buttons appear when you hover over them (randomly stopped working :(   )
button1.onmouseover = function(){
TweenLite.to(button1, .2, {css:{opacity:.5}});
}

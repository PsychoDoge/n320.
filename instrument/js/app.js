

//setup (i always make this even if it does not matter)
/*function setup(){
  createCanvas(500,500);
}*/

//initial class


class Instrument{
constructor(family, verb, loudness){
  this.family = family;
  this.verb = verb;
  this.loudness = loudness;
  }
  //code to play the istrument
  playMusic(){
    console.log(this.family + "are" + this.verb + this.loudness);
  }
}
//testing code
//let player = new Instrument('drums', 'played', 'very loud');
//player.playMusic()

class Percussion extends Instrument {
  constructor(family,verb) {
      super(family, verb, 'very loudly');
  }
}
let percussion = new Percussion ('The drums ',' hit ',)
percussion.playMusic();


class Woodpipe extends Instrument {
  constructor(family,verb) {
      super(family, verb, 'very softly');
  }
}
  let woodpipe = new Woodpipe ('The flutes ',' blowen ',)
  woodpipe.playMusic();

  class Strings extends Instrument {
    constructor(family,verb) {
        super(family, verb, 'extremly loudly ');
    }
}
    let strings = new Strings ('the guitars ',' strumed ',)
    strings.playMusic();
//draw function (i always make this even if it does not matter)
/*function draw(){
  background(60);
}*/

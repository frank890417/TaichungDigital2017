var dsNum = 17;
var danNum = 3;
var dan = [];
var infoON = true;
var wind;
var wind_var;
var wind_factor = 0.85;
var wind_vec;
var float_vec;
var timer = {init:
0, gotPost:
0, wind:
0};
var timer_limit = 5*60*1000; // 5 minutes interval
var posts_valid = [];
var query = ["高美濕地", "逢甲夜市", "東海大學", "夜景", ""];
var queryIdx = 0;
var queryLimit = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  timer.init = millis();
  wind = createVector(0, 0, 0);
  wind_var = createVector(0.1, 0, 0);
  wind_vec = createVector(0, 0, 0);
  float_vec = createVector(0, -0.1, 0);

  loadWind();
  loadPost();

  //textFont("Arial");
  textFont("Noto Sans CJK TC Thin");
  textSize(24);
  textAlign(CENTER);
}

function draw() {
  background(0);
  if (checkTimer('wind')) {
    loadWind();
    resetTimer('wind');
  }
  wind_update();
  
  // Keys to control wind factor
  if (keyIsDown(RIGHT_ARROW)) {
    wind_factor += 0.05;
  }
  if (keyIsDown(LEFT_ARROW)) {
    wind_factor -= 0.05;
  }
  wind_factor = constrain(wind_factor, -1.0, 2.0);

  // Update and display dandelion objects
  if (dan.length > 0) {
    for (var i=0; i < dan.length; i++) {
      dan[i].update();
      dan[i].display();
    }
  }

  // Info panel
  infoPanel();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function checkTimer(_key) {
  return (millis()-timer[_key] >= timer_limit)? true : false;
}

function resetTimer(_key) {
  timer[_key] = millis();
}

function loadPost() {
  var url;
  if (query[queryIdx].length > 0) {
    url = 'http://designav.io/api/image/search/'+query[queryIdx]+'?limit='+queryLimit;
  } else {
    url = 'http://designav.io/api/image?limit='+queryLimit;
  }
  loadJSON(url, gotPost);
}

function loadWind() {
  var url ='https://query.yahooapis.com/v1/public/yql?q=select%20wind%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22taichung%2C%20tw%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
  loadJSON(url, gotWeather);
}

function wind_update() {
  wind_vec.set(0, 0, 0);
  wind_vec.add(wind);
  wind_vec.rotate(PI);
  //wind_vec.add(wind_var);
  //wind_vec.add(float_vec);
  wind_vec.mult(wind_factor);
}

function gotWeather(weather) {
  var yahoo = true;
  if (yahoo) {
    var angle = radians(Number(weather.query.results.channel.wind.direction));
    var windmag = Number(weather.query.results.channel.wind.speed);
  } else {
    // Get the angle (convert to radians)
    var angle = radians(Number(weather.current.wind_degree));
    // Get the wind speed
    var windmag = Number(weather.current.wind_mph);
  }
  // Make a vector
  wind = p5.Vector.fromAngle(angle);
  wind.setMag(windmag);
}

function gotPost(data) {
  if (data && data.length > 0) {
    posts_valid = [];
    for (var i = 0; i < data.length; i++) {
      var content = data[i].content;
      content.trim();
      var hashes = content.match(/#/g);
      var texts = content.split(" ");
      var hash_count = 0;
      var texts_tmp = [];
      for (var j = 0; j < texts.length; j++) {
        texts[j].trim();
        if (texts[j].startsWith("#")) {
          hash_count++;
        } else {
          append(texts_tmp, texts[j]);
        }
      }
      if (!hashes || hashes.length < 10) append(posts_valid, content);
    }
    if (posts_valid.length > 0) {
      // reset timer
      timer.gotPost = millis();
      regenDandelion();
    }
  }
}

function updateDandelion() {
  for (var i=0; i<dan.length; i++) {
    dan[i].x = width*(i+1)/(dan.length+1);
    dan[i].y = height/2;
    dan[i].l = width*random(0.075, 0.1);
  }
}

function regenDandelion() {
  dan = [];
  if (posts_valid.length > 0) {
    for (var i=0; i<danNum; i++) {
      var hasCaption = false;
      while (!hasCaption) {
        var k = round(random(posts_valid.length));
        if (posts_valid[k] && posts_valid[k].length > 10) hasCaption = true;
      }
      dan[i] = new Dandelion(width*(i+1)/(danNum+1), height/2, width*0.1*sin(PI*(i+1)/(danNum+1)), posts_valid[k]);
    }
  }
}

function Dandelion(_x, _y, _l, _str) {
  this.x = _x;
  this.y = _y;
  this.l = _l;
  this.str = _str;
  this.len = min(this.str.length, 60);
  this.ds = [];
  this.detachIdx = 0;

  for (var i=0; i<this.len; i++) {
    if (this.str.charAt(i) != " ")
      var aa = random(TWO_PI);
    var xx = 20*cos(aa+HALF_PI), yy = 20*sin(aa+HALF_PI);
    this.ds.push(new DandelionSeed(xx, yy, this.l, aa, this.str.charAt(i)));
  }

  this.setStr = function(_str) {
    this.str = _str;
  }

  this.dsDetach = function() {
    if (this.detachIdx < this.len) {
      this.ds[this.detachIdx].setFree();
      this.detachIdx++;
      if (this.detachIdx >= this.len) detachIdx = this.len-1;
    }
  }

  this.update = function() {
  }

  this.display = function() {
    push();
    stroke(200);
    strokeWeight(5);
    line(this.x, height, this.x, this.y);
    translate(this.x, this.y);
    fill(0);
    stroke(255);
    strokeWeight(2);
    ellipse(0, 0, 40, 40);
    for (var i=0; i<this.ds.length; i++) {
      this.ds[i].update();
      this.ds[i].display();
    }
    pop();
  }
}

function DandelionSeed(_x, _y, _l, _ang, _w) {
  this.x = _x;
  this.y = _y;
  this.l = _l;
  this.ang = _ang-HALF_PI;
  this.ang_tmp = this.ang;
  this.ang_r = random(-0.1, 0.1);
  this.ang_counter = 0;
  this.w = _w;
  this.stiff = 10.0;
  this.ex, this.ey;
  this.fs = 24; // font size
  this.vec = createVector(0, 0, 0);
  this.detached = false;

  this.setAng = function(_ang) {
    this.ang = _ang;
  }

  this.applyForce = function(f) {
  }

  this.setFree = function() {
    this.detached = true;
  }

  this.update = function() {
    if (this.detached) {
      this.x += wind_vec.x;
      this.y += wind_vec.y;
      this.ang -= (this.ang-HALF_PI) * 0.005;
    }
    this.ang_counter++;
    if (this.ang_counter>=360) this.ang_counter=0;
    this.ang_tmp = this.ang+this.ang_r*sin(radians(this.ang_counter))+PI;
    this.ex = this.l*cos(this.ang_tmp);
    this.ey = this.l*sin(this.ang_tmp);
    this.vec.set(this.ex, this.ey, 0);
    //this.vec.add(wind_vec);
    this.ex = this.vec.x;
    this.ey = this.vec.y;
    // set font size
    this.fs = round(this.l*0.4);
  }

  this.display = function() {
    textAlign(CENTER);
    textSize(this.fs);
    stroke(255);
    fill(255);
    strokeWeight(1);
    push();
    translate(this.x, this.y);
    line(0, 0, this.ex, this.ey);
    noStroke();
    push();
    translate(this.ex, this.ey);
    rotate(this.ang_tmp+HALF_PI);
    text(this.w, 0, 6);
    pop();
    pop();
  }
}

function keyTyped() {
  if (key === " ") {
    for (var i=0; i<danNum; i++) {
      dan[i].dsDetach();
    }
  }
  if (key === "r") {
    regenDandelion();
  }
  if (key === "i") {
    infoON = !infoON;
  }
  return false;
}

function keyPressed() {
  var idx = queryIdx;
  if (keyCode == UP_ARROW) {
    queryIdx--;
  }
  if (keyCode == DOWN_ARROW) {
    queryIdx++;
  }
  queryIdx = constrain(queryIdx, 0, query.length-1);
  if (idx != queryIdx) loadPost();
}

function infoPanel() {
    if (infoON) {
    infoY=1;
    fill(180);
    textAlign(LEFT);
    textSize(12);
    text("[SPACE] 釋放種子，[左/右] 風力強度, [上/下] 搜尋類別, [R] 產生新字雲", 10, (infoY++)*20);
    text("主題: "+query[queryIdx], 10, (infoY++)*20);
    //text("FPS: "+round(frameRate()), 10, (infoY++)*20);
    if (wind) text("風向: ("+nf(wind.x,0,2)+","+nf(wind.y,0,2)+")", 10, (infoY++)*20);
    text("強度: "+nf(wind_factor,0,2), 10, (infoY++)*20);
    if (posts_valid.length > 0) text("取自 "+posts_valid.length+" 篇貼文", 10, (infoY++)*20);
  }
}
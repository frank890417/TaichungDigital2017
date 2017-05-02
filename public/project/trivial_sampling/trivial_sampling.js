//***************************************
// Trivial Sampling
// An experimental artwork for a Digital Curatorial Practice,
// by the Digital Cultrure Initiative, Taichung.
//***************************************
// Version: Beta 1
//    Date: May 1, 2017
//  Author: June-Hao Hou (assisted by Che-Yu Wu)
// Contact: junehao@gmail.com
//
var ratioX, radioY;
var marginX, marginY;
var url;
var cur_district = -1;
var div = [];
var msg = "";
var renewing = false;
var timer;
var timer_period = [60000, 5000];
var mode = 1; // 0: city mode, 1: district mode
var cat = 0; // Category #
var limit = [100, 10]; // search limit
var debug = false;
var first_run = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Arial");
  textSize(14);
  background(0);
  for (var i=0; i < districts.length; i++) {    
    //var temp = createDiv("&nbsp;"+districts[i].name);
    temp = createDiv("");
    temp.style("background-position", "center");
    temp.style("background-color", "#333");
    temp.addClass("district-name");
    div[i] = temp;
  }
  updateDistrictFrames();
  timer = millis();
}

function draw() {
  background(0);
  // If first_run, do it immediately, otherwise wait for the timer.
  if (first_run || millis()-timer>=timer_period[mode]) {
    first_run = false;
    // If loadJSON is not working, renew the corresponding contents.
    if (!renewing) {
      if (mode == 0) { // city mode
        renewing = true;
        renewCityImage();
      } else { // district mode
        renewing = true;
        cur_district++;
        if (cur_district >= districts.length) cur_district = 0;
        renewDistrictImage();
      }
    }
  }

  progressBar(millis()-timer, timer_period[mode]);

  if (debug) {
    fill(80);
    noStroke();
    var txt = categories[cat]+'@';
    if (mode==0) {
      txt += "台中";
    } else {
      txt += districts[cur_district].name;
    }
    text(txt, 10, 20);
    text(msg, 10, 40);
    //text(round((millis()-timer)/100.0)/10, 10, 60);
  }
}

//***************************************
// Draw a progress bar on the top of the window
//
function progressBar(val, range) {
  noStroke();
  fill(255, 100);
  rect(0, 0, width*val/range, 2);
}

//***************************************
// Update the position and size of dirstrict frames
//
function updateDistrictFrames() {
  marginX = width*0.05;
  ratioX = (width-marginX*2)/districtW;
  marginY = max(marginX, (windowHeight-districtH*ratioX)/2);
  for (var i=0; i < districts.length; i++) {
    var d = districts[i];
    div[i].position(d.x*ratioX+marginX, d.y*ratioX+marginY);
    div[i].size(d.w*ratioX, d.h*ratioX);
    if (d.w > d.h) { // landscape
      //  div[i].style("background-size", (d.w)+"px auto");
    } else if (d.w <= d.h) {
      //  div[i].style("background-size", "auto "+(d.h)+"px");
    }
  }
}

//***************************************
// When browser windows is resized, update corresponding variables and contents.
//
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateDistrictFrames();
}

//***************************************
// Keyboard commands
//
function keyTyped() {
  if (key === 'i') debug = !debug;
  if (key === 'c') { // Switch to city mode and refresh
    mode = 0; 
    first_run = true;
  }
  if (key === 'd') { // Switch to district mode and refresh
    mode = 1; 
    first_run = true;
  }
  if (key === ' ') { // Force update
    first_run = true;
  }
  if (key === '.') { // Next category
    cat++;
    if (cat >= categories.length) cat=0;
  }
  if (key === ',') { // Previous category
    cat--; 
    if (cat < 0) cat=categories.length-1;
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) { // Next category
    cat++;
    if (cat >= categories.length) cat=0;
  }
  if (keyCode === LEFT_ARROW) { // Previous category
    cat--; 
    if (cat < 0) cat=categories.length-1;
  }
}

function renewCityImage() {
  var url;
  if (categories[cat] == "") {
    url = 'http://designav.io/api/image?limit=50';
  } else {
    url = 'http://designav.io/api/image/search/'+categories[cat]+'?limit='+limit[mode];
  }
  loadJSON(url, processCityData);
}

function processCityData(data) {
  msg = "";
  if (data && data.length > 0) {
    for (var i = 0; i < districts.length; i++) {
      var item = data[int(random(data.length))];
      div[i].style("background-image","url('"+item.img_link+"')");
      div[i].style("background-size","auto");
    }
  }
  renewing = false;
  timer = millis();
}

function renewDistrictImage() {
  var string = districts[cur_district].query;
  var url = 'http://designav.io/api/image/search_multi/'+categories[cat]+'%20'+string+'?limit='+limit[mode];
  loadJSON(url, processDistrictData);
}

function processDistrictData(data) {
  msg = "";
  //msg = "District#"+cur_district+" ("+districts[cur_district].name+") ";
  var i = int(random(data.length));
  if (data && data.length > 0) {
    msg += "#"+i+" of "+data.length;
    var item = data[i];
    //for (var i=0; i < data.length; i++) {
    //var item = data[i];
    //var img = loadImage(img.img_link);
    div[cur_district].style("background-image", "url('"+item.img_link+"')");
    //div[cur_district].style("background-size",
    //}
  } else {
    msg += "No result";
  }
  renewing = false;
  timer = millis();
}

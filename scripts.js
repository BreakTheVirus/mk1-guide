let sound = 1; // Sound on by default

/* Display Functions */
// Functions to clear all but the intended elements based on button clicked
// Purpose is to create functions so that the code does not have to be repeated
// for each function
function showMoveGuide() {
  document.getElementById("welcomeMessage").style.display = "none";
  document.getElementById("moveGuide").style.display = "flex";
  document.getElementById("story").style.display = "none";
  document.getElementById("hiddenCharacters").style.display = "none";
  document.getElementById("cheatCodes").style.display = "none";
  document.getElementById("settings").style.display = "none";
  document.getElementById("characterSection").style.display = "none";
}

function showStory() {
    document.getElementById("welcomeMessage").style.display = "none";
    document.getElementById("moveGuide").style.display = "none";
    document.getElementById("story").style.display = "block";
    document.getElementById("hiddenCharacters").style.display = "none";
    document.getElementById("cheatCodes").style.display = "none";
    document.getElementById("settings").style.display = "none";
    document.getElementById("characterSection").style.display = "none";
}

function showHiddenCharacters() {
    document.getElementById("welcomeMessage").style.display = "none";
    document.getElementById("moveGuide").style.display = "none";
    document.getElementById("story").style.display = "none";
    document.getElementById("hiddenCharacters").style.display = "block";
    document.getElementById("cheatCodes").style.display = "none";
    document.getElementById("settings").style.display = "none";
    document.getElementById("characterSection").style.display = "none";
}

function showCheatCodes() {
    document.getElementById("welcomeMessage").style.display = "none";
    document.getElementById("moveGuide").style.display = "none";
    document.getElementById("story").style.display = "none";
    document.getElementById("hiddenCharacters").style.display = "none";
    document.getElementById("cheatCodes").style.display = "flex";
    document.getElementById("settings").style.display = "none";
    document.getElementById("characterSection").style.display = "none";
}

function showSettings() {
    document.getElementById("welcomeMessage").style.display = "none";
    document.getElementById("moveGuide").style.display = "none";
    document.getElementById("story").style.display = "none";
    document.getElementById("hiddenCharacters").style.display = "none";
    document.getElementById("cheatCodes").style.display = "none";
    document.getElementById("settings").style.display = "block";
    document.getElementById("characterSection").style.display = "none";
}

function showCharacterSection() {
    document.getElementById("welcomeMessage").style.display = "none";
    document.getElementById("moveGuide").style.display = "none";
    document.getElementById("story").style.display = "none";
    document.getElementById("hiddenCharacters").style.display = "none";
    document.getElementById("cheatCodes").style.display = "none";
    document.getElementById("settings").style.display = "none";
    document.getElementById("characterSection").style.display = "flex";
}

/* Main Menu Functions */
// Updates titleCard to indicate the selected menu item
// Replaces each section with components related to user selection
function displayMovieGuide() {
  if (sound === 1) {
    var audioSelect = document.getElementById("audioSelect");
    audioSelect.play();
  }  
  console.log("Button Clicked - Movie Guide");
  document.getElementById("titleCard").innerHTML = "Move Guide";
  showMoveGuide();
}

function displayStory() {
  if (sound === 1) {
    var audioSelect = document.getElementById("audioSelect");
    audioSelect.play();
  }  
  console.log("Button Clicked - Story");
  document.getElementById("titleCard").innerHTML = "Story";
  showStory();
}

function displayHiddenCharacters() {
  if (sound === 1) {
    var audioSelect = document.getElementById("audioSelect");
    audioSelect.play();
  }  
  console.log("Button Clicked - Hidden Characters");
  document.getElementById("titleCard").innerHTML = "Hidden Characters";
  showHiddenCharacters();
}

function displayCheatCodes() {
  if (sound === 1) {
    var audioSelect = document.getElementById("audioSelect");
    audioSelect.play();
  }  
  console.log("Button Clicked - Cheat Codes");
  document.getElementById("titleCard").innerHTML = "Cheat Codes";
  showCheatCodes();
  }  

function displaySettings() {
  if (sound === 1) {
    var audioSelect = document.getElementById("audioSelect");
    audioSelect.play();
  }  
  console.log("Button Clicked - Settings");
  document.getElementById("titleCard").innerHTML = "Settings";
  showSettings();
}

/* Character Menu Functions */
// Update "titleCard" to indicate the selected character
// Display "characterSection" (flex)
// Change contents of "characterSelection" children based on character selected
// Show Bio and enable Show Ending Button (to reset each time character selected)
// Play sounds if sound is enabled (sound = 1)
function displayJohnnyCage() {
  document.getElementById("characterEnding").style.display = "none";
  document.getElementById("characterBiography").style.display = "block";
  document.getElementById("showBio").disabled = true;
  document.getElementById("showEnding").disabled = false;
  if (sound === 1) {
    var audioCage = document.getElementById("audioCage");
    audioCage.play();
  }
  console.log("Button Clicked - Johnny Cage");
  document.getElementById("titleCard").innerHTML = "Johnny Cage";
  showCharacterSection();
  document.getElementById("characterPortrait").src = "images/johnnycage.png";
  document.getElementById("characterPortrait").alt = "Image of a Caucasian male" +
  "wearing sunglasses with spotlights in the background.";
  document.getElementById("characterBiography").innerHTML = "A Martial Arts " +
  "Superstar trained by great masters from around the world. Cage uses his " +
  "talents on the big screen. He is the current box-office champ and star of " +
  "such movies as Dragon Fist and Dragon Fist II. As well as the award winning " +
  "Sudden Violence.";
  document.getElementById("characterEnding").innerHTML = "Through the battles and " +
  "life or death situations faced in the tournament, Johnny Cage learns the true " +
  "importance of his fighting skills. He also realizes the full potential of the " +
  "tournament. <br><br> He returns to Hollywood after defending his new title as " +
  "Grand Champion. Cage goes on to film Mortal Kombat: The Movie and its many " +
  "successful sequels.";
  document.getElementById("characterMoves").innerHTML = 
  "<p><strong>Green Bolt:</strong> B, F, LP</p>" +
  "<p><strong>Shadown Kick:</strong> B, F, LK</p>" +
  "<p><strong>Low Blow:</strong> BL + LP</p>";
  document.getElementById("characterFinisher").innerHTML =
  "<p><strong>Uppercut Decapitation:</strong> F, F, F, HP <em>(Close)</em></p>";
}

function displayKano() {
  document.getElementById("characterEnding").style.display = "none";
  document.getElementById("characterBiography").style.display = "block";
  document.getElementById("showBio").disabled = true;
  document.getElementById("showEnding").disabled = false;
  if (sound === 1) {
    var audioKano = document.getElementById("audioKano");
    audioKano.play();
  }
  console.log("Button Clicked - Kano");
  document.getElementById("titleCard").innerHTML = "Kano";
  showCharacterSection();
  document.getElementById("characterPortrait").src = "images/kano.png";
  document.getElementById("characterPortrait").alt = "Image of a Caucasian male " +
  "dressed like a Middle Eastern soldier. He has a metal plate on the right side " +
  "of his face with a red eye.";
  document.getElementById("characterBiography").innerHTML = "A mercenary. Thug. " +
  "Extortionist. Thief - Kano lives a life of crime and injustice. He is a devoted " +
  "member of The Black Dragon. A dangerous group of cut-throat madmen feared and " +
  "respected throughout all of crime's inner circles.";
  document.getElementById("characterEnding").innerHTML = "With the defeat of Goro " +
  "and Shang Tsung, Kano will bring his own brand of treachery to the tournament. His " +
  "Black Dragon organization forms a monopoly over the contest... <br><br> That brings " +
  "shame and torment to all those involved. Their reign will end in anarcy and death. " +
  "it will result in the final dismantling of the Tournament and The Battle of the Sans.";
  document.getElementById("characterMoves").innerHTML = 
  "<p><strong>Cannon Ball:</strong> F, D, B, U, F <em>(Can Hold BL)</em></p>" +
  "<p><strong>Knife Throw:</strong> <em>(Hold BL)</em> B, F <em>(Release BL)</em></p>";
  document.getElementById("characterFinisher").innerHTML =
  "<p><strong>Heart Rip:</strong> B, D, F, LP <em>(Close)</em></p>";
}

function displayRaiden() {
  document.getElementById("characterEnding").style.display = "none";
  document.getElementById("characterBiography").style.display = "block";
  document.getElementById("showBio").disabled = true;
  document.getElementById("showEnding").disabled = false;
  if (sound === 1) {
    var audioRaiden = document.getElementById("audioRaiden");
    audioRaiden.play();
  }
  console.log("Button Clicked - Raiden");
  document.getElementById("titleCard").innerHTML = "Raiden";
  showCharacterSection();
  document.getElementById("characterPortrait").src = "images/raiden.png";
  document.getElementById("characterPortrait").alt = "Image of a Caucasian male in a " +
  "straw hat. He has glowing blue eyes and lightning strikes in the background";
  document.getElementById("characterBiography").innerHTML = "The name Raiden is actually " +
  "that of mystical warrior who lives among the thunder clouds. It is rumored he received " +
  "a personal invitation from Shang Tsung himself and took the form of a human toc compete " +
  "in the tournament.";
  document.getElementById("characterEnding").innerHTML = "Raiden's victory comes as no " +
  "surprise to him. He was never impressed by Shang Tsung's sorcery, Goro's brute force " +
  "or the challenge of the other contestants. <br><br> He quickly becomes bored with his " +
  "mortal competition and soon invites other gods to participate in the contest. The " +
  "ensuing battles rage on for years, and the wars result in the our world's final " +
  "destruction. Have a nice day.";
  document.getElementById("characterMoves").innerHTML = 
  "<p><strong>Teleport:</strong> D, U</p>" +
  "<p><strong>Lightning Toss:</strong> D, F, LP</p>" +
  "<p><strong>Torpedo:</strong> B, B, F</p>";
  document.getElementById("characterFinisher").innerHTML =
  "<p><strong>Electrocution:</strong> F, B, B, B, HP <em>(Close)</em></p>";
}

function displayLiuKang() {
  document.getElementById("characterEnding").style.display = "none";
  document.getElementById("characterBiography").style.display = "block";
  document.getElementById("showBio").disabled = true;
  document.getElementById("showEnding").disabled = false;
  if (sound === 1) {
    var audioKang = document.getElementById("audioKang");
    audioKang.play();
  }
  console.log("Button Clicked - Liu Kang");
  showCharacterSection();
  document.getElementById("titleCard").innerHTML = "Liu Kang";
  document.getElementById("characterPortrait").src = "images/liukang.png";
  document.getElementById("characterPortrait").alt = "Image of a Chinese man with an " +
  "intense, focused look on his face as if he is about to enter battle.";
  document.getElementById("characterBiography").innerHTML = "Once a member of the super " +
  "secret White Lotus Society, Liu Kang left the organization in order to represent " +
  "Shaolin Temples in the tournament. Kang is strong in his eliefs and despises Shang " +
  "Tsung.";
  document.getElementById("characterEnding").innerHTML = "After defeating mighty Goro " +
  "and putting an end to Shang Tsung's rule over the tournament, Kang is able to return " +
  "the contest to its rightful hosts - The Shaolin Temples. Kang's heroics will always " +
  "be remembered. <br><br> He will continue the traditions of the Shaolin Temples and " +
  "restore the true pride and respect of this once great tournament.";
  document.getElementById("characterMoves").innerHTML = 
  "<p><strong>Fireball:</strong> F, F, HP</p>" +
  "<p><strong>Flying Kick:</strong> F, F, HK</p>";
  document.getElementById("characterFinisher").innerHTML =
  "<p><strong>Cartwheel Uppercut:</strong> F, D, B, U, F <em>(Close) (Can hold BL)</em></p>";
}

function displayScorpion() {
  document.getElementById("characterEnding").style.display = "none";
  document.getElementById("characterBiography").style.display = "block";
  document.getElementById("showBio").disabled = true;
  document.getElementById("showEnding").disabled = false;
  if (sound === 1) {
    var audioScorpion = document.getElementById("audioScorpion");
    audioScorpion.play();
  }
  console.log("Button Clicked - Scorpion");
  showCharacterSection();
  document.getElementById("titleCard").innerHTML = "Scorpion";
  document.getElementById("characterPortrait").src = "images/scorpion.png";
  document.getElementById("characterPortrait").alt = "An image of a Chinese ninja " +
  "dressed in yellow and black.";
  document.getElementById("characterBiography").innerHTML = "Like Sub-Zero, Scropion's " +
  "true name and origin are not known. He has shown from time to time distrust and " +
  "hatred towards Sub-Zero. Between ninjas, this is usually a sing of opposing clans.";
  document.getElementById("characterEnding").innerHTML = "Marked for death years ago by " +
  "the Lin Kuei, Scorpion was murdered by Sub-Zero. He left behind a wife and child in " +
  "his former life but was allowed to return and avenge his death. <br><br> Even with " +
  "Scorpion's triumph in the tournament and new title as Grand Champion, the price he " +
  "paid was high. He can never again know his family and must exist forever with his " +
  "secret curse.";
  document.getElementById("characterMoves").innerHTML = 
  "<p><strong>Spear:</strong> B, B, LP</p>" +
  "<p><strong>Decoy Punch:</strong> D, B, HP</p>";
  document.getElementById("characterFinisher").innerHTML =
  "<p><strong>Fire Breath:</strong> U, U <em>(Half Screen) (Can hold BL)</em></p>";
}

function displaySubZero() {
  document.getElementById("characterEnding").style.display = "none";
  document.getElementById("characterBiography").style.display = "block";
  document.getElementById("showBio").disabled = true;
  document.getElementById("showEnding").disabled = false;
  if (sound === 1) {
    var audioSubZero = document.getElementById("audioSubZero");
    audioSubZero.play();
  }
  console.log("Button Clicked - Sub-Zero");
  document.getElementById("titleCard").innerHTML = "Sub-Zero";
  showCharacterSection();
  document.getElementById("characterPortrait").src = "images/subzero.png";
  document.getElementById("characterPortrait").alt = "Image of a Chinese ninja dressed in " +
  "blue and black. He is standing in front of a wall of ice.";
  document.getElementById("characterBiography").innerHTML = "The actual name or identity of " +
  "this warrior is unknown. However, based on the markings of his uniform, it is believed " +
  "he belongs to the Lin Kuei, a legendary clan of Chinese ninjas.";
  document.getElementById("characterEnding").innerHTML = "After receiving the title of " +
  "Grand Champion, Sub-Zero disappears back into the shadows from which he came. His only " +
  "goal in the tournament was the assassination of Shang Tsung. He was paid a large sum of " +
  "money by one of Tsung's wealthy enemies. With his mission accomplished, Sub-Zero will " +
  "collect his fortune and retire from his dangerous profession.";
  document.getElementById("characterMoves").innerHTML = 
  "<p><strong>Ice Blast:</strong> D, F, LP</p>" +
  "<p><strong>Slide:</strong> B + LP + LK + BL</p>";
  document.getElementById("characterFinisher").innerHTML =
  "<p><strong>Spine Rip:</strong> F, D, F, HP <em>(Close)</em></p>";
}

function displaySonyaBlade() {
  document.getElementById("characterEnding").style.display = "none";
  document.getElementById("characterBiography").style.display = "block";
  document.getElementById("showBio").disabled = true;
  document.getElementById("showEnding").disabled = false;
  if (sound === 1) {
    var audioBlade = document.getElementById("audioBlade");
    audioBlade.play();
  }
  console.log("Button Clicked - Sonya Blade");
  document.getElementById("titleCard").innerHTML = "Sonya Blade";
  showCharacterSection();
  document.getElementById("characterPortrait").src = "images/sonyablade.png";
  document.getElementById("characterPortrait").alt = "Image of a Caucasian female with blond " +
  "hair just above shoulder length. She is wearing a headband and a green outfit. She looks " + 
  "focused and confident.";
  document.getElementById("characterBiography").innerHTML = "Sonya is a member of a top US " +
  "Special Forces unit. Her team was hot on the trail of Kano's Black Dragon organization. " +
  "They followed them into an uncharted island where they were ambushed by Shang Tsung's " +
  "personal army.";
  document.getElementById("characterEnding").innerHTML = "Captured by Shang Tsung, Sonya's " +
  "Specail Forces unit was taken hostage - their only hope was the tournament. Shang Tsung " +
  "promised to release her entire team... only if Sonya could win the contest <br><br> " +
  "Her victory not only released her unit,  - but also put an end to the Black Dragon and " +
  "Shang Tsung's powerful grip on the tournament.";
  document.getElementById("characterMoves").innerHTML = 
  "<p><strong>Ring Toss:</strong> <em>(Hold LP)</em> B <em>(Release LP)</em></p>" +
  "<p><strong>Leg Throw:</strong> D + LP + LK + BL</p>" +
  "<p><strong>Square Wave Punch:</strong> F, B, HP</p>";
  document.getElementById("characterFinisher").innerHTML =
  "<p><strong>Kiss of Death:</strong> F, F, B, B, BL <em>(Far)</em></p>";
}

// Replace characterBography with characterEnding
// Disable showEnding button
function showEnding() {
  if (sound === 1) {
    var audioSelect = document.getElementById("audioSelect");
    audioSelect.play();
  }  
  document.getElementById("characterEnding").style.display = "block";
  document.getElementById("characterBiography").style.display = "none"
  document.getElementById("showBio").disabled = false;
  document.getElementById("showEnding").disabled = true;
}

// Replace characterEnding with Character bio
// Disable showBio button 
function showBio() {
  if (sound === 1) {
    var audioSelect = document.getElementById("audioSelect");
    audioSelect.play();
  }  
  document.getElementById("characterEnding").style.display = "none";
  document.getElementById("characterBiography").style.display = "block";
  document.getElementById("showBio").disabled = true;
  document.getElementById("showEnding").disabled = false;
}


/**** SETTTINGS FUNCTIONS  
- soundOn / soundOff (Enables / Disables sounds that play when clicking buttons)
- musicOn / musicOff (Enables / Disables music - uses "Pause")
- loopMusicOn / loopMusicOff (Enables / Disables music to run on a loop)
- showWelcome (Displays the landing page / Welcome screen)
*/
function soundOn () {
  if (sound === 0) {
    var audioExcellent = document.getElementById("audioExcellent");
    audioExcellent.play();
  }  
  document.getElementById("soundOn").disabled = true;
  document.getElementById("soundOff").disabled = false;
  sound = 1;
}

function soundOff() {
  document.getElementById("soundOn").disabled = false;
  document.getElementById("soundOff").disabled = true;
  sound = 0;
}

function playMusic () { 
  var audioMusic = document.getElementById("audioMusic");
  audioMusic.play();
  document.getElementById("playMusic").disabled = true;
  document.getElementById("pauseMusic").disabled = false;
  document.getElementById("stopMusic").disabled = false;
}

function pauseMusic () {
  if (sound === 1) {
    var audioSelect = document.getElementById("audioSelect");
    audioSelect.play();
  } 
  var audioMusic = document.getElementById("audioMusic");
  audioMusic.pause(); 
  document.getElementById("playMusic").disabled = false;
  document.getElementById("pauseMusic").disabled = true;
  document.getElementById("stopMusic").disabled = false;
}

function stopMusic () {
  if (sound === 1) {
    var audioSelect = document.getElementById("audioSelect");
    audioSelect.play();
  } 
  var audioMusic = document.getElementById("audioMusic");
  audioMusic.pause(); 
  audioMusic.currentTime = 0;
  document.getElementById("playMusic").disabled = false;
  document.getElementById("pauseMusic").disabled = false;
  document.getElementById("stopMusic").disabled = true;
}

function loopMusicOn () {
  if (sound === 1) {
    var audioSelect = document.getElementById("audioSelect");
    audioSelect.play();
  } 
  document.getElementById("audioMusic").loop = true;
  document.getElementById("loopOn").disabled = true;
  document.getElementById("loopOff").disabled = false;
}

function loopMusicOff () {
  if (sound === 1) {
    var audioSelect = document.getElementById("audioSelect");
    audioSelect.play();
  } 
  document.getElementById("audioMusic").loop = false;
  document.getElementById("loopOn").disabled = false;
  document.getElementById("loopOff").disabled = true;
  }

function showWelcome() {
  if (sound === 1) {
    var audioSelect = document.getElementById("audioSelect");
    audioSelect.play();
  } 
  document.getElementById("welcomeMessage").style.display = "block";
  document.getElementById("settings").style.display = "none"; 
}
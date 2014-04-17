//var collisionSound : AudioClip; // set this to your sound in the inspector
var textDisplay : GUIText; 

 
function OnTriggerEnter()  {
	//audio.volume = 1;
    //audio.PlayOneShot(collisionSound);
    
    
  	textDisplay.text = "church";
}
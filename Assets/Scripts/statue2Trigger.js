//var collisionSound : AudioClip; // set this to your sound in the inspector
var textDisplay : GUIText; 


function Update() {
	if(Input.GetKeyDown(KeyCode.F)){
		collider.enabled = false;
		transform.collider.isTrigger = false;
	}
	if(Input.GetKeyDown(KeyCode.H)){
		collider.enabled = true;
		transform.collider.isTrigger = true;
	}
}


function OnTriggerEnter()  {
	//audio.volume = 1;
    //audio.PlayOneShot(collisionSound);
    
    
    
  	textDisplay.text = "statue 2";
}
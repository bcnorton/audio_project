var AudioFile : AudioClip;
var AudioFile2 : AudioClip;
function Update() {


 
	if (Input.GetKeyDown (KeyCode.W) || Input.GetKeyDown (KeyCode.A)
	|| Input.GetKeyDown (KeyCode.S) || Input.GetKeyDown (KeyCode.D))
	{
    	audio.Play();
	}
	
	if (Input.GetKeyUp (KeyCode.W) || Input.GetKeyUp (KeyCode.A)
	|| Input.GetKeyUp (KeyCode.S) || Input.GetKeyUp (KeyCode.D))
	{
    	audio.Stop();
	}
	
	
}

function OnControllerColliderHit (hit : ControllerColliderHit){
    if (hit.gameObject.tag == "grass"){
    	audio.clip = AudioFile;
      
    }
    else if (hit.gameObject.tag == "street"){
		audio.clip = AudioFile2;
    }
}

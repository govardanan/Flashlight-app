
document.addEventListener("deviceready", onDeviceReady, false);


function on()
{
	 window.plugins.flashlight.switchOn(); // success/error callbacks may be passed

}




function off()
{
	window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
}
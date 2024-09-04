const videoEle = document.getElementById("video");
const btn = document.getElementById("button");

//Prompt to select media stream, pass to video element, the play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEle.srcObject = mediaStream;
    videoEle.onloadedmetadata = () => {
      videoEle.play();
    };
  } catch (err) {
    //Catch error here
    console.log(err);
  }
}

btn.addEventListener("click", async () => {
  //Disable button
  btn.disabled = true;

  //Start Picture in picture
  await videoEle.requestPictureInPicture();

  //Reset Button
  btn.disabled = false;
});

//On Load
selectMediaStream();

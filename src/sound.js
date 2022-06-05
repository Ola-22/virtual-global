import filepath from "./music/background-music.mp3";
const context = new window.AudioContext();

export function PlayAudio(filepath) {
  console.log("play audio");
  // see https://jakearchibald.com/2016/sounds-fun/
  // Fetch the file
  fetch("./music/background-music.mp3")
    // Read it into memory as an arrayBuffer
    .then((response) => response.arrayBuffer(filepath))
    // Turn it from mp3/aac/whatever into raw audio data
    .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
    .then((audioBuffer) => {
      // Now we're ready to play!
      const soundSource = context.createBufferSource();
      soundSource.buffer = audioBuffer;
      soundSource.connect(context.destination);
      soundSource.start(0);
    });
}

PlayAudio("./music/background-music.mp3");

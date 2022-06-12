const context = new window.AudioContext();

export function PlayAudio(filepath) {
  console.log("play audio");

  fetch("./music/videoBackground.mp4")
    .then((response) => response.arrayBuffer(filepath))
    .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
    .then((audioBuffer) => {
      const soundSource = context.createBufferSource();
      soundSource.buffer = audioBuffer;
      soundSource.connect(context.destination);
      soundSource.start(0);
    });
}

PlayAudio("./music/videoBackground.mp4");

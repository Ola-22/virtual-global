// const context = new window.AudioContext();

// export function PlayAudio(filepath) {
//   console.log("play audio");

//   fetch("./music/music.mp3")
//     .then((response) => response.arrayBuffer(filepath))
//     .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
//     .then((audioBuffer) => {
//       const soundSource = context.createBufferSource();
//       soundSource.buffer = audioBuffer;
//       soundSource.connect(context.destination);
//       soundSource.start(0);
//     });
// }

// PlayAudio("./music/background-music.mp3");

import voice from "elevenlabs-node";

export const createAudioFile = async (message) => {
  await voice.textToSpeech(
    process.env.ELEVEN_LABS_KEY,
    process.env.ELEVEN_VOICE_ID,
    "./public/audioOutput.mp3",
    message
  );
};

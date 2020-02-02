import textToSpeech from '@google-cloud/text-to-speech'
import fs from 'fs'
import util from 'util'

const projectID = 'swamphacks-266920';
const keyFilename = 'C:/Users/pao_s/Downloads/SwampHacks-a43a1ef23dcd.json';

const client = new textToSpeech.TextToSpeechClient({projectID, keyFilename});

async function quickStart() {
    const text = 'hello world!';

    const request = {
        input: {
            text: text
        },
        voice: {
            languageCode: 'en-US',
            ssmlGender: 'NEUTRAL'
        },
        audioConfig: {
            audioEncoding: 'MP3'
        },
    };

    const [response] = await client.synthesizeSpeech(request);

    const writeFile = util.promisify(fs.writeFile);
    await writeFile('output.mp3', response.audioContent, 'binary');
    console.log('Audio content written to file: output.mp3')
}

quickStart();
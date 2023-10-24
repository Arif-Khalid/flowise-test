export const createPrediction = async (req, res) => {
  const { message } = req.body;
  console.log(message);

  try {
    // Call the Flowise API endpoint here..
    const flowiseData = {
      question: message,
    };

    // Call the flowise endpoint
    const response = await fetch(
      `${process.env.FLOWISE_URL}/api/v1/prediction/${process.env.FLOW_ID}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.FLOWISE_API_KEY}`,
              },
              body: JSON.stringify(flowiseData),
            }
    );

    const FlowData = await response.json();
    console.log(FlowData);
  

    // elevenlab

    /*
    var requests = require('requests');

    CHUNK_SIZE = 1024;

    const response = await fetch(
    url = 'https://api.elevenlabs.io/v1/text-to-speech/gbIAVUIny3ozi9MyCV9g';
    
    headers = {
      'Accept': 'audio/mpeg',
      'Content-Type': 'application/json',
      'xi-api-key': 'b273762cf5f02d4321be269daf7e9c93'
    };
    
    data = {
      'text': FlowData,
      'model_id': 'eleven_monolingual_v1',
      'voice_settings': {
        'stability': 0.5,
        'similarity_boost': 0.5
      }
    };

    );
  
    response = requests.post(url, json=data, headers=headers);
    with open('output.mp3', 'wb') as f) {
        for (chunk in response.iter_content(chunk_size=CHUNK_SIZE)) {
            if (chunk) {
                f.write(chunk);
            }
        }
    
    }
   
*/


    res.status(200).json({ message: FlowData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

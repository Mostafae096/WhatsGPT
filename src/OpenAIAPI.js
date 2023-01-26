const OpenAI = require('openai-api');

const OPENAI_API_KEY = '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';

const openai = new OpenAI(OPENAI_API_KEY);
async function OpenAIAPI() {
  const gptResponse = await openai.complete({
      engine: 'text-davinci-003',
      prompt: 'say this is test' ,
      temperature: 0.7,
      max_tokens: 7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
  });
  ReturnedMessage= gptResponse.data.choices[0].text
  time = gptResponse.headers.date
};

//export default OpenAIAPI;
console.log(OpenAIAPI())
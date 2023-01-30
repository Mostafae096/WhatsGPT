
import OpenAI from 'openai-api';
const OPENAI_API_KEY = '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';

const openai = new OpenAI(OPENAI_API_KEY);
export default async function OpenAIAPI(text) {
  const gptResponse = await openai.complete({
      engine: 'text-davinci-003',
      prompt: text ,
      temperature: 0.7,
      max_tokens: 200,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
  });
  //sender = 'gpt3'
  //messageid = messageid + "gpt3"
  const response = {
    ReturnedMessage: gptResponse.data.choices[0].text,
    time : gptResponse.headers.date,
    sender : 'gpt3',
  }
  return (response)
}

// const text1 = 'say this is a test';

// const test1 = await OpenAIAPI(text1);

// console.log(test1)

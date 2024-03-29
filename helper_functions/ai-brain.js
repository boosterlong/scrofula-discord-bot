const { openAiKey } = require('./config.json');


module.exports = {
    getPromptResponse: async function getPromptResponse (prompt) {
        const { Configuration, OpenAIApi } = require('openai');

        const configuration = new Configuration({
            apiKey: `openAiKey`,
        });
        const openai = new OpenAIApi(configuration);

        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: prompt,
            temperature: 0.7,
            max_tokens: 400,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        return response['data']['choices'][0]['text']
    },
}

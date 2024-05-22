require('dotenv').config();
const { OpenAIClient, AzureKeyCredential } = require('@azure/openai');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize express app
const app = express();
const port = 4000;

// Azure OpenAI client setup
const azureOpenAIClient = new OpenAIClient(
  process.env.AZURE_OPENAI_ENDPOINT,
  new AzureKeyCredential(process.env.AZURE_OPENAI_KEY)
);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route to handle POST requests
app.post('/respond', async (req, res) => {
  try {
    const { message } = req.body;
    console.log('MESSAGE: ', message);
    const chatCompletion = await azureOpenAIClient.getCompletions({
      deploymentId: 'test-assistant',
      prompt: message,
      maxTokens: 150,
    });

    console.log('PASSED');
    console.log('Azure OpenAI Response:', chatCompletion.choices[0].text);

    // Send the Azure OpenAI response back to the client
    res.json({ botResponse: chatCompletion.choices[0].text });
  } catch (error) {
    console.error('Error calling Azure OpenAI:', error);
    res
      .status(500)
      .json({ error: 'Failed to generate response from Azure OpenAI' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

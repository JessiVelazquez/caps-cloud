'use strict';

const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/286761073255/1-206-flowers',
  handleMessage: async (message) => {
    console.log(message.Body);
  }
});

app.start();
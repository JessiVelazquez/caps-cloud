'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
const faker = require('faker');

const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:286761073255:pickup.fifo';

const payload = {
  Messasge: 'Delivered!',
  TopicArn: topic,
}

setInterval(async () => {
  try{
    const message = {
      orderID: faker.datatype.uuid(),
      customer: faker.name.findName(),
      vendorID: 'arn:aws:sqs:us-west-2:286761073255:1-206-flowers',
      topicArn: topic,
    };
    const data = await sns.publish(message);
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}, 4000);


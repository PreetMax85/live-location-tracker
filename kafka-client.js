import { Kafka } from 'kafkajs';

process.env.KAFKAJS_NO_PARTITIONER_WARNING = '1';

const brokers = process.env.KAFKA_BROKERS
  ? process.env.KAFKA_BROKERS.split(',')
  : ['localhost:9092'];

const sasl =
  process.env.KAFKA_USERNAME && process.env.KAFKA_PASSWORD
    ? {
        mechanism: 'scram-sha-256',
        username: process.env.KAFKA_USERNAME,
        password: process.env.KAFKA_PASSWORD,
      }
    : null;

const ssl = !!sasl;

export const kafkaClient = new Kafka({
  clientId: 'chaicode',
  brokers,
  ssl,
  sasl,
});

import mongoose from 'mongoose';
import Logger from 'bunyan';

import { config } from '@root/config';

const log: Logger = config.createLogger('setupDatabase');
// const url: string = 'mongodb+srv://jahid4k:uxu6aouaRExKLTq8@chattyclusterone.gupscn1.mongodb.net/chatty?retryWrites=true&w=majority'

export default () => {
  const connect = () => {
    mongoose
      .connect(`${config.DATABASE_URL}`)
      .then(() => {
        log.info('Successfully connected to database!!!');
      })
      .catch((error) => {
        log.error('Error: ', error);
        console.log(error.message);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};

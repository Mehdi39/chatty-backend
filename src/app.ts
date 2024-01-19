import express, { Express } from 'express';

import { ChattyServer } from '@root/setupServer';
import connectDB from '@root/setupDatabase';
import { config } from '@root/config';
// comments
class Application {
  public initialize(): void {
    this.loadConfig();
    connectDB();
    const app: Express = express();
    const server: ChattyServer = new ChattyServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
    config.cloudinaryConfig();
  }
}

const application: Application = new Application();
application.initialize();

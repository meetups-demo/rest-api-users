import config from './config';
import Server from './Server';

const server = new Server(config);
server.bootstrap();
server.run();

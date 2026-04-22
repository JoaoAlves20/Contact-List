import express from 'express';
import helmet from 'helmet';

import { serverConfig } from './config/serverConfig.ts';
import router from './routes/main.route.ts';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(helmet());

server.use('/api/contacts', router);

server.listen(serverConfig.port, () => {
    console.log(`Server is running on http://localhost:${serverConfig.port}`)
});
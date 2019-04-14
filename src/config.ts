import { config } from 'dotenv';
config();

const envVars = process.env;
const configuration = {
  port: envVars.PORT || 9000,
  apiPrefix: envVars.API_PREFIX || '/api',
  env: envVars.NODE_ENV || 'dev'
};

export default configuration;


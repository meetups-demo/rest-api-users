import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as methodOverride from 'method-override';

import router from './router';

export default class Server {
  private app: express.Express;

  constructor(private config: any) {
    this.app = express();
  }

  get application() {
    return this.app;
  }

  /**
   * To enable all the setting on our express app
   * @returns -Instance of Current Object
   */
  public bootstrap() {

    this.initCors();

    this.initJsonParser();

    this.setupRoutes();
    this.initMethodOverride();

    return this.app;
  }

  /**
   * This will Setup all the routes in the system
   *
   * @returns -Instance of Current Object
   * @memberof Server
   */
  public setupRoutes() {
    const { apiPrefix } = this.config;
    // mount all routes on /api path
    this.app.use(apiPrefix, router);
  }
  /**
   * This will run the server at specified port after opening up of Database
   *
   * @returns -Instance of Current Object
   */
  public run() {
    // open Database & listen on port config.port
    const { port, env } = this.config;
    this.app.listen(port, () => {
      const message = `|| App is running at port '${port}' in '${env}' mode ||`;
      console.log(message.replace(/[^]/g, '-'));
      console.log(message);
      console.log(message.replace(/[^]/g, '-'));
      console.log('Press CTRL-C to stop\n');
    });

    return this;
  }


  /**
   *
   * Lets you to enable cors
   */
  private initCors() {
    this.app.use(cors());
  }

  /**
   *  - Parses urlencoded bodies & JSON
   */
  private initJsonParser() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  /**
*
* Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
*/
  private initMethodOverride() {
    this.app.use(methodOverride());
  }

}

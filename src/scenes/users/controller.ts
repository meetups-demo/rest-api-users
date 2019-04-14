import { IUser } from './entities';
import user from './mocks';
import { Request, Response } from 'express';

class UserController {
  public static getInstance() {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }

    return UserController.instance;
  }
  private static instance: UserController;

  /**
   * Get user list.
   * @returns IUser[]
   */
  public async get(req: Request, res: Response) {
    try {
      res.send({ error: false, data:  user});
    } catch (e) {
      res.status(500).send({ error: true, data: e });
    }
  };
}

export default UserController.getInstance();

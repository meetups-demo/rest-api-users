import { Router } from 'express';
import userController from './controller';
const router: Router = Router();

router.get('/', userController.get);

export default router;

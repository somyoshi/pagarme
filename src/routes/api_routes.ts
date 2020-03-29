import { Router } from 'express'
import { ApiController } from '../controllers/api_controller';
const router = Router();

const apiController = new ApiController();


router.route('/processar').post(apiController.processaPagamento);

export default router;
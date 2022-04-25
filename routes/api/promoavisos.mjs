import { validate } from 'express-jsonschema';
import { Router } from 'express';
import PromoAvisoController from '../../app/controllers/PromoAvisoController.mjs';
import Call from '../../app/utils/Call.mjs';

const router = Router();
router.get('/', Call(PromoAvisoController.index));
router.post('/', Call(PromoAvisoController.store));
router.get('/:id', Call(PromoAvisoController.show));
router.put('/:id', Call(PromoAvisoController.update));
router.delete('/:id', Call(PromoAvisoController.destroy));

export default router;

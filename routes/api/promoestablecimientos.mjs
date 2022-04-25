import { validate } from 'express-jsonschema';
import { Router } from 'express';
import PromoEstablecimientoController from '../../app/controllers/PromoEstablecimientoController.mjs';
import Call from '../../app/utils/Call.mjs';

const router = Router();
router.get('/estab', Call(PromoEstablecimientoController.index));
router.post('/estab', Call(PromoEstablecimientoController.store));
router.get('/estab/:id', Call(PromoEstablecimientoController.show));
router.put('/estab/:id', Call(PromoEstablecimientoController.update));
router.delete('/estab/:id', Call(PromoEstablecimientoController.destroy));

export default router;
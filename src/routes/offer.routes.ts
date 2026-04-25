import { Router } from 'express';
import { getOffer, getAllOffers, createOffer, updateOffer, deleteOffer } from '../controllers/offer.controller';

const router = Router();

router.get('/', getOffer);
router.get('/all', getAllOffers);
router.post('/', createOffer);
router.patch('/:id', updateOffer);
router.delete('/:id', deleteOffer);

export default router;

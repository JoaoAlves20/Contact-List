import { Router } from "express";

import ContactsController from "../controller/contacts.controller.ts";

const router = Router();

router.get('/', ContactsController.findAll);
router.get('/:id', ContactsController.findById);
router.post('/', ContactsController.createContact);
router.put('/:id', ContactsController.updateContact);
router.delete('/:id', ContactsController.deleteContact);

export default router;
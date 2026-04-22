import type { RequestHandler } from "express";

import ContactsService from "../service/contacts.service.ts";

class ContactsController {
    findAll: RequestHandler = async (request, response) => {
        const contacts = await ContactsService.findAll();

        if (!contacts) {
            return response.status(404).json({ message: 'Contacts not found' });
        }
        
        response.json(contacts);
    }

    findById: RequestHandler = async (request, response) => {
        const { id } = request.params;

        if (!id) {
            return response.status(400).json({ message: 'ID is required' });
        }

        const contact = await ContactsService.findById(+id);

        if (!contact) {
            return response.status(404).json({ message: 'Contact not found' });
        }

        response.json(contact);
    }

    createContact: RequestHandler = async (request, response) => {
        const contact = request.body;

        if (!contact) {
            return response.status(400).json({ message: 'Information of contact is required' });
        }

        const newContact = await ContactsService.addContact(contact);
        
        if (!newContact) {
            return response.status(400).json({ message: 'Error in create contact' });
        }

        response.status(201).json({ createdContact: newContact });
    }

    updateContact: RequestHandler = async (request, response) => {
        const { id } = request.params;
        const contactUpdate = request.body;

        if (!id) {
            return response.status(400).json({ message: 'ID is required' });
        }

        const updatedContact = await ContactsService.updateContact(+id, contactUpdate);

        if (!updatedContact) {
            return response.status(404).json({ message: 'Contact not found or update failed' });
        }

        response.status(200).json(updatedContact);
    }

    deleteContact: RequestHandler = async (request, response) => {
        const { id } = request.params;

        if (!id) {
            return response.status(400).json({ message: 'ID is required' });
        }

        const contact = await ContactsService.findById(+id);

        if (!contact) {
            return response.status(400).json({ message: 'Contact not found' });
        }

        const success = await ContactsService.deleteContact(+id);

        if (!success) {
            return response.status(404).json({ message: 'Contact not found or delete failed' });
        }

        response.status(200).json({ message: 'Deleted user' });
    }
}

export default new ContactsController();
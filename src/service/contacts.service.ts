import { readFile, writeFile } from "fs/promises"

import type { addContact, contact } from "../interface/contact.interface.ts";

const filename = './src/mocks/contacts.json';

class ContactsService {
    async findAll() {
        try {
            const data = await readFile(filename, 'utf-8');        
            const contacts = JSON.parse(data);
            return contacts;
        } catch (error) {
            console.error("Error reading contacts file:", error);
            return null; // Or throw an error to be handled by the controller
        }
    }

    async findById(id: number) {
        try {
            const data = await readFile(filename, 'utf-8');
            const contacts: contact[] = JSON.parse(data);
    
            return contacts.find(contact => contact.id === id);
        } catch (error) {
            console.error("Error reading contacts file:", error);
            return null; // Or throw an error to be handled by the controller
        }
    }

    async addContact(contact: addContact) {
        try {
            const data = await readFile(filename, 'utf-8');
            const contacts: contact[] = JSON.parse(data);
    
            const id = contacts.length + 1;
    
            const newContact = { id, ...contact };
            contacts.push(newContact);
    
            await writeFile(filename, JSON.stringify(contacts, null, 2));
            return newContact;
        } catch (error) {
            console.error("Error adding contact to file:", error);
            return null; // Or throw an error to be handled by the controller
        }
    }
}

export default new ContactsService();
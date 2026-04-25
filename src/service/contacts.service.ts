import { readFile, writeFile } from "fs/promises"

import type { create, contacts, update } from "../types/contact.type.ts";

const filename = './src/mocks/contacts.json';

class ContactsService {
    async findAll() {
        try {
            const data = await readFile(filename, 'utf-8');        
            const contacts: contacts = JSON.parse(data);
            return contacts;
        } catch (error) {
            console.error("Error reading contacts file:", error);
            return null;
        }
    }

    async findById(id: number) {
        try {
            const data = await readFile(filename, 'utf-8');
            const contacts: contacts = JSON.parse(data);
    
            return contacts.find(contact => contact.id === id);
        } catch (error) {
            console.error("Error reading contacts file:", error);
            return null;
        }
    }

    async addContact(contact: create) {
        try {
            const data = await readFile(filename, 'utf-8');
            const contacts: contacts = JSON.parse(data);

            const id = contacts.length + 1;
    
            const newContact = { id, ...contact };
            contacts.push(newContact);
    
            await writeFile(filename, JSON.stringify(contacts, null, 2));
            return newContact;
        } catch (error) {
            console.error("Error adding contact to file:", error);
            return null;
        }
    }

    async updateContact(id: number, contactUpdate: update) {
        try {
            const data = await readFile(filename, 'utf-8');
            const contacts: contacts = JSON.parse(data);

            const findContact = contacts.find(value => value.id === id);

            const newContacts = contacts.map(value => {
                return value.id === id ? { ...findContact, ...contactUpdate }: value;
            });

            await writeFile(filename, JSON.stringify(newContacts, null, 2));
            return { id, ...contactUpdate };
        } catch (error) {
            console.error("Error updating contact in file:", error);
            return null;
        }
    }

    async deleteContact(id: number) {
        try {
            const data = await readFile(filename, 'utf-8');
            const contacts: contacts = JSON.parse(data);

            const newContacts = contacts.filter(value => value.id !== id);

            await writeFile(filename, JSON.stringify(newContacts, null, 2));
            return true;
        } catch (error) {
            console.error("Error deleting contact from file:", error);
            return false;
        }
    }
}

export default new ContactsService();
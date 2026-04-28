import { prisma } from "../lib/prisma.ts";

import type { create, contacts } from "../types/types.ts";

class ContactsService {
    async findAll() {
        try {
            const data: contacts = await prisma.contact.findMany();
            return data;
        } catch (error) {
            console.error("Error reading contacts file:", error);
            return null;
        }
    }

    async findById(id: number) {
        try {
            const data = await prisma.contact.findUnique({ where: { id } })
            return data;
        } catch (error) {
            console.error("Error reading contacts file:", error);
            return null;
        }
    }

    async addContact(contact: create) {
        try {
            const data = await prisma.contact.create({ data: contact });
            return data;
        } catch (error) {
            console.error("Error adding contact to file:", error);
            return null;
        }
    }

    async updateContact(id: number, contactUpdate: create) {
        try {
            const data = await prisma.contact.update({
                where: {id},
                data: contactUpdate
            })
            return data;
        } catch (error) {
            console.error("Error updating contact in file:", error);
            return null;
        }
    }

    async deleteContact(id: number) {
        try {
            const data = await prisma.contact.delete({ where: { id } });
            return data;
        } catch (error) {
            console.error("Error deleting contact from file:", error);
            return false;
        }
    }
}

export default new ContactsService();
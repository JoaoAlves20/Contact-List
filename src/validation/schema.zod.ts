import z from 'zod';

export const pattern = z.object({
    id: z.number(),
    name: z.string().min(2).trim(),
    email: z.email().toLowerCase().trim(),
    phone: z.string().trim()
})

export const schemaContacts = z.array(pattern);

export const schemaCreate = pattern.omit({ id: true });

export const schemaUpdate = pattern.omit({ id: true }).partial();
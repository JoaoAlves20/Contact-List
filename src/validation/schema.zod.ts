import z from 'zod';

export const schemaContacts = z.array(z.object({
    id: z.number(),
    name: z.string().min(2).trim(),
    email: z.email().toLowerCase().trim(),
    phone: z.string().trim()
}))

export const schemaAddContact = z.object({
    name: z.string().min(2).trim(),
    email: z.email().toLowerCase().trim(),
    phone: z.string().trim()
})

export const schemaContact = z.object({
    id: z.number(),
    name: z.string().min(2).trim(),
    email: z.email().toLowerCase().trim(),
    phone: z.string().trim()
})
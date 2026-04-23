import z from 'zod';

export const schemaContacts = z.array(z.object({
    id: z.number(),
    name: z.string().min(2),
    email: z.email(),
    phone: z.string()
}))

export const schemaAddContact = z.object({
    name: z.string().min(2),
    email: z.email(),
    phone: z.string()
})

export const schemaContact = z.object({
    id: z.number(),
    name: z.string().min(2),
    email: z.email(),
    phone: z.string()
})
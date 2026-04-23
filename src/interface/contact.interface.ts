import z from 'zod';

import { schemaContacts, schemaAddContact } from '../validation/schema.zod.ts';

export type contacts = z.infer<typeof schemaContacts>;

export type addContact = z.infer<typeof schemaAddContact>;
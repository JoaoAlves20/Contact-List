import z from 'zod';

import * as schema from '../validation/schema.zod.ts';

export type contacts = z.infer<typeof schema.schemaContacts>;

export type create = z.infer<typeof schema.schemaCreate>;

export type update = z.infer<typeof schema.schemaUpdate>
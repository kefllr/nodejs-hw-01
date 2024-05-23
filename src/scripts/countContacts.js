
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
    try {
        const dataContacts =JSON.parse(await fs.readFile(PATH_DB));
        console.log(dataContacts.length);
    } catch (error) {
        console.log(error);
    }
};
await countContacts();

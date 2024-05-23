import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises'

export const thanos = async () => {
    try {
        const dataContacts =JSON.parse(await fs.readFile(PATH_DB));
        const updatedContacts = dataContacts.filter(() => Math.random() >= 0.5);
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
    } catch (error) {
        console.log(error);
    }

};

await thanos();

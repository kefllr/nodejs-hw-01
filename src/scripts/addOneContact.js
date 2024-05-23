import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import {createFakeContact} from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    try {
        const dataContacts =JSON.parse(await fs.readFile(PATH_DB));
        const newContact = createFakeContact();
        const allContacts = dataContacts.concat(newContact);
        await fs.writeFile(PATH_DB, JSON.stringify(allContacts, null, 2));

    } catch (error) {
        console.log(error);
    }
};

await addOneContact();

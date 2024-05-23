import {PATH_DB} from '../constants/contacts.js';
import fs from 'node:fs/promises';
import {createFakeContact} from '../utils/createFakeContact.js';

const generateContacts = async (number) => {

    try {
        const dataContacts =JSON.parse(await fs.readFile(PATH_DB));
        const newContacts = [];

         for (let  i = 0;  i< number; i+=1) {
            newContacts.push(createFakeContact());
         }

         const allContacts = dataContacts.concat(newContacts);
         await fs.writeFile(PATH_DB, JSON.stringify(allContacts, null, 2));
         console.log(`Successfully added ${number} contacts`);
    } catch (error) {
        console.log(error);
    }

};

generateContacts(10);

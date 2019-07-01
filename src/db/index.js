import db from './db'

const addContact = async contact => {
  try {
    return await db.collection('contacts').add(contact)
  } catch (e) {
    console.error('Error adding contact to db', e);
  }
}

export { addContact }

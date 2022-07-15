import { createAction } from '@reduxjs/toolkit';

const contactAdd = createAction('contacts/contactAdd');
const contactDelete = createAction('contacts/contactDelete');
const contactFilter = createAction('contacts/contactFilter');

const contactsAction = { contactAdd, contactDelete, contactFilter };
export default contactsAction;

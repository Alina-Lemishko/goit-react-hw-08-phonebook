export const contactSelector = state => state.contacts.items;
export const filterSelector = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const contacts = contactSelector(state);
  const filter = filterSelector(state);
  const normalizedFilter = filter?.toLowerCase();

  if (filter) {
    return contacts?.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
  return contacts;
};

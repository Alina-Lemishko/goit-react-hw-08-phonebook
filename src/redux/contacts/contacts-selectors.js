export const contactSelector = state => state.contacts;
export const filterSelector = state => state.filter;

export const getVisibleContacts = state => {
  const contacts = contactSelector(state);
  const filter = filterSelector(state);
  const normalizedFilter = filter.toLowerCase();

  if (filter) {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
  return contacts;
};

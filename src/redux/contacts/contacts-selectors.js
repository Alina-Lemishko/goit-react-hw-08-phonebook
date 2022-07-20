export const contactSelector = state => state.contacts.items;
export const filterSelector = state => state.filter.filter;
export const getLoading = state => state.contacts.loading;
export const getError = state => state.contacts.error;

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

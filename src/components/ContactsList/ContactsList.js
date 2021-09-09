import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactsList.module.css';
import { contactsSelectors, contactsOperations } from './../../redux/contacts';
import styled from 'styled-components';

const ContactsList = () => {
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ name, id, number }) => (
        <li key={id} className={styles.contact}>
          <ContactBox className={styles.text}>
            <p className={styles.name}>{name}</p>
            <p className={styles.phone}>{number}</p>
          </ContactBox>
          <button
            className={styles.removeBtn}
            type="button"
            onClick={() => dispatch(contactsOperations.removeContactOperation(id))}
          >
            Remove contact
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;

const ContactBox = styled.div``;
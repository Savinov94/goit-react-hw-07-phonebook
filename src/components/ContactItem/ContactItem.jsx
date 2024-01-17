import React from 'react';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <li className={css.contactsItem}>
    <p className={css.contactsText}>
      {name}: {number}
    </p>
    <button
      className={css.contactsButton}
      type="button"
      onClick={() => {
        onDeleteContact(id);
      }}
    >
      🗑️
    </button>
  </li>
);

export default ContactItem;

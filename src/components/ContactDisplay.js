import React from 'react';
import styled from '@emotion/styled';

function ContactDisplay({ contacts = [], ...props }) {
  return (
    <ul {...props}>
      {contacts.map(({ name, phone, address }, idx) => (
        <li key={idx}>
          <h4>{name}</h4>
          <p>
            <a href={`tel:${phone}`}>{phone}</a>
          </p>
          <small>{address}</small>
        </li>
      ))}
    </ul>
  );
}

export default styled(ContactDisplay)`
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  h4 {
    margin: 0;
  }
  p {
    margin: 0;
  }
  a {
    font-weight: bold;
  }
  li {
    margin-bottom: 1em;
  }
`;

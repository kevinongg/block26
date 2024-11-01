
// Wrote this code at first but it doesn't work
  const ContactRow = ({ contact }) => {
    return (
      
        <tr>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
        </tr>
      
    );
  };

  export default ContactRow
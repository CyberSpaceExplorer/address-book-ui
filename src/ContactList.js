import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const ContactList = () => {

    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cookies] = useCookies(['XSRF-TOKEN']);

    useEffect(() => {
        setLoading(true);

        fetch('api/contacts')
            .then(response => response.json())
            .then(data => {
                setContacts(data);
                setLoading(false);
            })
    }, []);

    const remove = async (id) => {
        await fetch(`/api/contact/${id}`, {
            method: 'DELETE',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // }
            headers: {
                'X-XSRF-TOKEN': cookies['XSRF-TOKEN'],
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(() => {
            let updatedContacts = [...contacts].filter(i => i.id !== id);
            setContacts(updatedContacts);
        });
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    const contactList = contacts.map(contact => {
        return <tr key={contact.id}>
            <td style={{whiteSpace: 'nowrap'}}>{contact.name}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.emailAddress}</td>
            <td>{contact.addressType}</td>
            <td>{contact.defaultAddress}</td>
            <td>{contact.website}</td>
            <td>{contact.messengerAccount}</td>
            <td>
                <ButtonGroup>
                    <Button size="sm" color="primary" tag={Link} to={"/contacts/" + contact.id}>Edit</Button>
                    <Button size="sm" color="danger" onClick={() => remove(contact.id)}>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    });

    return (
        <div>
            <AppNavbar/>
            <Container fluid>
                <div className="float-end">
                    <Button color="success" tag={Link} to="/contacts/new">Add Contact</Button>
                </div>
                <h3>Address Book</h3>
                <Table className="mt-4">
                    <thead>
                    <tr>
                        <th width="20%">Name</th>
                        <th width="20%">Phone Number</th>
                        <th>Email</th>
                        <th width="20%">Address Type</th>
                        <th width="20%">Default Address</th>
                        <th>Website</th>
                        <th>Messenger</th>
                        <th width="10%">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contactList}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ContactList;
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

const ContactEdit = () => {
    const initialFormState = {
        name: '',
        phoneNumber: '',
        emailAddress: '',
        addressType: '',
        defaultAddress: '',
        postalCode: '',
        website: '',
        messengerAccount: ''
    };
    const [contact, setContact] = useState(initialFormState);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id !== 'new') {
            fetch(`/api/contact/${id}`)
                .then(response => response.json())
                .then(data => setContact(data));
        }
    }, [id, setContact]);

    const handleChange = (event) => {
        const { name, value } = event.target

        setContact({ ...contact, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await fetch('/api/contact' + (contact.id ? '/' + contact.id : ''), {
            method: (contact.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        });
        setContact(initialFormState);
        navigate('/contacts');
    }

    const title = <h2>{contact.id ? 'Edit Contact' : 'Add Contact'}</h2>;

    return (<div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={contact.name || ''}
                               onChange={handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="phoneNumber">Phone</Label>
                        <Input type="text" name="phoneNumber" id="phoneNumber" value={contact.phoneNumber || ''}
                               onChange={handleChange} autoComplete="phoneNumber"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="emailAddress">Email</Label>
                        <Input type="text" name="emailAddress" id="emailAddress" value={contact.emailAddress || ''}
                               onChange={handleChange} autoComplete="emailAddress"/>
                    </FormGroup>
                    <div className="row">
                        <FormGroup className="col-md-4 mb-3">
                            <Label for="addressType">Address Type</Label>
                            <Input type="text" name="addressType" id="addressType" value={contact.addressType || ''}
                                   onChange={handleChange} autoComplete="addressType"/>
                        </FormGroup>
                        <FormGroup className="col-md-5 mb-3">
                            <Label for="defaultAddress">Default Address</Label>
                            <Input type="text" name="defaultAddress" id="defaultAddress" value={contact.defaultAddress || ''}
                                   onChange={handleChange} autoComplete="defaultAddress"/>
                        </FormGroup>
                        <FormGroup className="col-md-3 mb-3">
                            <Label for="website">Website</Label>
                            <Input type="text" name="website" id="website" value={contact.website || ''}
                                   onChange={handleChange} autoComplete="website"/>
                        </FormGroup>
                        <FormGroup className="col-md-3 mb-3">
                            <Label for="messengerAccount">Messenger</Label>
                            <Input type="text" name="messengerAccount" id="messengerAccount" value={contact.messengerAccount || ''}
                                   onChange={handleChange} autoComplete="messengerAccount"/>
                        </FormGroup>
                    </div>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/contacts">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
};

export default ContactEdit;
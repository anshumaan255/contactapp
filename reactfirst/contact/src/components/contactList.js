import React from 'react';

const ContactList = (props) => {
    console.log(props);

    const renderContactList = props.contacts.map((contact)=>{
        return (
            <div className="item">
                <div className="contact">
                    <div className="header">{contact.name}

                    </div>
                </div>
            </div>
        )
    })
    return(
        <div className="ui celled list">
            Contact List
        </div>
    );
};

export default ContactList;
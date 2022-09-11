import React from "react";
import user from "../images/user.png";
const ContactCard = (props) => {
  
  const { id, name, email } = props.contact;
  return (
    <>
      <div
        className="contact-item"
        style={{ width: "100%", height: "fit-content", display: "flex", justifyContent: 'flex-start', alignItems: 'center', position: 'relative', margin: '20px 0' }}
      >
        <div>
          <img className="ui avatar image" src={user} alt="user" />
        </div>
        <div>
          <div className="contact" style={{ marginLeft: '10px' }}>
            <p style={{ fontWeight: 'bold', margin: '0' }}>{name}</p>
            <p style={{ fontWeight: 'thin', margin: '0' }}>{email}</p>
          </div>
        </div>
        <div style={{ position: 'absolute', right: '0' }}>
          <i
            className="trash alternate outline icon"
            style={{ color: "red", fontSize: '20px' }}
            onClick={() => props.clickHandler(id)}
          ></i>
        </div>
      </div>
      <hr />
    </>
    //      <div className="item">
    //      <img className="ui avatar image"src ={user} alt ="user" />

    //     <div className="contact">
    //         <div className="header">{name}
    //         <div>{email}</div>
    //         </div>
    //     </div>
    //     <i className="trash alternate outline icon"
    //     style={{color: "red", marginTop:"7px"}}></i>
    // </div>
  );
};

export default ContactCard;

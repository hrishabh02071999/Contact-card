import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import Contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
  key={contact.id}
  name={contact.name}
  img={contact.imgURL}
  phone={contact.phone}
  email={contact.email}
  />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7K7ai3isDgUelSidYFtr8M4mTetmFlodHBSUWPtVoT0nwMxsjkw&s" />
      {Contacts.map(createCard)}
    </div>
  );
}

export default App;

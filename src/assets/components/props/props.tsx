import Card from "./card";
import contacts from "./contacts";


function creatCard(contact){
      return (<Card 
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
      />)
}


function Props() {
  return (
    <div>
      <h1>My Contact</h1>
      {contacts.map(creatCard)}
    </div>
  );
}

export default Props;
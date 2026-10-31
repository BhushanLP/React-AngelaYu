import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Card from './assets/components/props/card.tsx';
import contacts from './assets/components/props/contacts.ts';
import './index.css';

function creatCard(contact){
      return <Card 
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
      />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <KeeperApp /> */}
      <h1>My Contact</h1>
      {contacts.map(creatCard)}
      {/* <Card name="BEyonce" 
          tel="+123 456 789" 
          img="https://cdn.britannica.com/59/204159-050-5055F2A9/Beyonce-2013.jpg"
          alt="beyance"
          email="beyance.email.com"
          />   */}
    {/* <Card name={contacts[0].name} 
          tel={contacts[0].imgURL} 
          img={contacts[0].phone} 
          alt="The Rock"
          email={contacts[0].email} 
          />  
    <Card name={contacts[1].name} 
          tel={contacts[1].imgURL} 
          img={contacts[1].phone} 
          alt="The Rock"
          email={contacts[1].email} 
          />  
    <Card name={contacts[2].name} 
          tel={contacts[2].imgURL} 
          img={contacts[2].phone} 
          alt="The Rock"
          email={contacts[2].email} 
          />    */}
    
  </StrictMode>,
)

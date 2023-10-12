import { useState } from 'react';
import './App.css';
import ContactList from './components/contactList';
import SelectedContact from './components/SelectedContact';

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    {selectedContactId ? (
      <SelctedContact selectedContactId={setSelectedContactId}/>
    ) : ( 
      <ContactList setSelectedContactId={setSelectedContactId}/>
    )}
    </>
  )
}

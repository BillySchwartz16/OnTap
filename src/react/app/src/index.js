import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello';
import ItemCard from './ItemCard';

const contactList = [
  { name: 'John Smith', address: '123 Main Street', phone: '(123) 456-7890' },
  { name: 'Jane Doe', address: '456 Park Avenue', phone: '(987) 654-3210' },
  { name: 'Bob Johnson', address: '789 Elm Street', phone: '(246) 801-3579' },
  { name: 'Alice Williams', address: '321 Maple Road', phone: '(369) 741-5025' },
  { name: 'Michael Brown', address: '159 Oak Lane', phone: '(753) 894-1230' },
  { name: 'John Smith', address: '123 Main Street', phone: '(123) 456-7890' },
  { name: 'Jane Doe', address: '456 Park Avenue', phone: '(987) 654-3210' },
  { name: 'Bob Johnson', address: '789 Elm Street', phone: '(246) 801-3579' },
  { name: 'Alice Williams', address: '321 Maple Road', phone: '(369) 741-5025' },
  { name: 'Michael Brown', address: '159 Oak Lane', phone: '(753) 894-1230' },
  { name: 'John Smith', address: '123 Main Street', phone: '(123) 456-7890' },
  { name: 'Jane Doe', address: '456 Park Avenue', phone: '(987) 654-3210' },
  { name: 'Bob Johnson', address: '789 Elm Street', phone: '(246) 801-3579' },
  { name: 'Alice Williams', address: '321 Maple Road', phone: '(369) 741-5025' },
  { name: 'Michael Brown', address: '159 Oak Lane', phone: '(753) 894-1230' },
  { name: 'John Smith', address: '123 Main Street', phone: '(123) 456-7890' },
  { name: 'Jane Doe', address: '456 Park Avenue', phone: '(987) 654-3210' },
  { name: 'Bob Johnson', address: '789 Elm Street', phone: '(246) 801-3579' },
  { name: 'Alice Williams', address: '321 Maple Road', phone: '(369) 741-5025' },
  { name: 'Michael Brown', address: '159 Oak Lane', phone: '(753) 894-1230' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello />
    <div className="card-grid">
    {contactList.map(contact => (
        <ItemCard
          name={contact.name}
          address={contact.address}
          phone={contact.phone}
        />
      ))}
      </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

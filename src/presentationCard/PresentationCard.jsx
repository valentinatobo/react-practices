import React from 'react';
//import imagenAvatar from './assets/avatar.jpg'
import './PresentationCard.css';

function PresentationCard() {
  let name = 'Valen';
  return (
    <div className="presentaion-card">
      <img
        src="https://randomuser.me/api/portraits/women/57.jpg"
        alt="avatar"
        className="Avatar"
      />
      <h1>Hello, I'm {name}</h1>
    </div>
  );
}

export default PresentationCard;

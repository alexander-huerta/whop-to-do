import React from 'react';
import profile from '../profile.svg';
import Button from 'react-bootstrap/Button';
import CreateListEntryModal from './CreateListEntryModal.jsx';

const Header = ({addList}) => {
  return (

    <div className="header">
      <img src={profile} className="profile-pic" alt="profile"/>

      <h1> Lists</h1>

      <CreateListEntryModal addList={addList}/>


    </div>
  )


}

export default Header;





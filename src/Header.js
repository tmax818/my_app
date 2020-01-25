import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <div class="nav-wrapper">
    <ul class="nav nav-pills nav-justified">
            <li><a href="/">Home</a></li>
            <li><a href="calendar.php">Calendar</a></li>
            <li><a href="events.php">Events</a></li>
            <li><a href="rental.php">Rental</a></li>
            <li><a href="members.php">Members</a></li>
            <li><a href="join.php">Join</a></li>
            <li><a href="gallery.php">Gallery</a></li>
            <li><a href="sponsors.php">Donor</a></li>
            <li><a href="contact.php">Contacts</a></li>
    </ul> 
</div>
  );
}

export default Header;

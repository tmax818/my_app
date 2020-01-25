import React from 'react';
import logo from './logo.svg';
import './App.css';

function Footer() {
  return (
<div class="footer-wrapper">
      <div class="container">
      <div class="row">
        <div class="col-lg-4">
            <h2>Menu</h2>
            <ul class="footernav">
            <li><a href="/">Home</a></li>
            <li><a href="calendar.php">Calendar</a></li>
            <li><a href="events.php">Events</a></li>
            <li><a href="rental.php">Rental</a></li>
            <li><a href="members.php">Members</a></li>
            <li><a href="join.php">Join</a></li>
            <li><a href="gallery.php">Gallery</a></li>
            <li><a href="sponsors.php">Sponsors</a></li>
            <li><a href="donations.php">Donations</a></li>
            <li><a href="contact.php">Contacts</a></li>
            </ul>
        </div>
        <div class="col-lg-3">
            <h2>&nbsp;</h2>
            <p><a href="https://www.facebook.com/aguadulcewomensclub/" target="_blank"><img src="images/facebook.jpg" border="0"/></a></p>
        </div>

        <div class="col-lg-5">
            <h2>Newsletter Signup</h2>
            <form method="post" action="http://elists.esolutions.net/box.php" target="_blank">
            <div style={{marginBottom:10 + 'px'}}>
            <input name="first_name" type="text" id="Name" value="" placeholder="Name"/>
            </div>
            <div style={{marginBottom:10 + 'px'}}>
            <input name="email" type="text" id="email" value="" placeholder="Email"/>
            </div>
            <div style={{texAlign: 'right'}}>
            <input type="hidden" name="field[]"/>
            <input type="hidden" name="nlbox[]" value="553"/>
            <input type="hidden" name="funcml" value="add"/>
            <input type="hidden" name="p" value="1004"/>
            <input type="hidden" name="_charset" value="utf-8"/>
            <input type="submit" name="button" id="button" value="Send" class="btn btn-default"/>
            </div>
            </form>
        </div>
      </div>
        
        </div>
      </div>
  );
}

export default Footer;

import React, { Component } from 'react';
import Content from './Content';

class Home extends Component {
  render() {
    return (
      <div className = "content">

        <Content />

        <div className="info">
        <h1>Dentist Website</h1>
          <p>
          Welcome to my dentist website.
          At Dental Office, we pride ourselves in giving our undivided attention to
          each of our patients and present all treatment plans to create the
          treatment that best fits each individual patient.
          </p>

          </div>
      </div>
    );
  }
}

export default Home;

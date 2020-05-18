import React from 'react';

export const PhoneForm = (props) => <div className="ui form">
  <div className="inline fields">
    <div className="eight wide field">
      <input type="text" placeholder="Name" required />
    </div>
    <div className="five wide field">
      <input type="text" placeholder="Phone Number" required />
    </div>
    <div className="three wide field">
        <button type="button" className="ui primary button">Submit</button>
    </div>
  </div>
</div>
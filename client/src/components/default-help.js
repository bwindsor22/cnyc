import React from 'react';

class DefaultHelp extends React.Component{
    render() {
        return (
          <div>
          <p><span class="label">Status</span>
            <br />Referred to NYC Mortgage Helpline
            <br /><a href="www.nycmortgagehelpline.com">www.nycmortgagehelpline.com</a>
            <br /><a href="help@nycmortgagehelpline.com">help@nycmortgagehelpline.com</a>
            <br /><a href="tel:917-555-1122">917-555-1122</a>
          </p>
          <p>Please <a href="mailto:info@cnycn.org">contact us</a> if there is an error in the information above.</p>

          </div>
        )
    }
};


export default DefaultHelp;

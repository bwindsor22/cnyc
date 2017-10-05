import React from 'react';
import styles from './header-styles'

class Header extends React.Component{
    render() {
        return (
          <div>
            <h1> Check Case Status </h1>
            <div style={styles.grid}>
              <div>
                MENU
              </div>
              <div>
                Get Help
              </div>
            </div>
          </div>
        )
    }
};


export default Header;

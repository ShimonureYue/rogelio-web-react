import React from 'react';
import styles from './styles.css';

const Expirience = ({information}) => {
  console.log(styles);
    return (
      <div className='item-expirience'>
        item de exprience {information.startDate}
      </div>
    );
}

export default Expirience;
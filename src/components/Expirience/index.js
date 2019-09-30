import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind'

import { Row, Col } from 'react-flexbox-grid'; 

const cx = classNames.bind(styles);

const Expirience = ({information}) => {
  return (
    <div className={cx('expirience-item')}>
        <Row>
          <Col xs={12} md={3}>
            <span className={cx('position')}>{information.position}</span> <span className={cx('place')}>@{information.place}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <span className={cx('start')}>{information.start}</span> <span className={cx('end')}>{information.end}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p className={cx('description')}></p>{information.description}
          </Col>
        </Row>
    </div>
  );
}

export default Expirience;
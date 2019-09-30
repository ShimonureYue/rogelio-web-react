import React, { Component } from 'react';
import Expirience from '../../components/Expirience';
import { Grid, Row, Col } from 'react-flexbox-grid'; 
import { getExpirience, createItemsFromSheets} from '../../helpers';

import styles from './styles.scss';
import classNames from 'classnames/bind'
const cx = classNames.bind(styles);



class Principal extends Component{
  state = {
    expirience: []
  };

  componentDidMount() {
    this._loadAsyncData();
  }

  render () {
    // const expirience = this.state.expirience.map((value,index) => <Expirience information={value} />);
    return (
      <Grid>
        <Row className={cx('main')}>
          <Col xs={12} md={3} className={cx('left-bar')}>
          <div className={cx('item-left')}>
            Derecha
          </div>
          </Col>
          <Col xs={12} md={9} className={cx('right-bar')}>
            <Row>
              <Col xs={12} className={cx('item-right')}>
                {this.state.expirience.map((value,index) => <Expirience information={value} key={`expirience-${index}`} />)}
              </Col>
            </Row>
            
            
          </Col>
        </Row>
      </Grid>
    )
  };

  _loadAsyncData = () => {
    getExpirience().then(response => {
      this.setState({expirience: createItemsFromSheets(response)});
    });
  };
}

export default Principal;
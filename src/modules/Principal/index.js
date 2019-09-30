import React, { Component } from 'react';

import Expirience from '../../components/Expirience';

import { getExpirience, createItemsFromSheets} from '../../helpers';

class Principal extends Component{
  state = {
    expirience: []
  };

  componentDidMount() {
    this._loadAsyncData();
  }

  render () {
    const expirience = this.state.expirience.map((value,index) => <Expirience information={value} />);
    return (
      <div>
        Principal
        {expirience}
      </div>
    )
  };

  _loadAsyncData = () => {
    getExpirience().then(response => {
      this.setState({expirience: createItemsFromSheets(response)});
    });
  };
}

export default Principal;
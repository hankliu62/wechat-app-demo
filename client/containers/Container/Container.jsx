import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Language from '../../libs/Language';

import './Container.less';

class Container extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  componentWillMount() {
    Language.loadLanguage();
  }

  render() {
    const { children } = this.props;

    return (
      <div className="main-container">
        { children && children }
      </div>
    );
  }
}

export default Container;

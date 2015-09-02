import React from 'react';
import jQuery from 'jquery';

import 'jquery-minicolors';
import 'jquery-minicolors/jquery.minicolors.css';

const styles = {
  input: {
    fontFamily: 'Arial,sans-serif',
    fontSize: 14,
    width: '100%',
    lineHeight: '30px',
    border: '1px solid rgba(0,0,0,.07)',
    marginBottom: 10
  }
};

export default class Minicolors extends React.Component {
  componentDidMount() {
    const e = React.findDOMNode(this.refs.input);
    const settings = {
      theme: 'bootstrap',
      position: this.props.position || 'top left',
      change: (color) => this.props.onChange(color)
    }

    jQuery(e).minicolors(settings);
  }

  render() {
    return(
      <input
        type="text"
        ref="input"
        style={styles.input}
        value={this.props.value}/>
    );
  }
}

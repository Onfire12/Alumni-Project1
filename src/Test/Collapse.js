import React, {Component} from 'react';
import './Collapse.css';

class Collapse extends Component {
  state = {
    show: false
  }
  
  render() {
    const { show } = this.state;
    
    const className = 'collapse' + (show ? '' : ' collapse--hidden')
  
    const symbol = show ? '-' : '+'
    
    return (
      <div className={className}>
        <div className="collapse__title" onClick={() => this.setState({ show: !show })}>
          <span>{this.props.title} </span>
          <span>{symbol}</span>
        </div>
        <div className="collapse__body">{this.props.children}</div>
      </div>
    )    
  }
}

export default Collapse;
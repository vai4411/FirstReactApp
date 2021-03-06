import React from 'react';

class TopBar extends React.Component {

  render(){
  const {items} = this.props;
    return (
      <div>
        {items.map((data) => {
        return(
          <span className="topbar-sub-options">{data}</span>
        );
        })}
      </div>
    );
  }
}

export default TopBar;
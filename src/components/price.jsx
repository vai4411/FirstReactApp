import React from 'react';

class Price extends React.Component {

  render(){
  const {desc} = this.props;
    return (
      <div>
        {desc.map((data) => {
        return(
          <p>{data}</p>
        );
        })}
      </div>
    );
  }
}

export default Price;
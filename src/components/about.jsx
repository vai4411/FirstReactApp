import React from 'react';
import AboutSubMenu from './aboutSubMenu';

class About extends React.Component {

	render(){
		var menu= this.props.about.map(menu => {
            return (
                <AboutSubMenu aboutSubMenu={menu}/>
            );
        })
        return(
            <div className="about">
                <div  className="about-options">
                    {menu}
                </div>
                <div className="about-info">
                    Copyright @ Your Website 2020.
                </div>
            </div>
        );
    }
  }

  export default About;
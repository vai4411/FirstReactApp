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
            <div>
                <div>
                    {menu}
                </div>
                <div>
                    Copyright @ Your Website 2020.
                </div>
            </div>
        );
    }
  }

  export default About;
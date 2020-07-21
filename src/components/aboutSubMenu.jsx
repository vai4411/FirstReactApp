import React from 'react';

class AboutSubMenu extends React.Component{

    render(){

        var subHeading= this.props.aboutSubMenu.subHeading.map(data => {
            return(
                <li>
                    {data}
                </li>
            );
        })
        return(
            <div>
                <div>
                    {this.props.aboutSubMenu.heading}
                </div>
                <div>
                    {subHeading}
                </div>
            </div>
        );
    }
}

export default AboutSubMenu;
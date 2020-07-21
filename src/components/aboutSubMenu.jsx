import React from 'react';

class AboutSubMenu extends React.Component{

    render(){

        var subHeading= this.props.aboutSubMenu.subHeading.map(data => {
            return(
                <li className="about-sub-menu-list">
                    {data}
                </li>
            );
        })
        return(
            <div  class="about-menu">
                <div class="about-menu-heading">
                    {this.props.aboutSubMenu.heading}
                </div>
                <div className="about-sub-menu">
                    {subHeading}
                </div>
            </div>
        );
    }
}

export default AboutSubMenu;
import React from 'react';

class SingleIMG extends React.Component {
    render() { 
        return <React.Fragment>
        <img src={this.props.src} alt={this.props.caption}/>
        </React.Fragment>;
    }
}
 
export default SingleIMG;
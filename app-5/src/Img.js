import React, {Component} from 'react'

class Img extends Component{
    constructor(){
        super();

        this.state = {

        }
    }
    render(){
        return(
            <div>
                <img src={this.props.img1}/>
                <img src={this.props.url}/>
            </div>
        )
    }
}

export default Img
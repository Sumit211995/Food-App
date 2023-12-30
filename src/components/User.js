import React from "react";


class User extends React.Component {

    constructor(props){                       // constructor for getting props
        super(props);                         //always use super                                 
        
        //Creating state variable, in this state is a big object which contain all the the state variable

        this.state = {}
        
           
    }

    componentDidMount(){

    }

    render(){
        const {name, address} = this.props;         //destructure
        // const {count, count2} = this.state;


        return(
            <div>
                <h1>{name}</h1>
                <h1>Developer</h1>
                <h2>{address}</h2>
           </div>
        );
    }
}

export default User;
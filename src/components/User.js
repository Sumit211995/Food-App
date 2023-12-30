import React from "react";


class User extends React.Component {

    constructor(props){                       // constructor for getting props
        super(props);                         //always use super                                 
        
        //Creating state variable, in this state is a big object which contain all the the state variable

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "abc",
                avatar_url: "https://dummy-photo"
            }
        }
        
           
    }

   async componentDidMount(){
      const data = await fetch("https://api.github.com/users/Sumit211995");
      const json = await data.json();
      console.log(json);
      this.setState({
        userInfo: json,
      });
    }

    render(){
        const {name, location, avatar_url} = this.state.userInfo;         //destructure


        return(
            <div>
                <img className="w-60" src={avatar_url} />
                <h1>{name}</h1>
                <h1>Developer</h1>
                <h2>{location}</h2>
                
           </div>
        );
    }
}

export default User;
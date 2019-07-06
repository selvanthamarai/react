import React, { Component } from 'react';
import Button from './Button';

export default class SimpleContainer extends Component{

mymethod=()=>{

 
        fetch("https://api.github.com/users?since=135")
          .then(res => res.json())
          .then(
            (result) => {
                this.props.history.push({pathname: '/user',state:{result}})
              console.log(result)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
         
            }
          )
      }
    


    
    




render(){
  return (
      <div>




        <Button link={this.mymethod}/>  
      </div>
   
  );
}
}


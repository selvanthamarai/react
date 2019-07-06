import React,{Component} from 'react';
import List from './List'

export default class SimpleContainer extends Component{

//     state={
// items:{}
//     }

// componentDidReceiveProps(){
// this.setState({items:this.props.location.state.result})

// }
    // componentDidMount() {
    //     fetch("https://api.github.com/users?since=135")
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           this.setState({
    //             items: result
    //           });
    //           console.log(result)
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
         
    //         }
    //       )
    //   }
render(){
    console.log("==============",this.props)
    console.log("==============",this.state)
// this.setState({items:this.props.location.state.result})
    
  return (
   <div>


<List values={this.props}/>

   </div>
  );
}
}
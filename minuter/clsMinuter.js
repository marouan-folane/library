import { render } from "@testing-library/react";
import { Component } from "react";

 export default class ClsMinuter extends Component{
  constructor(props){
   super(props)
   this.state={
     nbr:0
   }
   this.interval=null
  }
  componentDidMount(){
   if(!this.interval){
      this.interval=setInterval(()=>{
         this.setState({
            nbr:this.state.nbr+1
         })
      },1000)
   }
  }
  componentDidUpdate(){
   if(this.state.nbr===10){
      clearInterval(this.interval)
      alert("nbr=10")
      this.initialiser()
     

      
   }
  }
  componentWillUnmount(){
   clearInterval(this.interval)
   this.interval=null
  }
  initialiser=()=>{
   this.setState({
      nbr:0
   })
  }
  continue=()=>{
   if(!this.interval){
      this.interval=setInterval(()=>{
         this.setState({
            nbr:this.state.nbr+1
         })
      },1000)
   }
  }
  stop=()=>{
   if(this.interval){
      clearInterval(this.interval)
      this.interval=null
   }
  }

  
   //---------------------------------
  
   

    render(){
      
        return(
           <div style={{marginLeft:"40%"}}>
           <h1>compteur:{this.state.nbr}</h1>
          <button onClick={this.initialiser}>initialiser</button>
          <button onClick={this.stop}>stop nbr</button>
          <button onClick={this.continue}>continue</button>



           </div>
        )
   }
}

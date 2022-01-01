import Textbox from './Textbox'
import Messagebox from './Messagebox'
import Counter from './Counter';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {queue:{},sortedqueue:{},goclicked:false};
  }
  
  handleCallbackInsert =(obj)=>{
    this.setState(prevState => {
      let queue = Object.assign({}, prevState.queue); // creating copy of state variable jasper
      queue[obj.timestamp] = {'time':obj.time,'message':obj.message}; // update the name property, assign a new value                 
      return {
         queue
      }; // return new object jasper object
   })
   console.log(obj);
  }
  handleGo =()=>{
    let keysnow;
    this.setState({goclicked:true});
    keysnow=Object.keys(this.state.queue).sort();
  keysnow.forEach(element => {
    
    setTimeout(()=>{  this.setState(prevState => {
      let sortedqueue = Object.assign({}, prevState.sortedqueue); // creating copy of state variable jasper
      sortedqueue[element] =
       {'time':this.state.queue[element].time,
       'message':this.state.queue[element].message}; // update the name property, assign a new value                 
      return {
         sortedqueue
      }; // return new object jasper object
   })},element-Date.now());
  })}
  handleReset =()=>{
   this.setState({goclicked:false});
   this.setState({sortedqueue:{}});
   this.setState({queue:{}});
  }
  render (){
    return (
      <div className="App">
        <Counter count={Object.keys(this.state.queue).length-
        Object.keys(this.state.sortedqueue).length} />
        <Messagebox queue={this.state.sortedqueue}/>
        <Textbox handleCallback={this.handleCallbackInsert}/>
        {!this.state.goclicked && 
        < input style={{position:'absolute',left:'45%',bottom: '20%'}}
         type="button" value="Go" onClick={this.handleGo}/>}
        {this.state.goclicked && Object.keys(this.state.sortedqueue).length !== 
        Object.keys(this.state.queue).length &&
        <label style={{position:'absolute',left:'25%',bottom: '20%'}}>
          Wait for messages</label> }
        <input style={{position:'absolute',bottom: '20%'}} type="button" value="Reset" onClick={this.handleReset}/>
        {this.state.goclicked && Object.keys(this.state.sortedqueue).length === 
        Object.keys(this.state.queue).length && 
        <label style={{position:'absolute',left:'10%',bottom: '20%'}}>
          No message yet to receive, please reset</label>}
      </div>
    );
  }
}

export default App;

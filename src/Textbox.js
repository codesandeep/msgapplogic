import React, {Component} from "react"
import './App.css'
class Textbox extends Component {
        constructor(props) {
                super(props);
                this.state = {msgValue: '',timeValue:''};
                this.handleMessageChange = this.handleMessageChange.bind(this);
                this.handleTimeChange = this.handleTimeChange.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
              }
              handleMessageChange(event) {
                this.setState({msgValue: event.target.value});
              }
              handleTimeChange(event) {
                this.setState({timeValue: event.target.value});
              }
              handleSubmit(event) {
                let timestamp=+ new Date(this.state.timeValue);
                let obj= {'message':this.state.msgValue,
                'time':this.state.timeValue,'timestamp':timestamp};
                this.props.handleCallback(obj);
                event.preventDefault();
              }
        render (){
                return (<div style={ {position:'absolute',bottom: '10%',left:'25%'}}>
                         <label > Enter message </label> 
                         < input type="text" style={{width:'25%'}} name="message" 
                         value={this.state.msgValue} onChange={this.handleMessageChange} />  
                         <label > Enter time  </label> 
                         < input type="text" name="time" placeholder="YYYY-MM-DDTHH:MM "value={this.state.timeValue} 
                         onChange={this.handleTimeChange}/>   
                         < input type="button" value="Send" onClick={this.handleSubmit}/>
                </div>
                        
                            );  
        }
}
export default Textbox;

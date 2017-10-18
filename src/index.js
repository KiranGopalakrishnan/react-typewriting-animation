import React,{Component} from 'react';
var textArray=[];
class Typewriter extends Component{
constructor(){
  super();
  this.state={
    text:''
  }
}
componentDidMount(){
    var i=0;
    textArray = (this.props.text).split('');
    var timer = setInterval(function(){
      var selfe=this;
      if(i<textArray.length){
          selfe.setState(function(prevState,props){
            return {text:prevState.text+textArray[i]}
          });
            }else{
        clearInterval(timer);
      }
    i++;
  },this.props.time);
}
render(){
    return(<span>{this.state.text}</span>);
  }
}
export default Typewriter;

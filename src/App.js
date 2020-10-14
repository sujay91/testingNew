import React,{Component, Fragment} from 'react';

import './App.css';

import axios from "axios";

class  App extends Component {

constructor(props){
  super(props);
}

  state={
    val:'',
    res:'',
    valdrp:'',
    drpvals:[],
    valax:'',
    val_ax_all:''
  }
 
onClickHandler=()=>{
 // console.log(this.state.val);
  let str = this.state.val;
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      this.setState({res:'false'});
        return false;
        
    }
  }
  this.setState({res:'true'});
  return true;
}

Updateval=(e)=>{
  this.setState({val:e.target.value});
  console.log(this.state.val);
  this.setState({res:''});
}

Updatevaldrp=(e)=>{
  this.setState({valdrp:e.target.value});
 
}

onClickHandlerdrp =()=>{
  var newdrp={};
  
  console.log(this.state.drpvals);
  let obj={name:'hello',value:this.state.valdrp};
  newdrp=[
    ...this.state.drpvals,
    obj
  ];
 // console.log(newdrp);
  this.setState({drpvals:newdrp});
//  console.log(this.state.drpvals);
  this.setState({valdrp:'' });
}

Updatevalax=(e)=>{
  this.setState({valax:e.target.value});
}


onClickHandlerax=()=>{
axios.get('https://jsonplaceholder.typicode.com/users/'+this.state.valax)
.then(res=>{
  console.log(res.data);
  this.setState({val_ax_all:res.data.name });
  this.setState({valax:'' });
}).catch(err=>{
  console.log(err);
})

}

  render(){
    let drp_val='';
   // if(this.state.drpval!=[] && this.state.drpval!=null)
   // {
//console.log(this.state.drpval);

 


   

    return (
      <Fragment>
        <label className="Labeloi">EXAVALU</label>
      <div className="appdiv">
       <label className="Sujay">Please enter your name here:</label>
       <input type="text" value={this.state.val} onChange={this.Updateval}></input>
       <br/>
       
       <button className="Bhola" onClick={this.onClickHandler} > Check for palindrome</button>
       {
         (this.state.res!=='')?<div>{(this.state.res=='true')?<div>Yes</div>:<div>no</div>}</div>:null
       }
</div>
<div className="appdiv">
     
      
      <label className="Sujay">Please enter the value to add to dropdown:</label>
      <input type="text" value={this.state.valdrp} onChange={this.Updatevaldrp}></input>
      <br/>
      <button className="Bhola" onClick={this.onClickHandlerdrp} > Add to dropdown</button>
    <br/>
      <select>
        
        {this.state.drpvals.map((obj)=>{
  return(
    <option  value={obj.value}>{obj.value}</option>
  )
})
}
      </select>

</div>
     
      <div className="appdiv">
      <label className="Sujay">Please select the ID to view data</label>
      <input type="text" value={this.state.valax} onChange={this.Updatevalax}></input><br/>
      <button className="Bhola" onClick={this.onClickHandlerax} > Get Details</button><br/><br/>
       <textarea value={this.state.val_ax_all} readOnly></textarea>
      </div>
      </Fragment>
    );
  }
  
}

export default App;

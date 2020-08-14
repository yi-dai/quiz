import React, { Component } from 'react';

class Home extends Component {
  state = {
      kele1:0,
      kele2:0,
      kele3:0,
      kele4:0,
      kele5:0,
      kele6:0,
      addStatus:true,

  }
  
  handleAddToList = (para) => {
      
      /*
      let information={
          method:"POST",
          header:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
              name:para,
              quantity:this.state.para,
          })
      };
      fetch("/list", information).then((res) => {
          if(res.status >= 200 && res.status < 300) {
            this.setState({addStatus:true,});
          }else {
            this.setState({addStatus:false,});
          }
      });
      */
  }
  


  render() {
    return (
      <div>
          <h2>可乐1</h2>
          <h3>单价：1元/瓶</h3>
          <button className="addToList" onClick={this.handleAddToList('可乐1')} disabled={!this.state.addStatus}>+</button>
          <h2>可乐2</h2>
          <h3>单价：1元/瓶</h3>
          <button className="addToList" onClick={this.handleAddToList('可乐2')} disabled={!this.state.addStatus}>+</button>
          <h2>可乐3</h2>
          <h3>单价：1元/瓶</h3>
          <button className="addToList" onClick={this.handleAddToList('可乐2')} disabled={!this.state.addStatus}>+</button>
          <h2>可乐4</h2>
          <h3>单价：1元/瓶</h3>
          <button className="addToList" onClick={this.handleAddToList('可乐2')} disabled={!this.state.addStatus}>+</button>
          <h2>可乐5</h2>
          <h3>单价：1元/瓶</h3>
          <button className="addToList" onClick={this.handleAddToList('可乐2')} disabled={!this.state.addStatus}>+</button>
          <h2>可乐6</h2>
          <h3>单价：1元/瓶</h3>
          <button className="addToList" onClick={this.handleAddToList('可乐2')} disabled={!this.state.addStatus}>+</button>
      </div>
    );
  }
}

export default Home;
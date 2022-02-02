import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue : "",
      amountReceived : "",
      changeDue : "",
      twenties : "",
      tens : "",
      fives : "",
      ones : "",
      quarters : "",
      dimes : "",
      nickels : "",
      pennies :  "",      
    };
    this.updateState = this.updateState.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  updateState(e){
    this.setState({
        [e.target.name] : Number([e.target.value])
    })
  };

  calculate(){
    const amountDue = (this.state.amountDue);
    const amountReceived = (this.state.amountReceived);
    let changeDue = (amountReceived - amountDue);
   
    if( amountDue > amountReceived){
     this.setState({ changeDue :"Additional money owed" });
    }else{
       this.setState({changeDue : changeDue});
       
       changeDue = (changeDue * 100);

      const twenties = Math.floor( changeDue / 2000);
      let remainder = changeDue - twenties * 2000;
      this.setState( {twenties : twenties} );

      const tens = Math.floor( remainder / 1000);
       this.setState({tens : tens});

      const fives = Math.floor( remainder / 500);
      remainder = remainder - fives * 500;
       this.setState({fives:fives});

      const ones = Math.floor( remainder / 100);
      remainder = remainder - ones * 100;
      this.setState({ones:ones})

      const quarters = Math.floor( remainder / 25);
      remainder = remainder - quarters * 25;
      this.setState({quarters:quarters})

      const dimes = Math.floor( remainder / 10);
      remainder = remainder - dimes * 10;
      this.setState({ dimes : dimes}); 

      const nickels = Math.floor( remainder / 5);
      remainder = remainder - nickels * 5;
       this.setState({nickels:nickels});

      const pennies = Math.floor( remainder);
       this.setState({pennies:pennies});

      
    }
  }

  render() {
    return (
      <div >
        <h1>Change Calculator</h1>
          <form >
            <div className="panel-heading" >Enter Information</div>
            <div className="form-group ">
              <label>How much is due?</label>
              <input name= "amountDue" type="number"   value={this.state.amountDue} onChange={this.updateState} />
            </div>

            <div className="form-group ">
                <label>How much was received?</label>
                <input name="amountReceived"  type="number"  value={this.state.amountReceived} onChange={this.updateState} />
              </div> 
              <button className="btn btn-primary" name="submit" type="submit" onClick={(e) => {
              e.preventDefault()
              this.calculate()}}>Calculate</button>
            
          </form>
      
           <h1>The total change due is ${this.state.changeDue} </h1>
          <div >
            <div>
          
                <h1 >Twenties</h1>
                <p className="change">{this.state.twenties}</p>
           
             
                <h1 >Tens</h1>
                <p className="change">{this.state.tens}</p>
          
             
                <h1 >Fives</h1>
                <p className="change">{this.state.fives}</p>
              
           
                <h1 >Ones</h1>
                <p className="change">{this.state.ones}</p> 
             
            </div> 
           <div className="text-center" name="coins">
       
                  
                    <h1 >Quarters</h1>
                    <p className="change">{this.state.quarters}</p>
               
                
                    <h1 >Dimes</h1>
                    <p className="change">{this.state.dimes}</p>
                 
                
                    <h1 >Nickels</h1>
                    <p className="change">{this.state.nickels}</p>
                
                 
                    <h1 >Pennies</h1>
                    <p className="change">{this.state.pennies}</p>
                 
            </div>
          </div>

          
       
      </div>
      
    );
  }
}

export default App;

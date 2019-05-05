import React, {Component} from 'react';
import {textToMorse, morseToText} from '../Utilities/index'

class Body extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            valueMorse: '',
            isMorse:false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    clearField(){
        if(this.state.isMorse){
            this.setState({
                value:""
            })
        }else{
            this.setState({
                valueMorse:""
            })
        }
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            valueMorse: textToMorse(this.state.value),
            value:morseToText(this.state.valueMorse)
        });
        console.log(this.state)
    }

    render(){
        return(
        <div>
            <div className="Body-header">
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Texto</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" 
                                    aria-describedby="emailHelp" placeholder="Enter Text"
                                    name="value"
                                    value={this.state.value} onChange={this.handleChange}
                                    disabled={this.state.isMorse}/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Morse</label>
                            <input type="text" class="form-control" id="exampleInputPassword1"  name="valueMorse"
                                placeholder="Morse" value={this.state.valueMorse} onChange={this.handleChange} disabled={!this.state.isMorse}/>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"
                                name="isMorse"
                                checked={this.state.isGoing}
                                onChange={this.handleChange}/>
                            <label class="form-check-label" for="defaultCheck1">
                                Morse
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    Creadores
                </div>
                <div class="card-body">
                    <h5 class="card-title">Valentine Alejandro Ruiz Ortiz</h5>
                    <h5 class="card-title">Kevin Kristop Morales Barranco</h5>
                </div>
            </div>
        </div>
        );
    }
}

export default Body;

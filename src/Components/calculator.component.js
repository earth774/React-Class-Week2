import React from 'react';

class Cal extends React.Component {
    constructor(){
        super();
        this.state = {str1:"sutthipong",
                    str2:"Nuanma"};

    }

    setAge(e){
    const age = e.target.value;
    this.setState({str1:age});
    }
    setAge1(e){
    const age = e.target.value;
    this.setState({str2:age});
    }

    render(){
        console.log(this.props);
        return (
            <div>
                <div > Input1 is {this.state.str1?this.state.str1:'กรุณากรอกข้อมูลช้อง 1 '} </div>
                <div > Input2 is {this.state.str2?this.state.str2:'กรุณากรอกข้อมูลช้อง 2'} </div>
                <div > result is {this.state.str1 + this.state.str2} </div>
                <input onChange={this.setAge.bind(this)} placeholder="Input 1" />
                <input onChange={this.setAge1.bind(this)} placeholder="Input 2" />
                
                
            </div>
        );
    }
}

{/*
input 2 
show state 1 + 2  string
*/}

export default Cal;
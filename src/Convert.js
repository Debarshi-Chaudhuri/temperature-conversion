import React,{Component} from 'react'
class Convert extends Component{
    constructor(props){
        super(props);
        this.state={C:"",F:""}
    }
    change1=(event)=>{
        this.setState({C:event.target.value,F:(event.target.value*9/5)+32})
    }
    change2=(event)=>{
        this.setState({F:event.target.value,C:((5/9)*(event.target.value-32))})
    }
    render(){
        return(
            <div>
                <p>Celcius : <input onChange={this.change1} type="number" value={this.state.C} placeholder="Celcius"/></p>
                <p>Fahrenheit : <input onChange={this.change2} type="number" value={this.state.F} placeholder="Fahrenheit"/></p>
            </div>
        )
    }
}
export default Convert;
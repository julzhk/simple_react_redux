import React, {Component} from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from "react-redux";

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr}/>
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add More" clicked={this.props.onAddCounter}/>
                <CounterControl label="Subtract More" clicked={this.props.onSubtractCounter}/>
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.stored}
                </ul>
                {this.props.storedResults.map(result =>{
                return(<li
                    key={result.id}
                    onClick={this.props.onDeleteResult}>
                    {result.value}
                </li>)
                })}

            </div>
        );
    }
}

//specify what state vars & actions that are needed in this component
// property in this compnent name here is ctr
const mapStateToProps = (state) => {
    return {
        ctr: state.counter,
        storedResults: state.results
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({type: 'ADD', payload: 1}),
        onDecrementCounter: () => dispatch({type: 'ADD', payload: -1}),
        onAddCounter: () => dispatch({type: 'ADD', payload: 10}),
        onSubtractCounter: () => dispatch({type: 'ADD', payload: -10}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: () => dispatch({type: 'DELETE_RESULT',payload:null}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

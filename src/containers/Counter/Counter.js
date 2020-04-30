import React, {Component} from 'react';
import * as actionTypes from '../../store/actions/actions'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from "react-redux";

import {increment,storeResult,deleteResult } from '../../store/actions/actions'
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
                <button onClick={()=>(this.props.onStoreResult(this.props.ctr))}>Store Result</button>
                <ul>
                    {this.props.stored}
                </ul>
                {this.props.storedResults.map(result => {
                    return (<li
                        key={result.id}
                        onClick={() => (this.props.onDeleteResult(result.id))}>
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
        ctr: state.counterState.counter,
        storedResults: state.resultState.results
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch(increment(1)),
        onDecrementCounter: () => dispatch(increment(-1)),
        onAddCounter: () => dispatch(increment(10)),
        onSubtractCounter: () => dispatch(increment(-10)),
        onStoreResult: (result) => dispatch(storeResult(result)),
        onDeleteResult: (id) => dispatch(deleteResult(id)        ),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

import './style.css'
import React from 'react'
import {BrowserRouter, Link, Route } from 'react-router-dom'
import Counter from './Counter'

class Counter extends React.Component{
    constructor(props){
        super(props);
            this.state={
                counters:[{
                    id:0,
                    created: Date(),
                    updated:0,
                    counter:0
                }]
            }
    }

    increment=(id, event)=>{
        const index = this.state.counters.findIndex((counter)=>{
            return counter.id === id
        });

        const counter = Object.assign({},this.state.counters[index]);
        counter.counter --;
        counter.updated = Date();
        const counters = Object.assign([], this.state.counters);
        counters[index] = counter;
        this.setState({counters:counters});
        return;
    }

    decrement=(id, event)=>{
        const index = this.state.counters.findIndex((counter)=>{
            return counter.id === id
        });

        const counter = Object.assign({},this.state.counters[index]);
        counter.counter --;
        counter.updated = Date();
        const counters = Object.assign([], this.state.counters);
        counters[index] = counter;
        this.setState({counters:counters});
        return;
    }
}

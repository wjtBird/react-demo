import React from 'react'

import Child from './Child';
import './index.less';

import {Button,Input} from 'antd';

export default class Life extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }


    handleAdd = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    handleClick() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        let style = {
            padding: 50
        };
        return (

            <div className='content'>
                <p>React 生命周期介绍</p>
                <Input maxLength={10} />
                <p>{this.state.count}</p>
                <Button  onClick={this.handleAdd} >点击一下0</Button>
                <button onClick={this.handleAdd}>点击一下1</button>
                <button onClick={this.handleClick.bind(this)}>点击一下2</button>
                <Child name={this.state.count}/>
            </div>
        );


    }


}
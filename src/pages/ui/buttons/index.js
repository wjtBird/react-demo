import React from "react";
import {Card, Button, Radio} from 'antd';

export default class Buttons extends React.Component{

    state = {
        loading: true,
        switchText:'关闭',
        size:'default'
    };
    switchLoading = () => {

        this.setState({
            loading: !this.state.loading,
            switchText:this.state.switchText==='关闭'?'打开':'关闭'
        })
    };

    switchSize = (e) => {
        this.setState({
            size: e.target.value
        })
    };


    render() {
        return (
            <div>

                <Card title={'基础按钮'}>
                    <Button type={'primary'}>primary</Button>
                    <Button>nothing</Button>
                    <Button type={'danger'}>danger</Button>

                    <Button type={'dashed'}>dashed</Button>
                    <Button disabled>disabled</Button>

                </Card>

                <Card title={'图形按钮'}>
                    <Button type={'primary'} icon={'plus'}>plus</Button>
                    <Button icon={'edit'}>edit</Button>
                    <Button icon={'delete'}>delete</Button>
                    <Button shape={'circle'} icon={'search'}/>

                    <Button type={'dashed'} icon={'search'}>search</Button>
                    <Button disabled icon={'download'}>download</Button>

                </Card>


                <Card title={'Loading 按钮'}>
                    <Button type={'primary'} icon={'plus'} loading={this.state.loading}>确定</Button>
                    <Button type={'primary'} shape={'circle'} loading={this.state.loading}/>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button shape={'circle'} loading={this.state.loading}/>

                    <Button type={'primary'} onClick={this.switchLoading}>{this.state.switchText}</Button>

                </Card>

                <Card title={'按钮组'}>

                    <Button.Group>
                        <Button type={'primary'} icon={'left'} style={{marginRight:0}}>后退</Button>
                        <Button type={'primary'} icon={'right'}>前进</Button>
                    </Button.Group>

                </Card>

                <Card title={'大小按钮'}>

                    <Radio.Group value={this.state.size} onChange={this.switchSize}>
                        <Radio value={'large'}>大</Radio>
                        <Radio value={'default'}>中</Radio>
                        <Radio value={'small'}>小</Radio>

                    </Radio.Group>

                    <Button size={this.state.size}  type={'primary'}>primary</Button>
                    <Button size={this.state.size} >nothing</Button>
                    <Button size={this.state.size}  type={'danger'}>danger</Button>

                    <Button size={this.state.size}  type={'dashed'}>dashed</Button>
                    <Button size={this.state.size}  disabled>disabled</Button>

                </Card>
            </div>
        );
    }



}
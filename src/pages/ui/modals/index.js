import React from "react";
import {Card, Button, Modal} from 'antd';

export default class Modals extends React.Component{

    state = {
        showModal1:false,
        showModal2:false,
        showModal3:false,
        showModal4:false,
    };

    handleOpen = (type) => {

        this.setState({
            [type]: true
        })
    };

    handleConfirm = (type) => {
        Modal[type]({
            title:'确认',
            content:'Search for the keywords to learn more about each error.',
            onOk(){},
            onCancel(){}
        })


    };

    render() {
        return (
           <div>
               <Card title={'基础模态框'}>
                   <Button type={'primary'} onClick={()=>this.handleOpen('showModal1')}>Open</Button>
                   <Button type={'primary'} onClick={()=>this.handleOpen('showModal2')}>自定义页脚</Button>
                   <Button type={'primary'} onClick={()=>this.handleOpen('showModal3')}>顶部20PX弹窗</Button>
                   <Button type={'primary'} onClick={()=>this.handleOpen('showModal4')}>水平垂直集中</Button>
               </Card>

               <Card title={'确认框'}>
                   <Button type={'primary'} onClick={()=>this.handleConfirm('confirm')}>confirm</Button>
                   <Button type={'primary'} onClick={()=>this.handleConfirm('info')}>info</Button>
                   <Button type={'primary'} onClick={()=>this.handleConfirm('success')}>success</Button>
                   <Button type={'primary'} onClick={()=>this.handleConfirm('warning')}>warning</Button>
               </Card>

               <Modal
                   title={'React'}
                   visible={this.state.showModal1}
                   onCancel={()=>{
                       this.setState({
                           showModal1:false
                       })
                   }}
                   onOk={()=>{
                       this.setState()
                   }}
               >

                   <p>Line 2:  'Icon' is defined but never used  no-unused-vars</p>
               </Modal>


               <Modal
                   title={'React'}
                   visible={this.state.showModal2}
                   okText={'好的'}
                   cancelText={'算了吧'}
                   onCancel={()=>{
                       this.setState({
                           showModal2:false
                       })
                   }}
               >

                   <p>Line 2:  'Icon' is defined but never used  no-unused-vars</p>
               </Modal>
           </div>
        );
    }

}
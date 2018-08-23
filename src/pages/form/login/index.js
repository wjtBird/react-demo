import React from "react";
import {Card,Form,Button,Input,message,Icon,Checkbox} from 'antd';

const FormItem = Form.Item;
 class LoginForm extends React.Component {

     submitHandler = () => {
         let fieldValue = this.props.form.getFieldsValue();

         this.props.form.validateFields((error, values) => {
             if (!error) {
                 message.success(`success ${values}`);
             }else {
                 message.error(`error ${values}`)
             }

         });
     };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title={'登录行内表单'}>
                    <Form layout={'inline'}>
                        <FormItem>
                            <Input placeholder={'请输入用户名'}/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder={'请输入密码'}/>
                        </FormItem>
                        <FormItem>
                            <Button type={'primary'}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>


                <Card title={'登录水平表单'}>

                    <Form style={{width: 300}}>
                        <FormItem>

                            {
                                getFieldDecorator('userName', {
                                    initialValue: 'jack',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        }
                                    ]
                                })(
                                    <Input type={'text'} prefix={<Icon type={'user'}/>} placeholder={'请输入用户名'}/>
                                )
                            }
                        </FormItem>
                        <FormItem>

                            {
                                getFieldDecorator('password', {
                                    initialValue: '123',
                                    rules: [{
                                        required: true,
                                        message: '密码不能为空'
                                    }]
                                })(
                                    <Input type={'password'} prefix={<Icon type={'lock'}/>} placeholder={'请输入密码'}/>
                                )
                            }
                        </FormItem>

                        <FormItem>

                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href={'#'}>忘记密码</a>

                        </FormItem>

                        <FormItem>
                            <Button type={'primary'} onClick={this.submitHandler}>登录</Button>
                        </FormItem>

                    </Form>

                </Card>
            </div>
        );
    }

}

export default Form.create()(LoginForm);
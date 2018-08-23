import React from "react";
import {Form,Card,Input,Radio,Select,Switch,DatePicker,TimePicker,Upload,Icon} from "antd";
import moment from "moment";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const TextArea = Input.TextArea;

class RegisterFrom extends React.Component{


    componentWillMount() {
        this.state = {};
    }


    handleChange = (info) => {

        if (info.field.status === 'uploading') {

            this.setState({
                loading: true
            });
            return;
        }

        function getBase64(img, callback) {

            const reader = new FileReader();


            reader.addEventListener('load', () => callback(reader.result));

            reader.readAsDataURL(img);
        }

        if (info.field.status === 'done') {


            getBase64(info.field.originFileObj,imageUrl=>this.setState({
                userImage:imageUrl,
                loading: false
            }))
        }


    };

    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4

            },
            wrapperCol: {
                xs: 24,
                sm: 15
            }
        };

        return (
            <div>

                <Card title={'账号注册'}>

                    <Form>
                        <FormItem label={'用户名'} {...formItemLayout}>
                            {
                                getFieldDecorator('userName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名为空'
                                        }
                                    ]
                                })(
                                    <Input placeHolder={'请输入用户名'}/>
                                )
                            }
                        </FormItem>


                        <FormItem label={'密码'} {...formItemLayout}>
                            {
                                getFieldDecorator('password', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '密码为空'
                                        }
                                    ]
                                })(
                                    <Input placeHolder={'请输入密码'}/>
                                )
                            }
                        </FormItem>
                        <FormItem label={'性别'} {...formItemLayout}>
                            {
                                getFieldDecorator('gender', {
                                    initialValue: 1,
                                    rules: []
                                })(
                                    <RadioGroup>
                                        <Radio value={1}>男</Radio>
                                        <Radio value={2}>女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>

                        <FormItem label={'年龄'} {...formItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: 18,
                                    rules: []
                                })(
                                    <Input type={'number'}/>
                                )
                            }
                        </FormItem>

                        <FormItem label={'状态'} {...formItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: 2,
                                    rules: []
                                })(
                                    <Select>
                                        <option value={1}>咸鱼</option>
                                        <option value={2}>人才</option>
                                        <option value={3}>专家</option>
                                        <option value={4}>民工</option>
                                    </Select>
                                )
                            }
                        </FormItem>

                        <FormItem label={'爱好'} {...formItemLayout}>
                            {
                                getFieldDecorator('interest', {
                                    initialValue: 1,
                                    rules: []
                                })(
                                    <Select mode={'multiple'}>
                                        <option value={1}>篮球</option>
                                        <option value={2}>乒乓球</option>
                                        <option value={3}>足球</option>
                                        <option value={4}>游泳</option>
                                    </Select>
                                )
                            }
                        </FormItem>


                        <FormItem label={'是否已婚'} {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                    rules: []
                                })(
                                    <Switch/>
                                )
                            }
                        </FormItem>


                        <FormItem label={'生日'} {...formItemLayout}>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue: moment('2018-03-04'),
                                    rules: []
                                })(
                                    <DatePicker
                                        showtime
                                        format={'YYYY-MM-DD'}
                                    />
                                )
                            }
                        </FormItem>


                        <FormItem label={'联系地址'} {...formItemLayout}>
                            {
                                getFieldDecorator('address', {
                                    rules: []
                                })(
                                    <TextArea


                                    />
                                )
                            }
                        </FormItem>


                        <FormItem label={'早起时间'} {...formItemLayout}>
                            {
                                getFieldDecorator('time', {
                                    rules: []
                                })(
                                    <TimePicker


                                    />
                                )
                            }
                        </FormItem>


                        <FormItem label={'头像'} {...formItemLayout}>
                            {
                                getFieldDecorator('userImage', {
                                    rules: []
                                })(
                                    <Upload

                                        listType={'picture-card'}
                                        showUploadList={false}

                                        action={'//jsonplaceholder.typicode.com/post'}
                                        onChange={this.handleChange}
                                    >
                                        {
                                            this.state.userImage?<img src={this.state.userImage}/>:<Icon type={'plus'}/>
                                        }
                                    </Upload>
                                )
                            }
                        </FormItem>
                    </Form>

                </Card>

            </div>
        );
    }


}


export default Form.create()(RegisterFrom);
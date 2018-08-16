import React from "react";
import {Row,Col} from 'antd';
import Utils from './../../utils/utils';
import './index.less';
import axios from './../../axios';



export default class Header extends React.Component{

    state = {};
    componentWillMount() {
        this.setState({
            userName: 'wjt'
        });

        setInterval(() => {
            let sysTime = Utils.formatDate(new Date().getTime());
            this.setState({
                sysTime
            });

        });

        this.getWeatherAPIData();
    }

    getWeatherAPIData = () => {

        let city = '北京';

        axios.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((response) => {

            if (response.status === 'success') {
                let data = response.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl: data.dayPictureUrl,
                    weather: data.weather
                });
            }else {
                console.log(response.message);
            }

        });

    };

    render() {
        return (
            <div className={'header'}>
                <Row className={'header-top'}>
                    <Col span={24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href={'#'}>退出</a>
                    </Col>

                </Row>
                <Row className={'breadcrumb'}>
                    <Col span={4} className={'breadcrumb-title'}>
                        首页
                    </Col>
                    <Col span={20} className={'weather'}>
                        <span className={'date'}>{this.state.sysTime}</span>
                        <span className={'weather-img'}>
                            <img src={this.state.dayPictureUrl}/>
                        </span>
                        <span className={'weather-detail'}>
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        );
    }

}
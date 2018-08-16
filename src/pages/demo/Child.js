import React from 'react';


export default class Child extends React.Component{


    constructor(props){
        super(props);
    }

    componentWillMount(){
        console.log("will mount");
    }

    componentDidMount(){

        console.log("did mount");
    }

    componentWillReceiveProps(newProps){

        console.log(" receive props =" + newProps.name);

    }

    componentWillUpdate(){

        console.log('will update');
    }


    componentDidUpdate(){
        console.log('did update');
    }

    shouldComponentUpdate(){
        console.log("should update");

        return true;
    }


    render(){


        return (
            <div>
                <p>这里是子组建，测试子组建的生命周期</p>
                <p>{this.props.name}</p>

            </div>
        );
    }
}
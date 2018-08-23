import React from "react";

import {HashRouter, Route,Switch } from 'react-router-dom';
import App from "./App";
import Login from "./pages/login";
import Admin from "./Admin";
import Buttons from "./pages/ui/buttons";
import NoMatch from "./pages/nomatch";
import Modals from './pages/ui/modals';
import LoginForm from "./pages/form/login/index";
import RegisterFrom from "./pages/form/register/index";

export default class IRouter extends React.Component{


    render() {
        return (
            <HashRouter>
                <App>
                    <Route path={'/login'} compnent={Login} />

                    <Route path={'/admin'} render={()=>
                            <Admin>
                                <Switch>
                                    <Route path={'/admin/ui/buttons'} component={Buttons} />
                                    <Route path={'/admin/ui/modals'} component={Modals} />
                                    <Route path={'/admin/form/login'} component={LoginForm}/>
                                    <Route path={'/admin/form/reg'} component={RegisterFrom}/>
                                    <Route component={NoMatch}/>
                                </Switch>
                            </Admin>
                    }/>

                </App>
            </HashRouter>
        );
    }

}
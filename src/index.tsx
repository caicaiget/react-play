import ReactDOM from "react-dom";
import React from "react";

import {HashRouter, Route, Switch} from "react-router-dom";
import Router from "./pages/Router";
import 'styles/normalize.scss'
import 'antd/dist/antd.css'

class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <HashRouter>
                    <Route>
                        <Switch>
                            <Router/>
                        </Switch>
                    </Route>
                </HashRouter>

            </div>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
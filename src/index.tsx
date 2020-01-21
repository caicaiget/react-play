import ReactDOM from "react-dom";
import React from "react";
// import {Layout} from 'antd'
import {HashRouter} from "react-router-dom";
import Router from "./pages/Router";
import {LayoutComponent} from "./pages/Layout";


class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <LayoutComponent>
                    <HashRouter>
                        <switch>
                            <Router/>
                        </switch>
                    </HashRouter>
                </LayoutComponent>
            </div>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
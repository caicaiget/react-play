import React from "react";
import {Route, Link} from 'react-router-dom'
import { Menu } from 'antd';

interface IProps {

}

interface IState {

}

const routerLoadableComponents = {
    demo1: import('./demo1')
};

const routerItem = [
    {
        key: '1',
        title: 'demo1',
        path: '/demo1',
        component: 'demo1',
        exact: true,
        hasNav: true,
    },
];


class Router extends React.Component<IProps, IState> {
    readonly routerComponents = routerLoadableComponents;
    readonly routers = routerItem;

    public routerRender = () => this.routers.map(
        row => <Route key={row.key} component={this.routerComponents[row.component]} path={row.path} exact={row.exact}/>
    );
    public routerTitle = () => this.routers.map(
        row => <Menu.Item><Link to={row.path}>{row.title}</Link></Menu.Item>
    );
    render(){
        return (
            <div>
                {this.routerRender()}
                <Menu>
                    {this.routerTitle()}
                </Menu>
            </div>
        )
    }
}

export default Router

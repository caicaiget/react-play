import React from "react";
import {Route, Switch} from 'react-router-dom'
import {LayoutComponent} from "../commpents/Layout";
import {IRouter} from "../interface/router.interface";
// import {handleloadableComponent} from "../util/tool";
import demo1 from './demo1'
import CounterDemo from './CounterDemo'

interface IProps {

}

const routerLoadableComponents = {
    Demo1: demo1,
    counterDemo: CounterDemo,
};

const routerItem: Array<IRouter<RouterLoadableComponentsTypeKeys>> = [
    {
        key: '1',
        title: 'demo1',
        path: '/demo1',
        component: 'Demo1',
        exact: true,
        hasNav: true,
    },
    {
        key: '2',
        title: 'counter',
        path: '/counter',
        component: 'counterDemo',
        exact: true,
        hasNav: true,
    },
];

type RouterLoadableComponentsTypeKeys = keyof typeof routerLoadableComponents;

class Router extends React.Component<IProps> {
    readonly routerComponents = routerLoadableComponents;
    readonly routers = routerItem;


    public routerRender = () => this.routers.map(
        row => row.path && row.component ?
            <Route key={row.key} component={this.routerComponents[row.component]} path={row.path} exact={row.exact}/>: null
    );

    render() {
        return (
            <LayoutComponent menus={routerItem}>
                <Switch>
                    {this.routerRender()}
                </Switch>
            </LayoutComponent>
        )
    }
}

export default Router

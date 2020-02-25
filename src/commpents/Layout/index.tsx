import React, {useState} from "react";
import {Layout, Menu, Icon} from 'antd';
import {Link} from "react-router-dom";
import {IRouter} from "interface/router.interface";
import styles from "./index.module.scss";

const {Content, Footer, Sider} = Layout;

interface IProps {
    menus: Array<IRouter>
}

export const LayoutComponent: React.FC<IProps> = ({children, menus}) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout>
            <Sider className={styles.sider} width={200} collapsible collapsed={collapsed} onCollapse={(collapsed) => {setCollapsed(collapsed)}}>
                <div className={styles.logo}>React</div>
                <Menu theme="dark" mode="inline" className={styles.menu}>
                    {menus.map(
                        row =>
                            <Menu.Item key={row.key}>
                                <Link to={row.path} className={styles.link}>
                                    <div>
                                        <Icon type={'setting'} className={styles.itemIcon}/>
                                        <span className={styles.itemTitle}>{row.title}</span>
                                    </div>
                                </Link>
                            </Menu.Item>
                    )}
                </Menu>
                {/*<button onClick={() => {setCollapsed(!collapsed)}}>收</button>*/}
            </Sider>
            <Layout>
                <div className={styles.contentHeader}>
                    Component
                </div>
                <Content className={styles.content}>
                    <div className={styles.children}>
                        {children}
                    </div>
                </Content>
                <Footer className={styles.footer}>
                    <div>LiuYanCai React Demo</div>
                </Footer>
            </Layout>
        </Layout>

    )
};

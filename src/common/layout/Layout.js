import { Layout } from 'antd';
import React from 'react';
import Content from '../content/Content';
import Header from './components/Header';
import SideBar from './components/Navigation';
const { Footer } = Layout;

const AppLayout = ({children }) => {
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
            className='layout'
        >
            <SideBar/>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                />
                <div className="content">
                {children}
                </div>
                
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    D.N.A ©2022
                </Footer>
            </Layout>
        </Layout>
    );
};
export default AppLayout;
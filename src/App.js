import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserSwitchOutlined,
  ReadOutlined,
  CoffeeOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import {BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './routes';

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuData = [
    {
      key: '1',
      icon: <UserSwitchOutlined />,
      label: '研发效能提升',
      path: '/llm-development',
      children: [
        {
          key: '1-1',
          label: '开发前',
          path: '/pre-development',
        },
        {
          key: '1-2',
          label: '开发中',
          path: '/in-development',
        },
        {
          key: '1-3',
          label: '开发后',
          path: '/after-development',
        },
      ],
    },
    {
      key: '2',
      icon: <ReadOutlined />,
      label: 'nav 2',
    },
    {
      key: '3',
      icon: <CoffeeOutlined />,
      label: 'nav 3',
    },
  ]

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
          >
            {menuData.map((item) => {
              if (item.children) {
                return (
                  <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                    {item.children.map((submenu) => (
                      <Menu.Item key={submenu.key}>
                        <Link to={item.path + submenu.path}>{submenu.label}</Link>
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                );
              }
              return (
                <Menu.Item key={item.key} icon={item.icon}>
                  <Link to={item.path}>{item.label}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Routes />
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
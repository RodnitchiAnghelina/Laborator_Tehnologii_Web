import React, { useState } from 'react';
import { Layout, Menu, Card, Form, Input, Button } from 'antd';
const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;

interface FormValues {
  username: string;
  password: string;
  email: string;
}

function App() {
  const [formData, setFormData] = useState<FormValues>();
  const [dataList, setDataList] = useState<FormValues[]>([]);

  const handleFormSubmit = (values: FormValues) => {
    setFormData(values);
    setDataList([...dataList, values]);
  };

  return (
    
    <Layout style={{ height: '100vh', width: '100vw' }}>
      <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" title="Meniu 1">
                            <Menu.Item key="1">Submeniu 1.1</Menu.Item>
                            <Menu.Item key="2">Submeniu 1.2</Menu.Item>
                          
                        </SubMenu>
                        <SubMenu key="sub2" title="Meniu 2">
                            <Menu.Item key="4">Submeniu 2.1</Menu.Item>
                            <Menu.Item key="5">Submeniu 2.2</Menu.Item>
                           
                        </SubMenu>
                        <SubMenu key="sub3" title="Meniu 3">
                            <Menu.Item key="7">Submeniu 3.1</Menu.Item>
                            <Menu.Item key="8">Submeniu 3.2</Menu.Item>
                          
                        </SubMenu>
                    </Menu>
                </Sider>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Form name="basic" onFinish={handleFormSubmit}>
            <Form.Item
              label="Nume"
              name="username"
              rules={[{ required: true, message: 'Va rog introduceti numele' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Parola"
              name="password"
              rules={[{ required: true, message: 'Va rog introduceti parola!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Va rog introduceti email-ul!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Trimite
              </Button>
            </Form.Item>
          </Form>

          <Card title="Datele introduse" bordered={false} style={{ width: 500}}>
            {dataList.map((data, index) => (
              <div key={index}>
                <p>Numele: {data.username}</p>
                <p>Parola: {data.password}</p>
                <p>Email: {data.email}</p>
              </div>
            ))}
          </Card>

        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>America</Footer>
    </Layout>
  );
}

export default App;

import { useState } from 'react';
import { Layout, Menu, Card, Form, Input, Button } from 'antd';

const { Header, Content, Footer } = Layout;

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
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Pagina 1</Menu.Item>
          <Menu.Item key="2">Pagina 2</Menu.Item>
          <Menu.Item key="3">Pagina 3</Menu.Item>
        </Menu>
      </Header>
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

          <Card title="Datele introduse" bordered={false} style={{ width: 300 }}>
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
      <Footer style={{ textAlign: 'center' }}></Footer>
    </Layout>
  );
}

export default App;

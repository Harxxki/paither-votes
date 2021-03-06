import React from 'react'
import { Space, Divider, Layout } from 'antd'
import { Header } from './Header'

const { Content, Footer } = Layout

// TODO: Remove
const Main = () => {
  return (
    <Layout className="layout">
      <Header title={'⚙️ Settings'} />
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Space direction="vertical" size="small" align="center" split={<Divider type="horizontal" />}></Space>
          <br />
          <br />
          <br />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }} className="footer">
        Footer
      </Footer>
    </Layout>
  )
}

export default function Settings() {
  return <Main />
}

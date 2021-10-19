import 'antd/dist/antd.css';
import s from './App.module.css'
import { Col, Image, Layout } from 'antd';
import MovieListSupp from './pages/MovieListSupp';
import logo from '../utils/img/logo.png'
import { GithubFilled } from '@ant-design/icons'

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header className={s.header}>
          <Col offset={5}>
            <Image preview={false} width={60} src={logo} />
          </Col>
        </Header>
        <Content className={s.content}>
          <MovieListSupp />
        </Content>
        <Footer className={s.footer}>
          <a href='https://github.com/odevacc'>
            <GithubFilled className={s.icon} />
          </a>
        </Footer>
      </Layout>
    </>
  );
}

export default App

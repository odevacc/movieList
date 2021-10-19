import 'antd/dist/antd.css';
import s from './App.module.css'
import { Col, Image, Layout } from 'antd';
import MovieListSupp from './pages/MovieListSupp';
import logo from '../utils/img/logo.png'

const { Header, Content } = Layout;

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
      </Layout>
    </>
  );
}

export default App

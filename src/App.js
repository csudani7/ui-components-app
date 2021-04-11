import { Layout, Row, Col } from "antd";
import TopBarHeader from "./components/TopBarHeader";
import "./app.css";

function App() {
  return (
    <div>
      <Layout>
        <Row>
          <Col span={6} className="side-bar">
            Side bar section
          </Col>
          <Col span={18} className="main-section">
            <TopBarHeader />
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default App;

import { Layout, Row, Col } from "antd";
import TopBarHeader from "./components/TopBarHeader";
import "./app.css";

function App() {
  return (
    <div>
      <Layout style={{ overflow: "hidden" }}>
        <Row>
          <Col span={24} className="main-section">
            <TopBarHeader />
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default App;

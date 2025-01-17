import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import SearchBar from './components/SeachrBar'
import { Col, Container, Row } from 'react-bootstrap'

function App() {

  return (
    <>
      <MyNav />
      <Container className="justify-content-center" style={{ marginTop: '10rem' }}>
        <Row>
          <Col>
            <SearchBar />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import SearchBar from './components/SeachrBar'
import { Col, Container, Row } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import CityWeather from './components/CityWeather'
import NotFound from './components/NotFound'

function App() {
  const initialState = {
    dt: '',
    cityApp: '',
    days: [],
  }

  const [cityApp, setCityApp] = useState({ ...initialState })

  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path="/" element={
          <Container className="justify-content-center" style={{ marginTop: '10rem' }}>
            <Row>
              <Col>
                <SearchBar setCityApp={setCityApp} />
              </Col>
            </Row>
          </Container>
        } />
        <Route path="/city-weather" element={<CityWeather cityApp={cityApp} />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App

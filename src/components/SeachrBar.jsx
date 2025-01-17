import { useState } from 'react'
import { Form, Col, Button, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function SearchBar(props) {
    const [city, setCity] = useState('')
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const API_KEY = '711e8d9b8520830c3819d3f0de2b91a6'
    const handleClick = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},it&appid=${API_KEY}`)

            if (res.ok) {
                const data = await res.json()
                props.setCityApp({
                    cityApp: data.city.name,
                    list: data.list.map((day) => {
                        return {
                            dt: day.dt,
                            temp: day.main.temp,
                            weather: day.weather[0].main
                        }
                    })
                })
                navigate('/city-weather')
            } else {
                throw new Error('Problema nella ricerca della città..')
            }
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div>
            {
                error ? (
                    navigate('/not-found')
                ) : (
                    <Form onSubmit={handleClick} style={{ height: '100vh' }}>
                        <Row>
                            <Form.Label style={{ color: 'white' }}>Inserisci la Città</Form.Label>
                        </Row>
                        <Row>
                            <Col xs={11}>
                                <Form.Control
                                    type="text"
                                    placeholder="Rome,it"
                                    className=" mr-sm-2"
                                    value={city}
                                    onChange={(e) => {
                                        setCity(e.target.value)
                                    }}
                                />
                            </Col>
                            <Col xs={1}>
                                <Button type="submit">Search</Button>
                            </Col>
                        </Row>
                    </Form>
                )
            }
        </div>
    )
}

export default SearchBar
import { Col, Container, Row, Card, Button } from "react-bootstrap"
import './CityWeather.css'

function CityWeather(props) {
    console.log(props.cityApp)
    const today = new Date()
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const calculateDate = (index) => {
        const newDate = new Date(today)
        newDate.setDate(today.getDate() + index)
        return `${newDate.getDate()} ${months[newDate.getMonth()]}`
    }

    props.cityApp.list.forEach((element) => {
        console.log(element.weather)
    })

    const getIconName = (weather) => {
        switch (weather) {
            case 'Clouds':
                return (
                    <span className="material-symbols-outlined" style={{ fontSize: "36px", color: "grey" }}>
                        cloud
                    </span>
                )
            case 'Rain':
                return (
                    <span className="material-symbols-outlined" style={{ fontSize: "36px", color: "blue" }}>
                        rainy
                    </span>
                )
            case 'Snow':
                return (
                    <span className="material-symbols-outlined" style={{ fontSize: "36px", color: "rgb(0, 208, 255)" }}>
                        cloudy_snowing
                    </span>
                )
            case 'Clear':
                return (
                    <span className="material-symbols-outlined" style={{ fontSize: "36px", color: "rgb(216, 191, 0)" }}>
                        sunny
                    </span>
                )
            default:
                return (
                    <span className="material-symbols-outlined" style={{ fontSize: "36px", color: "blue" }}>
                        rainy
                    </span>
                )
        }
    }

    return (
        <Container>
            <Row>
                {
                    props.cityApp.list.map((day, index) => {
                        return (
                            <Col xs={12} md={4} lg={3} key={day.dt}>
                                <Card className="mb-3 rounded-2" key={day.dt}>
                                    <Card.Body>
                                        {getIconName(day.weather)}
                                        <Card.Title>{calculateDate(index)}</Card.Title>
                                        <Card.Text>
                                            <strong>Temperatura: {Math.floor(day.temp - 273.15)}°C</strong>
                                            <br />
                                            <em>Meteo: {day.weather}</em>
                                        </Card.Text>
                                        <Button variant="light" className="w-100">Dettagli</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default CityWeather


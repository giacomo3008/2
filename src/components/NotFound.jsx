import { Container, Row, Col, Alert, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()
    return (
        <Container>
            <Row className="justify-content-center my-3">
                <Col xs={12} md={8} lg={6}>
                    <Alert variant="danger" className="text-center shadow-lg">
                        <h1 className="display-3 fw-bold">404</h1>
                        <h3 className="mb-3">Pagina Non Trovata</h3>
                        <p className="mb-4">
                            Ops! Sembra che tu abbia perso la strada. Non preoccuparti, puoi tornare in tutta sicurezza alla homepage!
                        </p>
                        <Button
                            variant="primary"
                            onClick={() => navigate('/')}
                        >
                            Torna alla Homepage
                        </Button>
                    </Alert>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound
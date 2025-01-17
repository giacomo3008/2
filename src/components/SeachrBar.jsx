import { Form, Col, Button, Row } from 'react-bootstrap'

function SearchBar() {
    return (
        <Form>
            <Row>
                <Form.Label style={{ color: 'white' }}>Inserisci la Città</Form.Label>
            </Row>
            <Row>
                <Col xs={11}>
                    <Form.Control
                        type="text"
                        placeholder="Rome"
                        className=" mr-sm-2"
                    />
                </Col>
                <Col xs={1}>
                    <Button type="submit">Search</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchBar
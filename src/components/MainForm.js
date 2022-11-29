import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';

function MainForm() {
    return (
        <Container className="MainForm">
            <Container className={'mb-4'}>
                <h4>Введите параметры сварки</h4>
            </Container>
            <Container className={'my-4'}>
                <h4>Результат прогнозирования</h4>
            </Container>
        <Form>
            <Container>
                <Row>
                    <Column className={'col-lg-6 col-sm-12'}>
                        <Form.Group className="mb-3" controlId="formIW">
                            <Form.Label>Сварочный ток, IW</Form.Label>
                            <Form.Control type="email" placeholder="IW 43...49"/>
                            <Form.Text className="text-muted">
                                Введите сварочный ток, разделителем дробной части является точка.
                            </Form.Text>
                        </Form.Group>
                    </Column>

                    <Column className={'col-lg-6 col-sm-12'}>
                        <Form.Group className="mb-3" controlId="formIF">
                            <Form.Label>Ток фокусировки электронного пучка, IF</Form.Label>
                            <Form.Control type="email" placeholder="IF 131...150"/>
                            <Form.Text className="text-muted">
                                Введите ток фокусировки, разделителем дробной части является точка.
                            </Form.Text>
                        </Form.Group>
                    </Column>
                </Row>
                <Row>

                    <Column className={'col-lg-6 col-sm-12'}>
                        <Form.Group className="mb-3" controlId="formWV">
                            <Form.Label>Скорость сварки, VW</Form.Label>
                            <Form.Control type="email" placeholder="VW 4.5...12"/>
                            <Form.Text className="text-muted">
                                Введите скорость сварки, разделителем дробной части является точка.
                            </Form.Text>
                        </Form.Group>

                    </Column>
                    <Column className={'col-lg-6 col-sm-12'}>
                        <Form.Group className="mb-3" controlId="formFP">

                            <Form.Label>Расстояние от поверхности образцов, FP</Form.Label>
                            <Form.Control type="email" placeholder="FP 50...125"/>
                            <Form.Text className="text-muted">
                                Введите расстояние от поверхностей, разделителем дробной части является точка.
                            </Form.Text>


                        </Form.Group>
                    </Column>
                </Row>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Container>
        </Form>
        </Container>
    );
}

export default MainForm;
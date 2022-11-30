import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import {useQuery} from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import axios from "axios";

const BASE_API_URL = process.env.REACT_APP_API_URL;


const useModel = (modelFeatures) => {
    const postModelFeatures = async () => {
        await new Promise(resolve => setTimeout(resolve, 500));
        const modelUrl = BASE_API_URL
        const {data} = await axios.post(modelUrl, modelFeatures);
        return data;
    }

    return useQuery(Object.values(modelFeatures), {});
}

export default function MainForm() {
    const { register, handleSubmit, watch, errors } = useForm();

     // const {isLoading, error, data, isFetching} = useModel("general");

    const onSubmit = (data) => {
        // event.preventDefault();
        console.log(data);

    }


    return (
        <Container className="MainForm">
            <Container className={'mb-4'}>
                <h4>Введите параметры сварки</h4>
            </Container>
            <Container className={'my-4'}>
                <h4>Результат прогнозирования</h4>
                <h4>Width: Depth:</h4>
            </Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <Row>
                        <Column className={'col-lg-6 col-sm-12'}>
                            <Form.Group className="mb-3" controlId="formIW">
                                <Form.Label>Сварочный ток, IW</Form.Label>
                                <Form.Control type="number" placeholder="IW 43...49" step='0.01' {...register('iw', {
                                    required: true,
                                    min: 43,
                                    max: 49,

                                    // pattern: {
                                    //     // float number
                                    //     value: /^\d+(\.\d+)?$/,
                                    // }
                                })}
                                     // aria-invalid={errors.iw ? "true" : "false"}
                                />
                                <Form.Text className="text-muted">
                                    Введите сварочный ток, разделителем дробной части является точка.
                                </Form.Text>
                            </Form.Group>
                        </Column>

                        <Column className={'col-lg-6 col-sm-12'}>
                            <Form.Group className="mb-3" controlId="formIF">
                                <Form.Label>Ток фокусировки электронного пучка, IF</Form.Label>
                                <Form.Control type="number" placeholder="IF 131...150" step='0.01' {
                                    ...register('if', {
                                        required: true,
                                        min: 131,
                                        max: 150,
                                    })
                                }/>
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
                                <Form.Control type="number" placeholder="VW 4.5...12" step='0.01' {
                                    ...register('vw', {
                                        required: true,
                                        min: 4.5,
                                        max: 12,
                                    })
                                }/>
                                <Form.Text className="text-muted">
                                    Введите скорость сварки, разделителем дробной части является точка.
                                </Form.Text>
                            </Form.Group>

                        </Column>
                        <Column className={'col-lg-6 col-sm-12'}>
                            <Form.Group className="mb-3" controlId="formFP">
                                <Form.Label>Расстояние от поверхности образцов, FP</Form.Label>
                                <Form.Control type="number" placeholder="FP 50...125" step='0.01' {
                                    ...register('fp', {
                                        required: true,
                                        min: 50,
                                        max: 125,
                                    })
                                }/>
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

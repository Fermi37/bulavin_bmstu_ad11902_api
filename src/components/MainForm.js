import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useRef, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import {useQuery} from "@tanstack/react-query";
import {useForm} from "react-hook-form";
import axios from "axios";

const BASE_API_URL = process.env.REACT_APP_API_URL;


// const useModel = (modelFeatures) => {
//     const postModelFeatures = async () => {
//         await new Promise(resolve => setTimeout(resolve, 500));
//         const modelUrl = BASE_API_URL
//         const {data} = await axios.post(modelUrl, modelFeatures);
//         return data;
//     }
//
//     return useQuery(Object.values(modelFeatures), {});
// }

export default function MainForm() {
    const [width, setWidth] = useState(-1);
    const [depth, setDepth] = useState(-1);
    const {register, handleSubmit} = useForm({
        defaultValues: {
            iw: 47,
            iff: 139,
            vw:5,
            fp:80,
        }
    });

    // const {isLoading, error, data, isFetching} = useModel("general");

    const onSubmit = (data) => {
        axios.post(BASE_API_URL + '/model', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => {
            console.log(r.data);
            setWidth(r.data.width);
            setDepth(r.data.depth);
        });
        console.log(data);

    }


    return (
        <Container className="MainForm">
            <Container className={'mb-4'}>
                <h4>Введите параметры сварки</h4>
            </Container>
            <Container className={'my-4'}>
                <h4>Результат прогнозирования</h4>
                <h4 className={"bg-light"}>Width: {width > 0 ? width.toFixed(2) : ""} Depth: {depth > 0 ? depth.toFixed(2) : ""}</h4>
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
                                })}
                                />
                                <Form.Text className="text-muted">
                                    {/*Введите сварочный ток, разделителем дробной части является точка.*/}
                                </Form.Text>
                            </Form.Group>
                        </Column>

                        <Column className={'col-lg-6 col-sm-12'}>
                            <Form.Group className="mb-3" controlId="formIF">
                                <Form.Label>Ток фокусировки электронного пучка, IF</Form.Label>
                                <Form.Control type="number" placeholder="IF 131...150" step='0.01' {
                                    ...register('iff', {
                                        required: true,
                                        min: 131,
                                        max: 150,
                                    })
                                }/>
                                <Form.Text className="text-muted">
                                    {/*Введите ток фокусировки, разделителем дробной части является точка.*/}
                                </Form.Text>
                            </Form.Group>
                        </Column>
                    </Row>
                    <Row className={''}>
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
                                    {/*Введите скорость сварки, разделителем дробной части является точка.*/}
                                </Form.Text>
                            </Form.Group>

                        </Column>
                        <Column className={'col-lg-6 col-sm-12 mb-4'}>
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
                                    {/*Введите расстояние от поверхностей, разделителем дробной части является точка.*/}
                                </Form.Text>
                            </Form.Group>
                        </Column>
                    </Row>
                    <Button variant="primary" type="submit" className={'mb-4'}>
                        Submit
                    </Button>
                </Container>
            </Form>
        </Container>
    );
}

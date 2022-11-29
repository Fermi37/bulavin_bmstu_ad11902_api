import Container from "react-bootstrap/Container";
import {Stack} from "react-bootstrap";
import React from 'react';
import MainForm from "../components/MainForm";
import Description from "../components/Description";
export default function MainPage() {

    return (
        <Container className="MainPage">
            <Stack direction="vertical" className="MainPage">
                    <Description/>

                <MainForm/>
            </Stack>
        </Container>
    );
}

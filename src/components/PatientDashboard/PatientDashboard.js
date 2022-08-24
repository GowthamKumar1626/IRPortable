import React from "react";
import Header from "../Header/Header";
import Card from 'react-bootstrap/Card';
import {Col, Row} from "react-bootstrap";
import { Chart } from "react-google-charts";
import styles from './PatientDashboard.module.css';
import {useParams, useSearchParams} from "react-router-dom";
import VerticalLinearStepper from "../Activity/Activity";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";

const tempData = [
    ["Time", "Temperature in Fahrenheit"],
    ["06:00", 98.4],
    ["10:00", 98.6],
    ["14:00", 98.1],
    ["18:00", 99.3],
    ["22:00", 98.3],
];

const temperatureOptions = {
    title: "Temperature record",
    curveType: "function",
    legend: { position: "bottom" },
};

const pulseData = [
    ["Time", "Pulse in number of Beats"],
    ["06:00", 68],
    ["10:00", 72],
    ["14:00", 67],
    ["18:00", 69],
    ["22:00", 85],
];

const pulseOptions = {
    title: "Pulse record",
    curveType: "function",
    legend: { position: "bottom" },
};

const UserDetailsTable = () => {
    return (
        <table className={styles['user-details-table']}>
            <tbody>
            <tr>
                <td>Name</td>
                <td>Carla</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>23 years</td>
            </tr>
            <tr>
                <td>Contact number</td>
                <td>+91 9876543210</td>
            </tr>
            <tr>
                <td>Profession</td>
                <td>House wife</td>
            </tr>
            <tr>
                <td>Is married</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Have children</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Number of children</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Period of post cancer</td>
                <td>2 months 12 days</td>
            </tr>
            <tr>
                <td>Address</td>
                <td>Door no: 3-5-1/3,<br/>Sattenapalli,<br/>Andhra Pradesh</td>
            </tr>
            <tr>
                <td>Emergency contacts</td>
                <td>+91 1234567890<br/>+91 9087564321</td>
            </tr>
            </tbody>
        </table>
    );
}

const PatientCard = ({patientID, photoSrc}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={photoSrc} />
            <Card.Body>
                <Card.Title>Patient ID: {patientID}</Card.Title>
                <hr/>
                <Card.Text>
                    <UserDetailsTable/>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

const IndicatorContainer = () => {
    return (
        <div className={styles['indicators-container']}>
            <div className={styles['indicator']}>
                <Row>
                    <Col>
                        <i style={{fontSize: '5rem'}} className={`fa-solid fa-temperature-high`}></i>
                    </Col>
                    <Col>
                        <Row>
                            Min temp: <b>98.1<sup>0</sup> F</b>
                        </Row>
                        <Row>
                            Max temp: <b>100.3<sup>0</sup> F</b>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div className={styles['indicator']}>
                <Row>
                    <Col>
                        <i style={{fontSize: '5rem'}} className="fa-solid fa-stethoscope"></i>
                    </Col>
                    <Col>
                        <Row>
                            Min hear rate: <b>68</b>
                        </Row>
                        <Row>
                            Max hear rate: <b>85</b>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

const IRImages = () => {
    return (
        <div style={{padding: '1rem', margin: '1rem 0', border: '1px solid #cecece', borderRadius: '1rem'}}>
            <h2>IR Images</h2>
            <div className={styles['row']}>
                <div className={styles['column']}>
                    <img style={{width: '100%'}} alt={'thermal-1'} src={'https://www.researchgate.net/profile/Nermin-Koesues/publication/260486952/figure/fig1/AS:601706945589248@1520469523086/Image-of-digital-infrared-thermal-imaging-Inflammatory-carcinoma-of-right-breast.png'} />
                </div>
                <div className={styles['column']}>
                    <img style={{width: '100%'}} alt={'thermal-1'} src={'https://www.thethermographycenter.com/images/home/What-Is-Thermography.jpg'} />
                </div>
                <div className={styles['column']}>
                    <img style={{width: '100%'}} alt={'thermal-1'} src={'https://elpasothermography.com/wp-content/uploads/2020/02/Demo-3.jpg'} />
                </div>
            </div>
        </div>
    );
}

const Graphs = () => {
    return (
        <>
            <Row>
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="400px"
                    data={tempData}
                    options={temperatureOptions}
                />
            </Row>
            <Row>
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="400px"
                    data={pulseData}
                    options={pulseOptions}
                />
            </Row>
        </>
    );
}

const PatientDashboard = () => {

    const {patientID} = useParams();
    const [searchParams] = useSearchParams();
    const photoSrc = searchParams.get('photo');

    return (
        <>
            <Header/>
            <div className={styles['dashboard-container']}>
                <Row>
                    <Col>
                        <PatientCard patientID={patientID} photoSrc={photoSrc} />
                    </Col>
                    <Col md={6} lg={6}>
                        <IndicatorContainer/>
                        <IRImages/>
                        <Graphs/>
                    </Col>
                    <Col>
                        <VerticalLinearStepper/>
                        <Box sx={{ maxWidth: 400, margin: '1rem 0' }}>
                            <h2>Medications under</h2>
                            <div className={styles['medicine-records']}>
                                <Chip label="Medicine 1" />
                                <Chip label="Medicine 2" />
                                <Chip label="Medicine 3" />
                                <Chip label="Medicine 4" />
                                <Chip label="Medicine 5" />
                                <Chip label="Medicine 6" />
                                <Chip label="Medicine 7" />
                            </div>
                            <br/>
                            <Stack spacing={2} direction="row">
                                <Button variant="text">Add medication</Button>
                                <Button variant="contained">Remove medication</Button>
                            </Stack>
                        </Box>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default PatientDashboard;
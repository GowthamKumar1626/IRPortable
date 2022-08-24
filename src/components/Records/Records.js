import React from 'react';
import styles from './Records.module.css';
import Header from "../Header/Header";
import {Button} from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';

const RecordItem = ({month}) => {
    return (
        <div className={styles['record-item']}>
            <div className={styles['month']}>
                <b>{month}</b>
            </div>
            <div className={styles['actions']}>
                <Button variant="text">Download</Button>
                <Button variant="contained" endIcon={<ShareIcon />}>
                    Share
                </Button>
            </div>
        </div>
    );
}

const Records = () => {
    return (
        <>
            <Header/>
            <div className={styles['record-container']}>
                <h1>Monthly records</h1>
                <RecordItem month={'August'}/>
                <RecordItem month={'July'}/>
                <RecordItem month={'June'}/>
                <RecordItem month={'May'}/>
                <RecordItem month={'April'}/>
            </div>
        </>
    );
}

export default Records;
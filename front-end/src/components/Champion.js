import React from 'react';
import {
    Typography,
    Card,
    CardContent,
    makeStyles,
    CardMedia,
    CardHeader, 
} from '@material-ui/core'
import { red } from '@material-ui/core/colors'

import ChampionAvatar from './ChampionAvatar'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 200,
        maxHeight: 300,
    },
    media: {
        height: 0,
        paddingTop: '100%',
    },
}));

export default function ChampionCard(props) {
    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
        <CardMedia className={classes.media} image={props.url}/>
            <CardHeader title="Ezreal" subheader="marksman"/>
            <CardContent>
            </CardContent>
        </Card>
    );
}
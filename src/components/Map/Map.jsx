import React from "react";
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from "@material-ui/lab";
import useStyles from "./MapStyles";
const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery(('min-width:600px'));

    const coordinates = {
        lat: 0,
        lng: 0
    }
    return(
       <div className = {classes.mapContainer}>
        <GoogleMapReact
            bootstrapURLKeys = {{key: 'AIzaSyCER-1jiXG4XNunDnrC9HtH4FxGuTo1VKI'}}
            defaultCenter = {coordinates}
            center = {coordinates}
            defaultZoom= {14}
            margin = {[50,50,50,50]}
            options = {''}
            onChange = {''}
            onChildClick = {''}
        >
        </GoogleMapReact>
        
       </div>
    );
}
export  default Map; 

import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./Map.module.scss";
import MapboxDraw from "@mapbox/mapbox-gl-draw";

export const Map = () => {
  const token = useSelector((state) => (state as any).mapboxTokenReducer.value);
  mapboxgl.accessToken = token;

  const mapContainer = useRef(null!);
  const map = useRef<mapboxgl.Map>(null!);
  const [lng, setLng] = useState(151.49583);
  const [lat, setLat] = useState(-24.24362);
  const [zoom, setZoom] = useState(15);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  // Map#addControl takes an optional second argument to set the position of the control.
  // If no position is specified the control defaults to `top-right`. See the docs
  // for more details: https://docs.mapbox.com/mapbox-gl-js/api/#map#addcontrol

  useEffect(() => {
    if (!!map.current && !loaded) {
      setLoaded(true);

      const draw = new MapboxDraw({
        displayControlsDefault: true,
        // Select which mapbox-gl-draw control buttons to add to the map.
        controls: {
          polygon: true,
          trash: true,
        },
        defaultMode: "draw_polygon",
      });

      map.current.addControl(draw, "top-left");

      map.current.on("move", () => {
        console.log(draw.getAll());
        setLng(map.current.getCenter().lng);
        setLat(map.current.getCenter().lat);
        setZoom(map.current.getZoom());
      });

      draw.getAll();
    }
  }, [loaded, map]);

  return <div ref={mapContainer} className={classes["map-container"]} />;
};

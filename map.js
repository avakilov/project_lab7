import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7.9.0/+esm';
// Import Mapbox as an ESM module
import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';
// Check that Mapbox GL JS is loaded
console.log('Mapbox GL JS Loaded:', mapboxgl);

// Set your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1IjoiYXZha2lsb3YiLCJhIjoiY21oemllYW12MGx4djJrb3E2NDJzdHB5NiJ9.5N_0fFVNx_9KQbEw0uB2wg';

// Initialize the map
const map = new mapboxgl.Map({
  container: 'map', // ID of the div where the map will render
  style: 'mapbox://styles/mapbox/streets-v12', // Map style
  center: [-71.09415, 42.36027], // [longitude, latitude]
  zoom: 12, // Initial zoom level
  minZoom: 5, // Minimum allowed zoom
  maxZoom: 18, // Maximum allowed zoom
});

///////////////////////////////////////////////////

map.on('load', async () => {

    // 1. ADD DATA SOURCE for Boston bike lanes
    map.addSource('boston_route', {
      type: 'geojson',
      // The GeoJSON link for the Boston bike network
      data: 'https://bostonopendata-boston.opendata.arcgis.com/datasets/boston::existing-bike-network-2022.geojson',
    });
  
    // 2. ADD LAYER to visualize the data source as a line
    map.addLayer({
      id: 'bike-lanes-boston', // Unique ID for this layer
      type: 'line',             // Line type is best for drawing roads/lanes
      source: 'boston_route',   // References the source defined above
      paint: {
        'line-color': 'green',
        'line-width': 3,
        'line-opacity': 0.6, // Increased opacity slightly for visibility
      },
    });
  
    // NOTE: You will add the code for D3, stations, and the time filter later,
    // all inside this same map.on('load', async () => { ... }) block.
    
  });
# Chemistry Data Ingestion & Visualization — Technical Exercise

This exercise tests your ability to:
1. Parse and merge data using **Python**
2. Visualize geospatial data using **React + Leaflet**

You may use AI tools during the session, but be prepared to explain your reasoning and design decisions.

## Overview

You are given three input datasets:

1. **`fields.geojson`** — polygon boundaries of agricultural fields  
2. **`samples.geojson`** — individual soil samples within each field  
3. **`chemistry.csv`** — chemistry measurements for samples organized by sample id and measurement

Your goal is to:
- Merge the chemistry data with the spatial sample data (Python)
- Visualize fields and samples on a map (React)
- Display chemistry information interactively for each sample

## Backend — Python

### Objective
Write a script that reads the input datasets and produces a merged GeoJSON file of samples with chemistry data attached to their properties.

### Requirements
- Input files are located in:  
`backend/data/`
- Output file should be written to:
`backend/data/merged_samples.geojson`

### Expected Behavior
- Each sample feature should include chemistry data in its `properties` object.  

### Running the Script
```
cd backend
python3 aggregate_chemistry.py
```

## Frontend — React + Leaflet

### Objectives

1. Display the merged sample and field data on a map.
2. Add a dropdown component to choose which measurement to display
3. When clicking on a sample in the map, render a callout-style popup with the sample id and measurement value

### Steps

1. Run the backend script to generate merged_samples.geojson.
2. Start the frontend dev server:
```
cd frontend
npm install
npm run dev
```
3. Open your browser to http://localhost:5173
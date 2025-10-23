import { MapContainer, TileLayer } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const center: LatLngExpression = [38.498, -97.5];

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          flex: "1",
          padding: "2rem",
          backgroundColor: "#f9fafb",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRight: "1px solid #ddd",
        }}
      >
        <div>
          <h1 style={{ marginBottom: "0.5rem" }}>Chemistry Data Viewer</h1>
          <p style={{ color: "#555", maxWidth: 480 }}>
            This interface visualizes soil sample chemistry data for each
            field. On the right, the map displays fields and sample locations.
            Clicking on a sample reveals its chemistry attributes.
          </p>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h3>Next Steps</h3>
          <ul style={{ lineHeight: 1.6 }}>
            <li>Parse and merge chemistry data with the sample GeoJSON.</li>
            <li>Display samples on the map with chemistry values.</li>
            <li>Enable popups for detailed sample info.</li>
          </ul>
        </div>
      </div>

      {/* ---------- Right Panel (Map) ---------- */}
      <div style={{ flex: "1", position: "relative" }}>
        <MapContainer
          center={center}
          zoom={15}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
        </MapContainer>
      </div>
    </div>
  );
}

export default App;

'use client';

import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {useEffect, useState} from 'react';
import {getBuoys} from '@/lib/api';

const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export default function BuoyMap() {
  const [buoys, setBuoys] = useState<any[]>([]);

useEffect(() => {
  const data = getBuoys();
  setBuoys(data);
}, []);

  return (
    <MapContainer
      center={[39.5, -8.0]}
      zoom={7}
      style={{height: '100vh', width: '100%'}}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {buoys.map((buoy) => (
        <Marker
          key={buoy.id}
          position={[buoy.lat, buoy.lng]}
          icon={defaultIcon}
        >
          <Popup>
            <strong>{buoy.name}</strong>
            <br />
            Status: {buoy.status}
            <br />
            pH: {buoy.readings.ph}
            <br />
            Temp: {buoy.readings.temperature}°C
            <br />
            DO: {buoy.readings.dissolvedOxygen}
            <br />
            Conductivity: {buoy.readings.conductivity}
            <br />
            Turbidity: {buoy.readings.turbidity}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

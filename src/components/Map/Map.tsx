import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';
import House from '@/assets/image/building.png';
import { Icon } from 'leaflet';
interface MarkerData {
  position: [number, number];
  address: string;
  markerName: string;
  markerImg: string;
  link: string;
}

interface MapProps {
  center: [number, number];
  zoom: number;
  markers: MarkerData[];
  scrollWheelZoom?: boolean;
  className?: string;
}
const HouseIcon = new Icon({
  iconUrl: House,
  iconSize: [35, 35], // size of the icon
  iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
  popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
});

const MapComponent: React.FC<MapProps> = ({
  center,
  zoom,
  markers,
  scrollWheelZoom = false,
  className = 'h-[1000px] w-full',
}) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={scrollWheelZoom}
      className={className}
      attributionControl={false}
    >
      <TileLayer
        attribution=""
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={HouseIcon}>
          <Popup className="p-2 text-center">
            <div className="w-full flex flex-col items-center text-center">
              <h3 className="m-2">{marker.address}</h3>
              <Link className="m-2" to={marker.address}>
                {marker.markerName}
              </Link>
              {marker.link && (
                <>
                  <img src={marker.markerImg} alt={marker.address} />
                </>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const Home: React.FC = () => {
  return (
    <div className="h-[1000px] w-[1000px]">
      <MapContainer
        center={[10.80687, 106.700233]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-[1000px] w-[1000px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[10.80687, 106.700233]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            <a href="https://gamek.vn/cum-rap-danh-tieng-viet-nam-nhan-trai-dang-vi-choc-gian-fan-lck-178240817004412837.chn?fbclid=IwY2xjawEtTk1leHRuA2FlbQIxMAABHV08sby-HOruIUHYVcGy6LK3XADS8jiI50mQZRxHTEAj9voRarMU0cTMyg_aem_D_jas4hv7LE74dMZypTTgQ">
              link
            </a>
          </Popup>
        </Marker>
        <Marker position={[10.80186, 106.72178]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
export default Home;

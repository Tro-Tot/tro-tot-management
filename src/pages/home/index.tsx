import React from 'react';
import MapComponent from '@/components/Map/';

const Home: React.FC = () => {
  //TODO : this is just for demo ,remove this before Merge
  const markers = [
    {
      position: [10.80687, 106.700233] as [number, number],
      address: '297/24B Bùi Đình Túy.',
      link: 'https://gamek.vn/cum-rap-danh-tieng-viet-nam-nhan-trai-dang-vi-choc-gian-fan-lck-178240817004412837.chn?fbclid=IwY2xjawEtTk1leHRuA2FlbQIxMAABHV08sby-HOruIUHYVcGy6LK3XADS8jiI50mQZRxHTEAj9voRarMU0cTMyg_aem_D_jas4hv7LE74dMZypTTgQ',
      markerName: 'Nhà trọ Bùi Đình Túy',
      markerImg:
        'https://file4.batdongsan.com.vn/crop/232x186/2024/08/15/20240815101658-e911_wm.jpg',
    },
    {
      position: [10.80186, 106.72178] as [number, number],
      address: '235A, Đường Đặng Thùy Trâm, Phường 13, Bình Thạnh, Hồ Chí Minh',
      link: 'https://gamek.vn/cum-rap-danh-tieng-viet-nam-nhan-trai-dang-vi-choc-gian-fan-lck-178240817004412837.chn?fbclid=IwY2xjawEtTk1leHRuA2FlbQIxMAABHV08sby-HOruIUHYVcGy6LK3XADS8jiI50mQZRxHTEAj9voRarMU0cTMyg_aem_D_jas4hv7LE74dMZypTTgQ',
      markerName: 'Cho thuê biệt thự mini khu vực Bình Thạnh',
      markerImg:
        'https://file4.batdongsan.com.vn/crop/232x186/2024/08/08/20240808145953-a307_wm.jpg',
    },
  ];

  return (
    <div>
      <MapComponent
        center={[10.80687, 106.700233]}
        zoom={13}
        markers={markers}
        scrollWheelZoom={false}
        className="h-[400px] w-[400px]"
      />
    </div>
  );
};

export default Home;

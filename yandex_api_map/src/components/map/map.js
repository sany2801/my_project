import { YMaps, Map,Placemark, SearchControl, Panorama} from '@pbe/react-yandex-maps';



const Mapcontaner = () => (
    <YMaps>
      <Map width={'100%'} height={"100vh"} defaultState={{ center: [55.75, 37.57], zoom: 9}}  >
      <Placemark defaultGeometry={[55.751574, 37.573856]} />
        <Panorama defaultPoint={[55.733685, 37.588264]} />
        <SearchControl options={{ float: "top" }} />
        </Map>

  
    </YMaps>
  
    
  );
  
  export default Mapcontaner;
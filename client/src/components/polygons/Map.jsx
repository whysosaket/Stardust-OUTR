
import React, { useContext, useState, useEffect } from 'react'
import './Map.css'
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


import L from 'leaflet';
import HospitalContext from '../../context/hospitals/hospitalContext';

let hospitalIcon = L.icon({
    iconUrl: "https://www.shareicon.net/data/512x512/2016/08/04/806609_medical_512x512.png",
    iconSize: [25, 25],
    iconAnchor: [15, 15],
    
});

let pharmaIcon = L.icon ({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/8/8115.png",
  iconSize: [25, 25],
  iconAnchor: [15, 15],
})


// L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {

  let pharmacy = [{x: 19.505, y: 85.10}, {x: 21.0, y: 85.0}]

  const redOptions = { color: 'red' }
  const greenOptions = { color: 'green' }
  const blueOptions = { color: 'blue' }

  const contextHospital = useContext(HospitalContext);
  const { fetchHospitals } = contextHospital;

  // State for hospitals
  const [hospital, updateHospital] = useState([])

  useEffect( ()=>{
    async function gethosp(){
      let hosp =  await fetchHospitals();
      updateHospital(hosp);
    }
    gethosp();
  },[fetchHospitals])


  return (
    <>
    <div className='map-c'>
    <div className='map d-flex'>

    <MapContainer style={{ width: "60rem", height: "30rem", display: "inline-block", margin: "auto", borderRadius: "10px"}} center={[20.252902481445254, 85.80924409410713]} zoom={13} scrollWheelZoom={true} >

  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
  />
  
  {hospital.map((item)=>{
    return (
        <>

    <Circle center={item.location} pathOptions={item.size>300?greenOptions:redOptions} radius={item.size*10} />

    <Marker position={item.location} icon= {hospitalIcon}>
      <Popup>
      {item.name} <br />
      </Popup>
    </Marker>
    </>)
  })}

{/*
  {pharmacy.map((item)=>{
    return (
    <Marker position={[item.x, item.y]} icon= {pharmaIcon}>
      <Popup>
        Laude Ka Hospital <br />
      </Popup>
    </Marker>)
  })}
*/}

 
</MapContainer>
    </div>
    
    </div>
    </>
  )


}

export default Map
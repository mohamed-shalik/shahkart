// import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// const Map = () => {
//     const [query, setQuery] = useState('');
//     const [results, setResults] = useState([]);
//     const [cityLat, setCityLat] = useState(28.6448); // Delhi's latitude
//     const [cityLng, setCityLng] = useState(77.216721); // Delhi's longitude

//     const handleSearch = async (inputValue) => {
//         try {
//             const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${inputValue}&format=json`);
//             const data = await response.json();
//             setResults(data);
//         } catch (error) {
//             console.error('Error searching:', error);
//         }
//     };

//     const handleSelect = (address, lat, lng) => {
//         setQuery(address);
//         setCityLat(lat);
//         setCityLng(lng);
//         setResults([]); // Clear the suggestions
//     };

//     const handleChange = (e) => {
//         const inputValue = e.target.value;
//         setQuery(inputValue);
//         if (inputValue.trim() !== '') {
//             handleSearch(inputValue);
//         } else {
//             setResults([]); // Clear the suggestions if input is empty
//             setCityLat(28.6448); // Reset to Delhi's coordinates
//             setCityLng(77.216721);
//         }
//     };

//     return (
//         <div>
//             <div className='text-center pt-10'>
//                 <input
//                     className='border border-rounded rounded-xl border-black p-2'
//                     type="text"
//                     value={query}
//                     onChange={handleChange}
//                     placeholder="Enter the city"
//                 />
//                 <ul>
//                     {results.map((result, index) => (
//                         <li key={index} onClick={() => handleSelect(result.display_name, result.lat, result.lon)}>
//                             {result.display_name}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="pt-8" style={{ width: '500px',height: '100px', margin: '0 auto' }}>
//                 <MapContainer center={[cityLat, cityLng]} zoom={1} style={{ height: '80vh', width: '50wh' }} scrollWheelZoom={false} maxBounds={[[-90, -180], [90, 180]]}>
//                     <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                     <Marker position={[cityLat, cityLng]}>
//                         <Popup>{query}</Popup>
//                     </Marker>
//                 </MapContainer>
//             </div>
//         </div>
//     );
// };

// export default Map;

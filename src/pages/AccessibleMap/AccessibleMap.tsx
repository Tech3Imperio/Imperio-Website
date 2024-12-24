// import React, { useEffect, useRef, useState } from "react";
// import Map from "ol/Map";
// import OSM from "ol/source/OSM";
// import TileLayer from "ol/layer/Tile";
// import View from "ol/View";
// import { fromLonLat } from "ol/proj";
// import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
// import VectorLayer from "ol/layer/Vector";
// import VectorSource from "ol/source/Vector";
// import Feature from "ol/Feature";
// import Point from "ol/geom/Point";
// import { Draw } from "ol/interaction";
// import { LineString } from "ol/geom";
// import { getLength } from "ol/sphere";

// const AccessibleMap: React.FC = () => {
//   const mapRef = useRef<Map | null>(null);
//   const [userLocation, setUserLocation] = useState<[number, number] | null>(
//     null
//   );
//   const [showLocationButton, setShowLocationButton] = useState(false);
//   const [measurementToolActive, setMeasurementToolActive] = useState(false);
//   const [drawLayer, setDrawLayer] = useState<VectorLayer | null>(null);

//   useEffect(() => {
//     // Create the map instance
//     const map = new Map({
//       layers: [
//         new TileLayer({
//           source: new OSM(),
//         }),
//       ],
//       target: "map", // The ID of the target HTML element
//       view: new View({
//         center: fromLonLat([78.9629, 20.5937]), // Default to center of India
//         zoom: 5,
//       }),
//     });

//     // Store the map instance in the ref
//     mapRef.current = map;

//     // Cleanup the map instance when the component is unmounted
//     return () => {
//       map.setTarget(undefined); // Proper cleanup
//     };
//   }, []);

//   // Function to get user's current geolocation and update the map
//   const getUserLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude, accuracy } = position.coords;

//           // Set user location in the state
//           setUserLocation([longitude, latitude]);

//           // Update map view to center on the user's location
//           if (mapRef.current) {
//             const view = mapRef.current.getView();
//             view.setCenter(fromLonLat([longitude, latitude]));
//             view.setZoom(12);
//           }

//           // Add marker for the user's location
//           addUserLocationMarker(longitude, latitude);
//         },
//         (error) => {
//           console.error("Error getting geolocation: ", error);
//           alert(
//             "Unable to retrieve location. Please make sure location services are enabled."
//           );
//         },
//         {
//           enableHighAccuracy: true,
//           timeout: 5000,
//           maximumAge: 0,
//         }
//       );
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   };

//   // Add a marker to the map for the user's location
//   const addUserLocationMarker = (longitude: number, latitude: number) => {
//     if (mapRef.current) {
//       const markerLayer = new VectorLayer({
//         source: new VectorSource({
//           features: [
//             new Feature({
//               geometry: new Point(fromLonLat([longitude, latitude])),
//             }),
//           ],
//         }),
//         style: new Style({
//           image: new CircleStyle({
//             radius: 10,
//             fill: new Fill({ color: "red" }),
//             stroke: new Stroke({ color: "white", width: 2 }),
//           }),
//         }),
//       });

//       // Add the marker layer to the map
//       mapRef.current.addLayer(markerLayer);
//     }
//   };

//   // Zoom out function
//   const handleZoomOut = () => {
//     if (mapRef.current) {
//       const view = mapRef.current.getView();
//       const zoom = view.getZoom();
//       if (zoom !== undefined) {
//         view.setZoom(zoom - 1);
//       }
//     }
//   };

//   // Zoom in function
//   const handleZoomIn = () => {
//     if (mapRef.current) {
//       const view = mapRef.current.getView();
//       const zoom = view.getZoom();
//       if (zoom !== undefined) {
//         view.setZoom(zoom + 1);
//       }
//     }
//   };

//   // Refresh the map (reset to initial center and zoom)
//   const refreshMap = () => {
//     if (mapRef.current) {
//       const view = mapRef.current.getView();
//       view.setCenter(fromLonLat([78.9629, 20.5937])); // Reset to India center
//       view.setZoom(5);
//     }
//   };

//   // Activate the measurement tool
//   const toggleMeasurementTool = () => {
//     if (mapRef.current) {
//       const map = mapRef.current;
//       if (measurementToolActive) {
//         // Remove the current drawing interaction
//         if (drawLayer) {
//           map.removeLayer(drawLayer);
//         }
//         setMeasurementToolActive(false);
//       } else {
//         // Add the drawing interaction to measure
//         const vectorSource = new VectorSource();
//         const newDrawLayer = new VectorLayer({
//           source: vectorSource,
//           style: new Style({
//             stroke: new Stroke({
//               color: "#ffcc33",
//               width: 2,
//             }),
//           }),
//         });
//         map.addLayer(newDrawLayer);
//         setDrawLayer(newDrawLayer);

//         const draw = new Draw({
//           source: vectorSource,
//           type: "LineString",
//         });

//         draw.on("drawend", (event) => {
//           const length = getLength(event.feature.getGeometry());
//           alert(`Line length: ${length.toFixed(2)} meters`);
//         });

//         map.addInteraction(draw);
//         setMeasurementToolActive(true);
//       }
//     }
//   };

//   return (
//     <div className="font-sans bg-gray-100">
//       {/* Skip Link for Accessibility */}
//       <a className="skiplink sr-only focus:not-sr-only" href="#map">
//         Go to map
//       </a>

//       {/* Map Container with adjusted size */}
//       <div id="map" className="map h-[100vh] w-full" tabIndex={0}></div>

//       {/* Zoom Controls */}
//       <div className="absolute top-1/2 left-4 transform -translate-y-1/2 space-y-4">
//         <button
//           id="zoom-in"
//           onClick={handleZoomIn}
//           className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//         >
//           +
//         </button>
//         <button
//           id="zoom-out"
//           onClick={handleZoomOut}
//           className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//         >
//           -
//         </button>

//         {/* Settings Button */}
//         <button
//           onClick={() => setShowLocationButton(!showLocationButton)}
//           className="px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
//         >
//           ⚙️
//         </button>

//         {/* "My Location" Button */}
//         {showLocationButton && (
//           <button
//             onClick={getUserLocation}
//             className="mt-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
//           >
//             📍
//           </button>
//         )}

//         {/* Refresh Map Button */}
//         <button
//           onClick={refreshMap}
//           className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
//         >
//           🔄
//         </button>

//         {/* Measurement Tool Button */}
//         <button
//           onClick={toggleMeasurementTool}
//           className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
//         >
//           📏
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AccessibleMap;
// import React, { useEffect, useRef, useState } from "react";
// import Map from "ol/Map";
// import OSM from "ol/source/OSM";
// import TileLayer from "ol/layer/Tile";
// import View from "ol/View";
// import { fromLonLat } from "ol/proj";
// import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
// import VectorLayer from "ol/layer/Vector";
// import VectorSource from "ol/source/Vector";
// import Feature from "ol/Feature";
// import Point from "ol/geom/Point";
// import { Draw } from "ol/interaction";
// import { getLength } from "ol/sphere";
// import {
//   IoSettingsSharp,
//   IoRefresh,
//   IoDownload,
//   IoResize,
// } from "react-icons/io5";

// const AccessibleMap: React.FC = () => {
//   const mapRef = useRef<Map | null>(null);
//   const [userLocation, setUserLocation] = useState<[number, number] | null>(
//     null
//   );
//   const [measurementToolActive, setMeasurementToolActive] = useState(false);
//   const [drawLayer, setDrawLayer] = useState<VectorLayer | null>(null);
//   const [measurementResult, setMeasurementResult] = useState<string | null>(
//     null
//   );
//   const [isSettingsOpen, setIsSettingsOpen] = useState(false);

//   useEffect(() => {
//     const map = new Map({
//       layers: [
//         new TileLayer({
//           source: new OSM(),
//         }),
//       ],
//       target: "map",
//       view: new View({
//         center: fromLonLat([78.9629, 20.5937]),
//         zoom: 5,
//       }),
//     });

//     mapRef.current = map;

//     return () => {
//       map.setTarget(undefined);
//     };
//   }, []);

//   useEffect(() => {
//     if (mapRef.current) {
//       mapRef.current.updateSize();
//     }
//   }, []);

//   const getUserLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setUserLocation([longitude, latitude]);

//           if (mapRef.current) {
//             const view = mapRef.current.getView();
//             view.setCenter(fromLonLat([longitude, latitude]));
//             view.setZoom(12);
//           }

//           addUserLocationMarker(longitude, latitude);
//         },
//         (error) => {
//           console.error("Error getting geolocation: ", error);
//           alert(
//             "Unable to retrieve location. Please make sure location services are enabled."
//           );
//         },
//         {
//           enableHighAccuracy: true,
//           timeout: 5000,
//           maximumAge: 0,
//         }
//       );
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   };

//   const addUserLocationMarker = (longitude: number, latitude: number) => {
//     if (mapRef.current) {
//       const markerLayer = new VectorLayer({
//         source: new VectorSource({
//           features: [
//             new Feature({
//               geometry: new Point(fromLonLat([longitude, latitude])),
//             }),
//           ],
//         }),
//         style: new Style({
//           image: new CircleStyle({
//             radius: 10,
//             fill: new Fill({ color: "red" }),
//             stroke: new Stroke({ color: "white", width: 2 }),
//           }),
//         }),
//       });

//       mapRef.current.addLayer(markerLayer);
//     }
//   };

//   const handleZoomOut = () => {
//     if (mapRef.current) {
//       const view = mapRef.current.getView();
//       const zoom = view.getZoom();
//       if (zoom !== undefined) {
//         view.setZoom(zoom - 1);
//       }
//     }
//   };

//   const handleZoomIn = () => {
//     if (mapRef.current) {
//       const view = mapRef.current.getView();
//       const zoom = view.getZoom();
//       if (zoom !== undefined) {
//         view.setZoom(zoom + 1);
//       }
//     }
//   };

//   const refreshMap = () => {
//     if (mapRef.current) {
//       const map = mapRef.current;
//       map
//         .getLayers()
//         .getArray()
//         .slice(1)
//         .forEach((layer) => map.removeLayer(layer));
//       map
//         .getInteractions()
//         .getArray()
//         .slice(6)
//         .forEach((interaction) => map.removeInteraction(interaction));
//       map.getView().setCenter(fromLonLat([78.9629, 20.5937]));
//       map.getView().setZoom(5);
//       setMeasurementToolActive(false);
//       setMeasurementResult(null);
//       setUserLocation(null);
//     }
//   };

//   const downloadMap = () => {
//     if (mapRef.current) {
//       mapRef.current.once("rendercomplete", function () {
//         const mapCanvas = document.createElement("canvas");
//         const size = mapRef.current!.getSize();
//         mapCanvas.width = size![0];
//         mapCanvas.height = size![1];
//         const mapContext = mapCanvas.getContext("2d");
//         Array.prototype.forEach.call(
//           document.querySelectorAll(".ol-layer canvas"),
//           function (canvas) {
//             if (canvas.width > 0) {
//               const opacity = canvas.parentNode.style.opacity;
//               mapContext!.globalAlpha = opacity === "" ? 1 : Number(opacity);
//               const transform = canvas.style.transform;
//               const matrix = transform
//                 .match(/^matrix$$([^\(]*)$$$/)[1]
//                 .split(",")
//                 .map(Number);
//               CanvasRenderingContext2D.prototype.setTransform.apply(
//                 mapContext,
//                 matrix
//               );
//               mapContext!.drawImage(canvas, 0, 0);
//             }
//           }
//         );
//         mapCanvas.toBlob(function (blob) {
//           if (blob) {
//             const link = document.createElement("a");
//             link.href = URL.createObjectURL(blob);
//             link.download = "map.png";
//             link.click();
//           }
//         });
//       });
//       mapRef.current.renderSync();
//     }
//   };

//   const toggleMeasurementTool = () => {
//     if (mapRef.current) {
//       const map = mapRef.current;
//       if (measurementToolActive) {
//         if (drawLayer) {
//           map.removeLayer(drawLayer);
//         }
//         setMeasurementToolActive(false);
//       } else {
//         const vectorSource = new VectorSource();
//         const newDrawLayer = new VectorLayer({
//           source: vectorSource,
//           style: new Style({
//             stroke: new Stroke({
//               color: "#ffcc33",
//               width: 2,
//             }),
//           }),
//         });
//         map.addLayer(newDrawLayer);
//         setDrawLayer(newDrawLayer);

//         const draw = new Draw({
//           source: vectorSource,
//           type: "LineString",
//         });

//         draw.on("drawend", (event) => {
//           const geometry = event.feature.getGeometry();
//           if (geometry) {
//             const length = getLength(geometry);
//             setMeasurementResult(`${length.toFixed(2)} meters`);
//           }
//         });

//         map.addInteraction(draw);
//         setMeasurementToolActive(true);
//       }
//     }
//   };

//   return (
//     <div className="font-sans bg-gray-100 h-screen flex flex-col relative">
//       <a className="skiplink sr-only focus:not-sr-only" href="#map">
//         Go to map
//       </a>

//       <div
//         id="map"
//         className="map h-[calc(100vh-4rem)] w-full"
//         style={{ minHeight: "400px" }}
//         tabIndex={0}
//       ></div>

//       <div className="absolute top-4 left-4 z-50">
//         <button
//           onClick={() => setIsSettingsOpen(!isSettingsOpen)}
//           className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <IoSettingsSharp size={24} />
//         </button>
//         {isSettingsOpen && (
//           <div className="absolute top-12 left-0 bg-white rounded-md shadow-lg p-2 space-y-2 z-10">
//             <button
//               onClick={getUserLocation}
//               className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 rounded-md"
//             >
//               📍 My Location
//             </button>
//             <button
//               onClick={refreshMap}
//               className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 rounded-md"
//             >
//               <IoRefresh className="mr-2" /> Refresh Map
//             </button>
//             <button
//               onClick={downloadMap}
//               className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 rounded-md"
//             >
//               <IoDownload className="mr-2" /> Download Map
//             </button>
//             <button
//               onClick={toggleMeasurementTool}
//               className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 rounded-md"
//             >
//               <IoResize className="mr-2" />{" "}
//               {measurementToolActive ? "Stop Measuring" : "Start Measuring"}
//             </button>
//           </div>
//         )}
//       </div>

//       {measurementResult && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-4 rounded-md">
//             <h2 className="text-lg font-bold mb-2">Measurement Result</h2>
//             <p>{measurementResult}</p>
//             <button
//               onClick={() => setMeasurementResult(null)}
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="absolute bottom-4 right-4 space-x-2">
//         <button
//           onClick={handleZoomIn}
//           className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           +
//         </button>
//         <button
//           onClick={handleZoomOut}
//           className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           -
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AccessibleMap;

// import React, { useEffect, useRef, useState } from "react";
// import Map from "ol/Map";
// import OSM from "ol/source/OSM";
// import TileLayer from "ol/layer/Tile";
// import View from "ol/View";
// import { fromLonLat } from "ol/proj";
// import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
// import VectorLayer from "ol/layer/Vector";
// import VectorSource from "ol/source/Vector";
// import Feature from "ol/Feature";
// import Point from "ol/geom/Point";
// import { Draw } from "ol/interaction";
// import { getLength } from "ol/sphere";
// import {
//   IoSettingsSharp,
//   IoRefresh,
//   IoDownload,
//   IoResize,
// } from "react-icons/io5";

// const AccessibleMap: React.FC = () => {
//   const mapRef = useRef<Map | null>(null);
//   const [userLocation, setUserLocation] = useState<[number, number] | null>(
//     null
//   );
//   const [measurementToolActive, setMeasurementToolActive] = useState(false);
//   const [drawLayer, setDrawLayer] = useState<VectorLayer | null>(null);
//   const [measurementResult, setMeasurementResult] = useState<string | null>(
//     null
//   );
//   const [isSettingsOpen, setIsSettingsOpen] = useState(false);

//   useEffect(() => {
//     const map = new Map({
//       layers: [
//         new TileLayer({
//           source: new OSM(),
//         }),
//       ],
//       target: "map",
//       view: new View({
//         center: fromLonLat([78.9629, 20.5937]),
//         zoom: 5,
//       }),
//     });

//     mapRef.current = map;

//     return () => {
//       map.setTarget(undefined);
//     };
//   }, []);

//   useEffect(() => {
//     if (mapRef.current) {
//       mapRef.current.updateSize();
//     }
//   }, []);

//   const getUserLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setUserLocation([longitude, latitude]);

//           if (mapRef.current) {
//             const view = mapRef.current.getView();
//             view.setCenter(fromLonLat([longitude, latitude]));
//             view.setZoom(12);
//           }

//           addUserLocationMarker(longitude, latitude);
//         },
//         (error) => {
//           console.error("Error getting geolocation: ", error);
//           alert(
//             "Unable to retrieve location. Please make sure location services are enabled."
//           );
//         },
//         {
//           enableHighAccuracy: true,
//           timeout: 5000,
//           maximumAge: 0,
//         }
//       );
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   };

//   const addUserLocationMarker = (longitude: number, latitude: number) => {
//     if (mapRef.current) {
//       const markerLayer = new VectorLayer({
//         source: new VectorSource({
//           features: [
//             new Feature({
//               geometry: new Point(fromLonLat([longitude, latitude])),
//             }),
//           ],
//         }),
//         style: new Style({
//           image: new CircleStyle({
//             radius: 10,
//             fill: new Fill({ color: "red" }),
//             stroke: new Stroke({ color: "white", width: 2 }),
//           }),
//         }),
//       });

//       mapRef.current.addLayer(markerLayer);
//     }
//   };

//   const handleZoomOut = () => {
//     if (mapRef.current) {
//       const view = mapRef.current.getView();
//       const zoom = view.getZoom();
//       if (zoom !== undefined) {
//         view.setZoom(zoom - 1);
//       }
//     }
//   };

//   const handleZoomIn = () => {
//     if (mapRef.current) {
//       const view = mapRef.current.getView();
//       const zoom = view.getZoom();
//       if (zoom !== undefined) {
//         view.setZoom(zoom + 1);
//       }
//     }
//   };

//   const refreshMap = () => {
//     if (mapRef.current) {
//       const map = mapRef.current;
//       map
//         .getLayers()
//         .getArray()
//         .slice(1)
//         .forEach((layer) => map.removeLayer(layer));
//       map
//         .getInteractions()
//         .getArray()
//         .slice(6)
//         .forEach((interaction) => map.removeInteraction(interaction));
//       map.getView().setCenter(fromLonLat([78.9629, 20.5937]));
//       map.getView().setZoom(5);
//       setMeasurementToolActive(false);
//       setMeasurementResult(null);
//       setUserLocation(null);
//     }
//   };

//   const downloadMap = () => {
//     if (mapRef.current) {
//       mapRef.current.once("rendercomplete", function () {
//         const mapCanvas = document.createElement("canvas");
//         const size = mapRef.current!.getSize();
//         mapCanvas.width = size![0];
//         mapCanvas.height = size![1];
//         const mapContext = mapCanvas.getContext("2d");
//         Array.prototype.forEach.call(
//           document.querySelectorAll(".ol-layer canvas"),
//           function (canvas) {
//             if (canvas.width > 0) {
//               const opacity = canvas.parentNode.style.opacity;
//               mapContext!.globalAlpha = opacity === "" ? 1 : Number(opacity);
//               const transform = canvas.style.transform;
//               const matrix = transform
//                 .match(/^matrix$$([^\(]*)$$$/)[1]
//                 .split(",")
//                 .map(Number);
//               CanvasRenderingContext2D.prototype.setTransform.apply(
//                 mapContext,
//                 matrix
//               );
//               mapContext!.drawImage(canvas, 0, 0);
//             }
//           }
//         );
//         mapCanvas.toBlob(function (blob) {
//           if (blob) {
//             const link = document.createElement("a");
//             link.href = URL.createObjectURL(blob);
//             link.download = "map.png";
//             link.click();
//           }
//         });
//       });
//       mapRef.current.renderSync();
//     }
//   };

//   const toggleMeasurementTool = () => {
//     if (mapRef.current) {
//       const map = mapRef.current;
//       if (measurementToolActive) {
//         if (drawLayer) {
//           map.removeLayer(drawLayer);
//         }
//         setMeasurementToolActive(false);
//       } else {
//         const vectorSource = new VectorSource();
//         const newDrawLayer = new VectorLayer({
//           source: vectorSource,
//           style: new Style({
//             stroke: new Stroke({
//               color: "#ffcc33",
//               width: 2,
//             }),
//           }),
//         });
//         map.addLayer(newDrawLayer);
//         setDrawLayer(newDrawLayer);

//         const draw = new Draw({
//           source: vectorSource,
//           type: "LineString",
//         });

//         draw.on("drawend", (event) => {
//           const geometry = event.feature.getGeometry();
//           if (geometry) {
//             const length = getLength(geometry);
//             setMeasurementResult(`${length.toFixed(2)} meters`);
//           }
//         });

//         map.addInteraction(draw);
//         setMeasurementToolActive(true);
//       }
//     }
//   };

//   return (
//     <div className="font-sans bg-gray-100 h-screen flex flex-col relative">
//       <a className="skiplink sr-only focus:not-sr-only" href="#map">
//         Go to map
//       </a>

//       <div
//         id="map"
//         className="map h-[calc(100vh-4rem)] w-full"
//         style={{ minHeight: "400px" }}
//         tabIndex={0}
//       ></div>

//       <div className="absolute top-4 left-4 z-50 flex items-center space-x-2">
//         {/* Settings button */}
//         <button
//           onClick={() => setIsSettingsOpen(!isSettingsOpen)}
//           className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <IoSettingsSharp size={24} />
//         </button>

//         {/* Zoom In button */}
//         <button
//           onClick={handleZoomIn}
//           className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           +
//         </button>

//         {/* Zoom Out button */}
//         <button
//           onClick={handleZoomOut}
//           className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           -
//         </button>

//         {/* Settings dropdown */}
//         {isSettingsOpen && (
//           <div className="absolute top-12 left-0 bg-white rounded-md shadow-lg p-2 space-y-2 z-10">
//             <button
//               onClick={getUserLocation}
//               className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 rounded-md"
//             >
//               📍 My Location
//             </button>
//             <button
//               onClick={refreshMap}
//               className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 rounded-md"
//             >
//               <IoRefresh className="mr-2" /> Refresh Map
//             </button>
//             <button
//               onClick={downloadMap}
//               className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 rounded-md"
//             >
//               <IoDownload className="mr-2" /> Download Map
//             </button>
//             <button
//               onClick={toggleMeasurementTool}
//               className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 rounded-md"
//             >
//               <IoResize className="mr-2" />{" "}
//               {measurementToolActive ? "Stop Measuring" : "Start Measuring"}
//             </button>
//           </div>
//         )}
//       </div>

//       {measurementResult && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-4 rounded-md">
//             <h2 className="text-lg font-bold mb-2">Measurement Result</h2>
//             <p>{measurementResult}</p>
//             <button
//               onClick={() => setMeasurementResult(null)}
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AccessibleMap;

import React, { useEffect, useRef, useState } from "react";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Draw } from "ol/interaction";
import { getLength } from "ol/sphere";
import {
  IoSettingsSharp,
  IoRefresh,
  IoDownload,
  IoResize,
} from "react-icons/io5";

const AccessibleMap: React.FC = () => {
  const mapRef = useRef<Map | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );
  const [measurementToolActive, setMeasurementToolActive] = useState(false);
  const [drawLayer, setDrawLayer] = useState<VectorLayer | null>(null);
  const [measurementResult, setMeasurementResult] = useState<string | null>(
    null
  );
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: "map",
      view: new View({
        center: fromLonLat([78.9629, 20.5937]),
        zoom: 5,
      }),
    });

    mapRef.current = map;

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.updateSize();
    }
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([longitude, latitude]);

          if (mapRef.current) {
            const view = mapRef.current.getView();
            view.setCenter(fromLonLat([longitude, latitude]));
            view.setZoom(12);
          }

          addUserLocationMarker(longitude, latitude);
        },
        (error) => {
          console.error("Error getting geolocation: ", error);
          alert(
            "Unable to retrieve location. Please make sure location services are enabled."
          );
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const addUserLocationMarker = (longitude: number, latitude: number) => {
    if (mapRef.current) {
      const markerLayer = new VectorLayer({
        source: new VectorSource({
          features: [
            new Feature({
              geometry: new Point(fromLonLat([longitude, latitude])),
            }),
          ],
        }),
        style: new Style({
          image: new CircleStyle({
            radius: 10,
            fill: new Fill({ color: "red" }),
            stroke: new Stroke({ color: "white", width: 2 }),
          }),
        }),
      });

      mapRef.current.addLayer(markerLayer);
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      const view = mapRef.current.getView();
      const zoom = view.getZoom();
      if (zoom !== undefined) {
        view.setZoom(zoom - 1);
      }
    }
  };

  const handleZoomIn = () => {
    if (mapRef.current) {
      const view = mapRef.current.getView();
      const zoom = view.getZoom();
      if (zoom !== undefined) {
        view.setZoom(zoom + 1);
      }
    }
  };

  const refreshMap = () => {
    if (mapRef.current) {
      const map = mapRef.current;
      map
        .getLayers()
        .getArray()
        .slice(1)
        .forEach((layer) => map.removeLayer(layer));
      map
        .getInteractions()
        .getArray()
        .slice(6)
        .forEach((interaction) => map.removeInteraction(interaction));
      map.getView().setCenter(fromLonLat([78.9629, 20.5937]));
      map.getView().setZoom(5);
      setMeasurementToolActive(false);
      setMeasurementResult(null);
      setUserLocation(null);
    }
  };

  const downloadMap = () => {
    if (mapRef.current) {
      mapRef.current.renderSync();

      mapRef.current.once("rendercomplete", function () {
        const mapCanvas = document.createElement("canvas");
        const size = mapRef.current!.getSize();
        mapCanvas.width = size![0];
        mapCanvas.height = size![1];
        const mapContext = mapCanvas.getContext("2d");

        Array.prototype.forEach.call(
          document.querySelectorAll(".ol-layer canvas"),
          function (canvas) {
            if (canvas.width > 0) {
              const opacity = canvas.parentNode.style.opacity;
              mapContext!.globalAlpha = opacity === "" ? 1 : Number(opacity);
              const transform = canvas.style.transform;
              const matrix = transform
                .match(/^matrix\(([^)]*)\)$/)[1]
                .split(",")
                .map(Number);
              CanvasRenderingContext2D.prototype.setTransform.apply(
                mapContext,
                matrix
              );
              mapContext!.drawImage(canvas, 0, 0);
            }
          }
        );

        mapCanvas.toBlob(function (blob) {
          if (blob) {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "map.png";
            link.click();
          }
        });
      });
    }
  };

  const toggleMeasurementTool = () => {
    if (mapRef.current) {
      const map = mapRef.current;
      if (measurementToolActive) {
        if (drawLayer) {
          map.removeLayer(drawLayer);
        }
        setMeasurementToolActive(false);
      } else {
        const vectorSource = new VectorSource();
        const newDrawLayer = new VectorLayer({
          source: vectorSource,
          style: new Style({
            stroke: new Stroke({
              color: "#ffcc33",
              width: 2,
            }),
          }),
        });
        map.addLayer(newDrawLayer);
        setDrawLayer(newDrawLayer);

        const draw = new Draw({
          source: vectorSource,
          type: "LineString",
        });

        draw.on("drawend", (event) => {
          const geometry = event.feature.getGeometry();
          if (geometry) {
            const length = getLength(geometry);
            setMeasurementResult(`${length.toFixed(2)} meters`);
          }
        });

        map.addInteraction(draw);
        setMeasurementToolActive(true);
      }
    }
  };

  return (
    <div className="font-sans bg-gray-100 h-screen flex flex-col relative">
      <a className="skiplink sr-only focus:not-sr-only" href="#map">
        Go to map
      </a>

      <div
        id="map"
        className="map h-[calc(100vh-4rem)] w-full"
        style={{ minHeight: "400px" }}
        tabIndex={0}
      ></div>

      <div className="absolute top-4 left-4 z-50 flex items-center space-x-2">
        {/* Settings button */}
        <button
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IoSettingsSharp size={24} />
        </button>

        {/* Zoom In button */}
        <button
          onClick={handleZoomIn}
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          +
        </button>

        {/* Zoom Out button */}
        <button
          onClick={handleZoomOut}
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          -
        </button>

        {/* Settings dropdown */}
        {isSettingsOpen && (
          <div className="absolute top-12 left-0 bg-white rounded-md shadow-lg p-2 space-y-2 z-10">
            <button
              onClick={getUserLocation}
              className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 rounded-md"
            >
              📍 My Location
            </button>
            <button
              onClick={refreshMap}
              className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 rounded-md"
            >
              <IoRefresh className="mr-2" /> Refresh Map
            </button>
            <button
              onClick={downloadMap}
              className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 rounded-md"
            >
              <IoDownload className="mr-2" /> Download Map
            </button>
            <button
              onClick={toggleMeasurementTool}
              className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 rounded-md"
            >
              <IoResize className="mr-2" />{" "}
              {measurementToolActive ? "Stop Measuring" : "Start Measuring"}
            </button>
          </div>
        )}
      </div>

      {measurementResult && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-lg font-bold mb-2">Measurement Result</h2>
            <p>{measurementResult}</p>
            <button
              onClick={() => setMeasurementResult(null)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibleMap;

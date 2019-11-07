import React, { useEffect, useState } from "react";
import NasaCard from "../components/NasaCard";
import axios from "axios";



export default function NasaList() {

const [nasaData, setNasaData] = useState([]);

    useEffect(() => {
        axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=To3dFNkZy66CoZ85LZ51PiyaJcAhxBGxNpKe15Pb`)
          .then(response => {
            // const nasaData = response.data;
            console.log(response.data);
            setNasaData(response.data);
          })
          .catch(error => {
            console.log("The data was not returned", error);
          });
      }, []);

    return (
        <div className="nasaList">
          <NasaCard title ={nasaData.title} 
          explanation={nasaData.explanation} date={nasaData.date} url={nasaData.url}/>
        </div>
    );
}
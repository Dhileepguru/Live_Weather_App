import axios from "axios";
import { useState } from "react";

function App(){

    var [degree,fun1]=useState("0");
    var [city, fun2]=useState("avinashi");
    var [desc,fun3]=useState("Rainy");
    var [evalue,fun4]=useState("");

    function handlevent(event){
        fun4(event.target.value);
    }

    function getdata(){
        var weatherdata=  axios(`https://api.openweathermap.org/data/2.5/weather?q=${evalue}&appid=dfb811c9ff696652fa37bd99de6d5efa`);


        weatherdata.then(function(dalta){
            fun1(dalta.data.main.temp)
            fun3(dalta.data.weather[0].main)
            fun2(dalta.data.name)
        })
    }

    return(
    <div className="flex flex-row justify-center h-[100vh] items-center">
        <div  style={{ "backgroundImage": "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%"}} className="p-2 rounded-md shadow">
        <h1 className="font-medium">Hey!⛅</h1>
        <p className="text-xs">Do you want to know the weather report :) </p>
        <input onChange={(handlevent)} className=" outline-none rounded-md h-6 mt-2 text-sm p-1" placeholder="City Name"></input>
        <br/>
        <button  onClick= {getdata} className="bg-black text-white rounded-md p-1 mt-2 text-xs"> Get Report ⚡</button>
        <p className="text-xs mt-2">Degree: {degree}  | City: {city} | Weather: {desc} </p>
        </div>

        
    </div>)
    
}



export default App

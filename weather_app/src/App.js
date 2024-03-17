
function App(){
    return(
    <div className=" flex flex-row justify-center h-[100vh] items-center; items-center">
        <div className="bg-red-500 rounded-md shadow p-2">
        <h1 className="font-medium">Hey !</h1>
        <p className="text-xs">Do you want to know the weather report :) </p>
        <input className=" outline-none rounded-md h-6 mt-2 text-sm p-1" placeholder="City Name"></input>
        <br/>
        <button className="bg-black text-white rounded-md p-1 mt-2 text-xs"> Get Report</button>
        <p className="text-xs mt-2">Degree:123|City:Avinashi|Weather:Rainy </p>
        </div>

        
    </div>)
    
}



export default App

import TorStatus from '../components/TorStatus'
import React, {useEffect, useState} from 'react';
import { DiReact } from "react-icons/di";
require('dotenv').config()

const ICON = process.env.REACT_APP_ICON;

/* Change this icon below and where its printed depending on the backend */

function Home() {

    const URL = process.env.REACT_APP_API_URL
    console.log(`Our URL: ${URL}`)

    const [torResult, setTorResult] = useState([])
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState()

    /* setIcon is for setting the backend icon*/
    const [Icon, setIcon] = useState();

    /* Use dynamic loading to load the icon */
    useEffect(() => {
        const loadIcon = async () => {
          const Icon = await import("react-icons/di").then(m => m[ICON]);
          setIcon(() => Icon);
        };
        loadIcon();
      }, []);
    

    useEffect(() => {
        getResults()
    }, [query]);

    const updateSearch = (e) => {
        setSearch(e.target.value)
    }

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search)
        setSearch('')
      }
    
     const getResults = async () => {
        if((query == undefined) === false)
        {
            const response = await fetch(`${URL}?ipinput=${query}`)
            const data = await response.json();
            setTorResult(data)
            console.log(data)
        }
    }

    const getMyIP = async (e) => {
        const response = await fetch(`${URL}?myip`)
        const data = await response.json();
        setSearch(data['ip'])
    }

    return (
        <div>
              <div className="flex flex-col items-center justify-center bg-gray-300">
                <TorStatus result={torResult.result} ip={torResult.ip} errormsg={torResult.error}/>
                <form className="rounded overflow-hidden my-16 inline-flex" onSubmit={getSearch}>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" onChange={updateSearch} type="text" placeholder="<IP Goes Here>" value={search}></input>
                    <button className="ml-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit">
                        Check IP
                    </button>
                    <button className="ml-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={getMyIP}>
                        Check My IP
                    </button>
                </form>
                <h1>
                    Frontend Written In <DiReact size={64} style={{display: 'inline', color: '#61DBFB'}} /> - Backend Written In {Icon ? <Icon size={64} style={{display: 'inline', color: '#b0b3d6'}} /> : null} 
                </h1>
            </div>
        </div>
    )
}

export default Home

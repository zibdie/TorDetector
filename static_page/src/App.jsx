import React from 'react';
import { IoLogoGithub } from 'react-icons/io'
import Home from './pages/Home'
import About from './pages/About'
import Apiuse from './pages/Apiuse'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
require('dotenv').config()


function App() {

    const navStyle = {
        color: 'white'
    }

        return (
        <body className="bg-gray-300 min-h-screen min-w-full items-center">
            <Router>
                <header className="bg-green-300 rounded-b py-2">
                    <Link to="/" style={navStyle}><button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mx-4">Home</button></Link>
                    <Link to="/about" style={navStyle}><button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mx-4">About</button></Link>
                    <Link to="/apiuse" style={navStyle}><button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mx-4">API Usage</button></Link>
                    <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded mx-4" style={{display: 'inline'}} href="https://redirct.page.link/TorDetectorGithub" rel="noopener noreferrer" target="_blank"> <IoLogoGithub style={{display: 'inline'}}/> Fork Me!</a>
                </header>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/apiuse" exact component={Apiuse} />
            </Router>
        </body>
        );
    }


export default App;
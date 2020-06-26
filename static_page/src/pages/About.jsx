import React from 'react'
import { Link } from 'react-router-dom'

function About() {

    const navStyle = {
        color: 'white'
    }

    return (
        <div className="flex flex-col items-center justify-center bg-gray-300">
            <h1 style={{fontFamily: 'Oswald', fontSize: '32px'}}>About This Project</h1>
            <h2 style={{fontWeight: 'bold'}}>A Challenge to Diversify...</h2>
            <p>
            Some people say they have a specific language or two they are comfortable with and would not spend their time working one more. It could be Python/JavaScript or C++/Java or some other combination but beyond their selected languages, 
            they could not see themselves learning another. The idea of this project was to implement the same backend system in many different languages, the script should:
            <ol className="list-decimal list-inside" style={{fontWeight: 'bold'}}>
                <li><span style={{fontWeight: 'normal'}}>Serve static HTML files, such as the panel to check if an IP is a Tor Exit node or not</span></li>
                <li><span style={{fontWeight: 'normal'}}>Have an accessible API endpoint that returns information in JSON</span></li>
                <li><span style={{fontWeight: 'normal'}}>Must make DNS queries and process that information</span></li>
            </ol>
            To get used to the language, the following tips are encouraged:
            <ul className="list-disc list-inside" style={{fontWeight: 'bold'}}>
                <li><span style={{fontWeight: 'normal'}}>Use that language to run as a server and do the DNS query</span></li>
                <li><span style={{fontWeight: 'normal'}}>Use dependancies from that language's package manager to encourage using outside libraries. (e.g. Use ExpressJS for JS or Flask for Python)</span></li>
                <li><span style={{fontWeight: 'normal'}}>Minimize the need to use system specific commands (e.g. If a language as a built-in dns query or outside dependencies that can, use that instead of running system specific commands like 'dig' for portability)</span></li>
            </ul>
            I feel that these tips help a programmer diversify their skillset and get a good dive into the architect of a language because it forces a programmer to use as many language-specific tools and managers and discourages using platform-specific commands. 
            Since you know what the results should be, you will not feel lost about what responses you are expecting and know if the error is in the code or something else.
            </p>
            <h2 style={{fontWeight: 'bold'}} className="mt-5">Another Simple Yet Helpful API...</h2>
            <p>The Tor Project is famous for it's free, open source, project, The Onion Router (or 'Tor' for short). It allows users to anonymously connect to websites without the server owner knowing exactly who they are. 
                This is great for journalists and military personal since it gives them ability to share information, usually from restricted countries, to the outside world to be reported and exposed. 
                Sadly, this anonymity can and will be abused. Not every website needs a reason to connect anonymously too, which is why we created this API. By passing in an IP address, you can check to see if the IP address is a Tor Exit Node (indicating that a Tor user is connecting) and deal with them appropriately.
    Since CORS is disabled, can even send a clientside request if you do not have control of the backend server. Check out the 'API usage' for more information.
            </p>
        </div>
    )
}

export default About

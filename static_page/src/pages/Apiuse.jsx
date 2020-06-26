import React from 'react'


{/* Add Styling and find out how to import font */}
function apiuse() {
    return (
        <div className="flex flex-col justify-center bg-gray-300 font-body">
            <div className="text-center mt-10 mb-3">
                <h1 style={{fontFamily: 'Sriracha', fontSize: '32px'}}>Sending a request to the API</h1>
            </div>
            <p style={{fontFamily: 'Noto Sans KR'}}>The API has two methods:</p>
            <ul className="list-disc list-inside ml-10 mb-3">
                <li> {`${process.env.REACT_APP_API_URL}`}<span style={{fontWeight: 'bold'}}>{`?ipinput=<IP Here>`}</span> <span style={{fontStyle: 'italic'}}> - Check to see if a given IP address is a Tor Exit Node</span></li>
                <li>  {`${process.env.REACT_APP_API_URL}`}<span style={{fontWeight: 'bold'}}>{`?myip`}</span> <span style={{fontStyle: 'italic'}}> - Outputs the current user's IP address</span></li>
            </ul>
            <p style={{fontFamily: 'Noto Sans KR'}}>The server will reply with a JSON-formatted response with the following items:</p>
            <ul className="list-disc list-inside  ml-10" style={{fontWeight: 'bold'}}>
                <li> status <span style={{fontWeight: 'normal', fontStyle: 'italic'}}> - Tells the user if the command was successful (1) or a failure (0). If the command failed, an 'error' item will be included </span></li>
                <li> result <span style={{fontWeight: 'normal', fontStyle: 'italic'}}> (Only when calling 'ipinput') - Tells the user if the IP specified is a Tor Exit Node (1) or not (0)</span></li>
                <li> command <span style={{fontWeight: 'normal', fontStyle: 'italic'}}> - Tells the user what action was made such as checking if an IP is a Tor Exit Node ('isTor') or retrieving the client's IP ('myip') </span></li>
                <li> ip <span style={{fontWeight: 'normal', fontStyle: 'italic'}}> - Tells the user what IP the server was checking against (if using the 'isTor' command) or what the server sees (if using the 'myip' command) </span></li>
            </ul>
        </div>
    )
}

export default apiuse

import React from 'react'
import defaultlogo from '../assets/img/logo-default.png'
import toryes from '../assets/img/yes-tor.png'
import torno from '../assets/img/no-tor.png'

function TorStatus({result, ip, error}) {

    let currDay = (new Date(Date.now())).toISOString().split('T')[0]

    const resultShow =(result, ip, error) => 
    {
        if(result === 0)
        {
            return {'img': torno, 'msg': 'This user does not seem to be a Tor exit node', 'ip': ip}
        }
        else if(result === 1)
        {
            return {'img': toryes, 'msg': 'This user is a Tor exit node', 'ip': ip}
        }
        else if(result === -1)
        {
            return {'img': defaultlogo, 'msg': `There was an error: ${error}`, 'ip': ip}
        }
        else
        {
            return {'img': defaultlogo, 'msg': `Enter an IP Address & Check If Its a Tor Exit Node!`, 'ip': ip} 
        }
    }
    
    return (
        <div>
             <div className="max-w-sm rounded overflow-hidden shadow-lg border border-blue-900">
                    <img className="w-full" src={resultShow(result, ip, error)['img']} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-center" id="TorStatusMain">{resultShow(result, ip, error)['msg']}</div>
                        <p className="text-gray-700 text-base text-center" id="TorStatusDescriptions">
                        {result < 2 &&
                            <div>
                                 If you want to see detailed results, you can check out the ExoneraTor statistics from the official Tor Metrics on this IP <a href={`https://metrics.torproject.org/exonerator.html?ip=${ip}&timestamp=${currDay}&lang=en`} rel="noopener noreferrer" target="_blank" className="g-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded">here!</a>
                            </div>
                        }
                        </p>
                    </div>
                </div> 
        </div>
    );
}

export default TorStatus

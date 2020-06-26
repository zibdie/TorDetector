<?php
header('Content-Type: application/json'); //Return as JSON
/* Do not allow caching */
header("Access-Control-Allow-Origin: *");
header('Expires: Sun, 01 Jan 1970 00:00:00 GMT');
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: post-check=0, pre-check=0', FALSE);
header('Pragma: no-cache');

//If the field 'ipaddr' is empty, use the users IP address. Otherwise, use the 'ipaddr' parameter
$IPAddr = (empty($_GET['ipinput'])) ? $_SERVER['REMOTE_ADDR'] : $_GET['ipinput'];

function isTor($IPTest)
{
    //Check to see if its a valid IP Address 
    $pattern = '/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/';
    if(preg_match($pattern, $IPTest) === 0)
    {
        return ['status' => 0, "error" => "Invalid IP Address", "command" => "isTor", "ip" => $IPTest];
    }

    $IPCheck = implode(".", array_reverse(explode('.', $IPTest))); //Read the IP address in reverse
    $results = dns_get_record($IPCheck . ".dnsel.torproject.org", DNS_A); //Do the DNS Request
    //Return the result [if 127.0.0.2 then its a Tor Exit Note, otherwise its not]
    return ['status' => 1, "result" => ($results[0]['ip'] === '127.0.0.2') ? 1 : 0, "command" => "isTor", "ip" => $IPTest];
}

if(isset($_GET['myip']))
{
    echo json_encode(['status' => 1, 'ip' => $_SERVER['REMOTE_ADDR'], "command" => "myip"]);
}
elseif(isset($_GET['ipinput']))
{
    echo json_encode(isTor($IPAddr));
}
else
{
    echo ['status' => -1, 'error' => 'Invalid request'];
}

?>
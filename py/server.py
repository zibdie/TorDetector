from flask import Flask, render_template, send_from_directory, jsonify, request
import os
#How to render a directory with both static/dynamic files in - Use this settings for React Projects
app = Flask(__name__, static_folder='templates/', static_url_path='')
import werkzeug
import socket
import re
import dns.resolver #pip install dnspython - https://github.com/rthalley/dnspython

#Variables:
PORTENV = os.environ.get('PORT') or 5003
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0


@app.route('/api', methods=['GET'])
def api():
    if('myip' in request.args):
        headers_list = request.headers.getlist("X-Forwarded-For")
        user_ip = headers_list[0] if headers_list else request.remote_addr
        return jsonify({'status': 1, 'ip': user_ip, 'command': 'myip'})
    elif('ipinput' in request.args):
        user_input = request.args.get('ipinput')
        regexcheck = re.match(r'^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$', user_input)
        if not regexcheck:
            return jsonify({'status': -1, 'error': 'Invalid IP Address', 'command': 'isTor', 'ip': user_input })
        else:
            #Using 'reverse()' to reverse a list wont work because it will return 'None' so we use [::-1]
            ipChkr = ".".join(user_input.split(".")[::-1])
            try:
                res = dns.resolver.query('{}.dnsel.torproject.org'.format(ipChkr), 'a')
                print(res)
                return jsonify({'status': 1, 'result': 1, 'command': 'isTor', 'ip': '{}'.format(user_input)})
            except:
                return jsonify({'status': 1, 'result': 0, 'command': 'isTor', 'ip': '{}'.format(user_input)})
    else:
        return jsonify({"status": -1, "error": 'Invalid request'})


@app.route('/')
def main():
    return app.send_static_file("index.html")

#No caching
@app.after_request
def clearcache(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate, public, max-age=0"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=PORTENV, debug=True)

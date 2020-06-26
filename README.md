
![Tor Detector Logo](https://i.imgur.com/c4GFQiG.png)

# Tor Detector
A method to detect if an incoming user is behind a Tor Exit Node. As an extra challenge to get used to the way a variety of languages work, I have challenged myself to rewrite the same backend in different languages to get used to the syntax, variables, packages, and package managers widely used in that specific language (if needed).

## Explanation

### What is Tor?

The Tor Project is famous for it's free, open source, project, The Onion Router (or 'Tor' for short). It allows users to anonymously connect to websites without the server owner knowing exactly who they are. This is great for journalists and military personal since it gives them ability to share information, usually from restricted countries, to the outside world to be reported and exposed. If you are interested, you can find more information about the Tor Project on their official website [here](https://www.torproject.org/)

### How does Tor Detector work?
Simple enough, Tor has a DNS server you can query with an IP address and it will reply with a 127.0.0.2 (indicating the IP is a Tor Exit Node) or nothing at all (indicating the IP is not a Tor Exit Node)

# Project Goals
The idea is to get myself familiarized with many languages and their environments as possible, for now I have written the backend in:

* Python 
* NodeJS
* PHP

However I do want to expand more when I get the time.

Another goal was to get a dive into ReactJS. This is my first project using ReactJS and I have learned about 'useState, 'useEffect', 'React Router', 'Components' and more.

# Deployment

Each folder has a name of a language the backend was written in (for example, the 'js' folder has the backend written in NodeJS and so on). Inside each folder is a .env file which has a path to configure the API endpoint (However, if you use the Docker configuration, you will not need to concern yourself with the .env file)

### Docker

It is highly recommended you deploy using Docker as the project & setup was designed and tested using Docker. As long as you have Docker installed, no extra dependancies will need to be installed as everything will run inside the container. 

1. Select the language you wish to choose
2. Rename the 'Dockerfile.(language extension)' to just 'Dockerfile'. For example, if you wish to use the NodeJS version, rename 'Dockerfile.js' to 'Dockerfile'
3. Open up the 'Dockerfile' you just renamed and check that all environment variables are as you expect (for example, you would like the container to expose on port 5000)
4. Open up the Terminal/CMD, navigate to the directory the repo is in, and type:

```
docker container build -t tor_detector .
```
After it has been built, type:
```
docker container run tor_detector
```

5. Finally, open up a browser and visit the website

**Tip:**
If you do not know the IP address of the container, type:
```
docker container ls
```
And find the container called 'tor_detector', then type:
```
docker inspect <container ID of 'tor_detector'>
```

The IP address will be towards the bottom.

### Manually

If you wish to set up manually, you must configure your environment to work with the files. Since your environment may vary, you should open the Dockerfile of your specified language and see what get's added/changed.

# Live Demo

If you wish to see a live demo, you can click on picture below

[![Live Demo](https://i.imgur.com/GWuxoac.png)](https://redirct.page.link/TorDetectorLive)

Or type/copy and paste this URL below
```
https://redirct.page.link/TorDetectorLive
```

// ==UserScript==
// @name         Better Boomlings
// @namespace    https://github.com/TerrifiedTaco/Better-Boomlings-Userscript
// @version      7.5
// @description  Changes boomlings to make it look better.
// @author       TerrifiedTaco
// @updateURL    https://github.com/TerrifiedTaco/Better-Boomlings-Userscript/raw/refs/heads/main/BetterBoomlings.user.js
// @downloadURL  https://github.com/TerrifiedTaco/Better-Boomlings-Userscript/raw/refs/heads/main/BetterBoomlings.user.js
// @match        https://www.boomlings.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=boomlings.com
// @run-at       document-ready
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    let banner = "<img src='https://www.boomlings.com/database/accounts/gdmanagerLogo2.png' alt='GD Manager Logo' /></br>"
    let styling = "<style>@import url('https://fonts.cdnfonts.com/css/pusab'); li.extra {font-size: 30; list-style-type: none; margin: 10px; padding: 0x; text-align: center; width: auto;} .invisible { opacity: 0.0;} body {font-family: 'Pusab', sans-serif; font-size: 20px; -webkit-text-stroke: 1px black; background-color: #131720; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; } #welcomeSpacing {margin-bottom: 50px; font-size: 60px; color: gold; -webkit-text-stroke: 2px black; background: linear-gradient(to top, yellow, orange); -webkit-background-clip: text; background-clip: text; color: transparent;}   ul li {     margin-bottom: 3px; background: }  #backgroundVideo {   position: fixed;   right: 0;   bottom: 0;   min-width: 100%;   min-height: 100%;   z-index: 0; }  #userbox {   text-align: center;   z-index: 9999;   display: flex;   flex-direction: column;   align-items: center;   justify-content: center;   width: 100%;   height: 100%;   position: absolute;   margin-top: 120px; } img {   z-index: 9999; } </style>"
    let leaderboardBox = "<img src='https://i.ibb.co/fYTYHXHq/leaderboard-box-good.png' width='600' alt='GD Manager Logo' /></br>"
    let userBox = "<div id='userbox'></div>"
    let welcomeSpacing = "<div id='welcomeSpacing'></div>"
    let backgroundVideo = "<video autoplay muted loop id='backgroundVideo'><source src='https://media-hosting.imagekit.io//6821400044434d69/geometry_dash_default_bg_blue.mp4?Expires=1833160245&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vaHfHwlvuyd0nsZvGW5led7PTNPhsrFgvBbP8~YhlGnnAlpfKF1QIC62iLmG7vkDOqHvOO1P7yXukIY0q3qo1AhjcWLx0hedOIgjS3skALDLuWvBPWOPiE~cdlBU~9cypiGoNWi-iHpkJ9uFQ~KagIsb8ULIbn~tX6psBAFa3G96Mdv7miLOUjbbR0--OH6jLMKzxxmXB5LRl2HyrCHxMbObz8wm~0nhD5TmlGvwUkcRbOY0upeLhiX7uwPnFn7zOGiw5QUqiLNoh5ZWJOENeawqoZGZIkmTI~gVBf3NcYqUQ~wA7-6GpTc8tZ0GgraXdST0Hh1~GNz3MmFXCrWByw__' type='video/mp4'></video>"
    let backgroundVideoStyle = "#backgroundVideo {position: fixed; right: 0; bottom: 0; min-width: 100%; min-height: 100%; z-index: 0;}"
    let extraLinksBox = "<div id='extra-links' style='z-index: 99999; margin: 10px; background-color:#151f40; background-size: 10%; width: auto; align-items: center; position: fixed; right: 250px; top: 50%; transform: translateY(-50%); border: 30px solid transparent; border-image: url(https://i.ibb.co/cKy7smKV/box-outline.png) 30 stretch;'></div>"

    document.getRootNode().body.innerHTML += "<style>@import url('https://fonts.cdnfonts.com/css/pusab'); * {background-color:transparent; font-family: 'Pusab', sans-serif; color:white; -webkit-text-stroke: 1px black; font-size: 20px;} body {flex-direction: row; background-color:#131720} form {margin:10px;} input {background-color:#151f30; height:30px; border-radius:10px; display:flex; align-items:center;} li + li { margin-top: 10px;} ul {list-style-type: none; list-style: none; padding: 0px; margin: 0px; } a:link, a:visited {background: linear-gradient(to top, yellow, orange); -webkit-background-clip: text; background-clip: text; color: transparent;} a {padding: 4px 8px; border: 1px outset black; border-radius: 8px; text-decoration: none; font-size: 30px; display: inline-flex; border-style: outset; border-width: 3px; border-color: #b1f249;} div.link {align-items: center; text-align: center; background-color: black; display: inline-block; background-color: #7ade2d; border-radius: 8px; border-color: black; border-width: 2px; border-style: solid; outline: white; outline-width: 2px; outline-style: solid; padding: 0px;} legend, label {background: linear-gradient(to top, yellow, orange); -webkit-background-clip: text; background-clip: text; color: transparent;} legend {font-size:30px}</style>"

    if(document.getElementById("login-form")) {
        let links = document.getRootNode().body.children[2].children[0].children[4].children
        document.getRootNode().body.children[2].children[0].children[4].remove()
        let tempLinks = ""
        for(let link of links) {
            if(links.length == 4) {
                tempLinks += "<li class='invisible'>.</li>"
            }
            tempLinks += "<li><div class='link'>" + link.innerHTML + "</div></li>"
        }
        if(links.length == 4) {
            tempLinks += "<li class='invisible'>.</li>"
        }
        let list = "<ul>" + tempLinks + "</ul>"
        document.getRootNode().body.children[2].children[0].innerHTML += list
    }

    if(document.getElementById("userbox")) {
        let username = document.getRootNode().body.children.userbox.childNodes[0].data
        username = username.split(" ").pop()

        let links = document.getRootNode().body.children.userbox.children[0].children
        let tempLinks = ""
        let tempExtraLinks = ""
        for(let link of links) {
            if(link.innerText == "Change Password" || link.innerText == "Change Username" || link.innerText == "Delete Account" || link.innerText == "Logout") {
                tempLinks += "<li><div class='link'>" + link.innerHTML + "</div></li>"
                tempLinks += "<li class='invisible'>.</li>"
            } else {
                tempExtraLinks += "<li class='extra'><div class='link'>" + link.innerHTML + "</div></li>"
            }
        }
        let list = "<ul>" + tempLinks + "</ul>"
        let extrasList = "<ul>" + tempExtraLinks + "</ul>"

        document.getRootNode().body.children[2].remove()
        document.getRootNode().body.children[2].remove()
        document.getRootNode().body.innerHTML += leaderboardBox + styling + userBox + backgroundVideo
        document.getElementById('userbox').innerHTML = welcomeSpacing + list
        document.getElementById('welcomeSpacing').innerHTML = username
        if(links.length > 4) {
            document.getRootNode().body.innerHTML += extraLinksBox
            document.getElementById('extra-links').innerHTML = extrasList
        }
    }

    try {
        if(document.getRootNode().body.children[2].children[0].children[0].innerText == "Change Username") {
            document.getRootNode().body.children[2].children[0].children[1].style.background = "linear-gradient(to top, Red, FireBrick)"
            document.getRootNode().body.children[2].children[0].children[1].style.WebkitBackgroundClip = "text"
            document.getRootNode().body.children[2].children[0].children[1].style.backgroundClip = "text"
            document.getRootNode().body.children[2].children[0].children[1].style.color = "transparent"

            document.getRootNode().body.children[2].children[0].children[5].style.background = "linear-gradient(to top, Turquoise, SpringGreen)"
            document.getRootNode().body.children[2].children[0].children[5].style.WebkitBackgroundClip = "text"
            document.getRootNode().body.children[2].children[0].children[5].style.backgroundClip = "text"
            document.getRootNode().body.children[2].children[0].children[5].style.color = "transparent"
        }
    } catch {}
})();

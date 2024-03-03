import imgPortfolio from "./images/portfolio.png";
import imgCountryFinder from "./images/country-finder.png";
import imgIPadress from "./images/ip-address-tracker.png";
import imgMarkdown from "./images/markdown-editor.png";
import imgQuizz from "./images/quizz-app.png";
import imgSpring from "./images/spring-rest-api.jpg";
import imgTicTacTao from "./images/tic-tac-tao.png";
import imgAsl from "./images/asl.png";

export const projects = 
[
    {
        id:"6",
        name:"Personal Portfolio",
        description: "Personal Portfolio built using react and tailwind-css, deployed on GitHub pages.",
        skills : ["JavaScript","React","Tailwindcss"],
        link:"",
        github:"https://soheibkend.github.io/portfolio/",
        image: imgPortfolio
    },
    {
        id:"5",
        name:"Spring Boot Rest-api",
        description: "REST CRUD API with authorization and authentication.",
        skills : ["Java","Spring Boot", "Spring Data", "Spring Security", "Postgresql"],
        link:"",
        github:"https://github.com/Soheibkend/spring-boot-spring-security-jwt-authentication-authorization",
        image: imgSpring
    },
    {
        id:"1",
        name:"Country Finder",
        description: "A website that allows you to explore countries around the world with all the necessary information about each country.",
        skills : ["JavaScript","React","Countries-api","Tailwindcss"],
        link:"https://soheibkend.github.io/Country-Finder-App/",
        github:"https://github.com/Soheibkend/Country-Finder-App",
        image: imgCountryFinder
    },
    {
        id:"2",
        name:"IP Address Tracker",
        description: "Website that allows you to geolocate any IP addresse.",
        skills : ["JavaScript","React","React-Leaflet","IP-geolocation-api","Tailwindcss"],
        link:"https://soheibkend.github.io/IP-Address-Tracker/",
        github:"https://github.com/Soheibkend/IP-Address-Tracker",
        image: imgIPadress
    },
    {
        id:"4",
        name:"Markdown Editor",
        description: "Web app for creating, editing and saving markdowns with live preview.",
        skills : ["JavaScript","React","Tailwindcss"],
        link:"https://soheibkend.github.io/Markdown-Editor/",
        github:"https://github.com/Soheibkend/Markdown-Editor",
        image: imgMarkdown
    },
    {
        id:"3",
        name:"American Sign Language Recognition App",
        description: "Application based on machine learning for the recognition of American Sign Language.",
        skills : ["Pytohn","OpenCV","Keras"],
        link:"",
        github:"https://github.com/Soheibkend/american-sign-language-recogniton",
        image: imgAsl
    },
    {
        id:"7",
        name:"Tic-Tac-Toe",
        description: "tic-tac-toe game with beautiful UI.",
        skills : ["JavaScript","React","Tailwindcss"],
        link:"https://soheibkend.github.io/tic-tac-toe/",
        github:"https://github.com/Soheibkend/tic-tac-toe",
        image: imgTicTacTao
    },
    /*{
        id:"8",
        name:"Contact List App",
        description: "tic-tac-toe game with beautiful UI.",
        skills : ["Java","Spring Boot","Thymleaf","Postgresql","Bootstrap"],
        link:"https://soheibkend.github.io/tic-tac-toe/",
        github:"https://github.com/Soheibkend/tic-tac-toe",
        image: ""
    },*/
    /*{
        id:"9",
        name:"Quizz App",
        description: "A quiz app designed to test your knowledge of various country flags.",
        skills : ["Kotlin","Android Studio"],
        link:"",
        github:"https://github.com/Soheibkend/QuizzApp",
        image: imgQuizz
    },*/
    

]
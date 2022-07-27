import MovieSwiperImg from '../../assets/movieswiper.png'
import GreenGuideDemo from '../../assets/thegreenguidedemo.jpg'
import NewsAppDemo from '../../assets/newsapp.png'
import WeatherDemo from '../../assets/weatherapp.png'

export default [

    {
        title: 'Movie Swiper App',
        img: MovieSwiperImg,
        description: 'A sleek Tinder-style movie discovery app that allows users to swipe through movie suggestions and save them for later. Fetches data from "The Movie Database" Api to allow users to see movie details, such as: ratings, trailers, pictures, and similar movies.',
        /* In working on this project I familiarized myself with using Redux Toolkit to handle the application\'s state management. Moving forward I want to integrate this project with Firebase to allow for user interaction to see their friends\' "Want to Watch" list, and send movie reccomendations to each other. */
        /* ' A sleek Tinder-style movie discovery app that allows users to swipe through movie suggestions. Provides users with details about the movie such as ratings, trailer, and even similar titles. Users can save movies they are interested to a list to watch later.' */
        link: 'https://github.com/SilverBits1001/MovieSwiper',
        technologies: ['React Native', 'Redux Toolkit', 'Javascript']

    },

    {
        title: 'Weather App',
        img: WeatherDemo,
        description: 'An iOs inspired weather app that provides current weather data based on the users current location or custom search. The app also makes use of a a back-end Heroku server to handle API requests.',
        /* `Drawing inspiration from Apples\'s weather app, I aimed to create my ow n simple and minimal weather app from scratch. Using the "OpenWeather" API, the app gives users accurate weather data, such as hourly forecast, weekly forecast, air quality and more, based on their location while also allowing users to search for the weather of specific cities. /* The app makes use of a back-end Heroku server to handle API requests, serving the data back to the front end. This project gave me a great opportuninty to reinforce my knowledge on core concepts of objects and data maninulation.`  */
        /* 'A minimal weather app that gives users accurate weather data, such as hourly forecast, weekly forecast, air quality and more, based on their location while also allowing users to search for the weather of specific cities.' */
        link: 'https://github.com/SilverBits1001/Weather-App',
        technologies: ['React Native', 'Node.js', 'Express', 'Heroku', 'Javascript']

    },

    {
        title: 'News App',
        img: NewsAppDemo,
        description: "An iOs inspired news app that gives users current news articles based on what's trending or the users custom search. Utilizes the React Native Reanimated library to create a a responsive user experience."/* for specific articles, allowing them to bookmark them to read later, and send to contacts. Utilizing the React Native Reanimated library to handle animations, I was able to familarize myself with key concepts of animations in React Native while creating a clean and responsive user experience. */,
        link: 'https://github.com/SilverBits1001/NewsApp',
        technologies: ['React Native', 'Redux Toolkit', 'Reanimated', 'Javascript']

    },

    {
        title: 'The Green Guide ',
        img: GreenGuideDemo,
        description: 'A sample blog website built with the Bootstrap framwework with a mobile first design approach to create a responsive web page on all viewports. '
   /*   Bootstrap and jQuery to showcase a responsive website on multiple viewports.  */,
        link: 'https://thegreenguide.netlify.app/',
        technologies: ['HTML5/CSS', 'jQuery', 'Bootstrap']

    },
    
]


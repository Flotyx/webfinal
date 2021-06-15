import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
// import Login from './components/login/login'
// import Home from './components/mainPage/home'
// import SignUp from './components/SignUp/SignUp'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import MainComponent from './components/mainComponent'

import MovieDetail from './components/MovieComponent/MovieDetail'
const MovieData = [
  {
      key:1,
      url:"https://www.themoviedb.org/t/p/original/i72kauIUtPSzAQo7LGm82YNZT6u.jpg",
      movieName:"使女的故事"
  },
  {
      key:2,
      url:"https://www.themoviedb.org/t/p/original/plFfxTit2JIuE72QhRjCu5sICaD.jpg",
      movieName:"The Unholy"
  },
  {
      key:3,
      url:"https://www.themoviedb.org/t/p/original/aUHJKhnD69amVMDr1vzUHcvSCMB.jpg",
      movieName:"查克史奈德之正義聯盟"
  },    
  {
      key:4,
      url:"https://www.themoviedb.org/t/p/original/qAQdKiw7P4UA1CypqMZ2vPmXZN5.jpg",
      movieName:"American Traitor: The Trial of Axis Sally"
  },    
  {
      key:5,
      url:"https://www.themoviedb.org/t/p/original/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg",
      movieName:"The Banishing"
  },
  {
    key:6,
    url:"https://www.themoviedb.org/t/p/original/4CiD9NJQTe9dPTsFb0XfzU6OozY.jpg",
    movieName:"時尚惡女：庫伊拉"
}
]

const Popular = [
  {
    id:1,
    movieName:"Cruella",
    url:"https://www.themoviedb.org/t/p/original/pKAxHs04yxLDQSIf4MNiZoePVWX.jpg"
  },
  {
    id:2,
    movieName:"The Unholy",
    url:"https://www.themoviedb.org/t/p/original/bShgiEQoPnWdw4LBrYT5u18JF34.jpg"
  },
  {
    id:3,
    movieName:"Wrath of Man",
    url:"https://www.themoviedb.org/t/p/original/YxopfHpsCV1oF8CZaL4M3Eodqa.jpg"
  },
  {
    id:4,
    movieName:"Army of the Dead",
    url:"https://www.themoviedb.org/t/p/original/z8CExJekGrEThbpMXAmCFvvgoJR.jpg"
  },
  {
    id:5,
    movieName:"I Am All Girls",
    url:"https://www.themoviedb.org/t/p/original/m6bUeV4mczG3z2YXXr5XDKPsQzv.jpg"
  },
  {
    id:6,
    movieName:"Monster Pets: A Hotel Transylvania Short",
    url:"https://www.themoviedb.org/t/p/original/dkokENeY5Ka30BFgWAqk14mbnGs.jpg"
  },
  {
    id:7,
    movieName:"The Banishing",
    url:"https://www.themoviedb.org/t/p/original/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg"
  }
]

const NowPlaying = [
  {
    id:1,
    movieName:"Those Who Wish Me Dead",
    url:"https://www.themoviedb.org/t/p/original/xCEg6KowNISWvMh8GvPSxtdf9TO.jpg"
  },
  {
    id:2,
    movieName:"A Quiet Place Part II",
    url:"https://www.themoviedb.org/t/p/original/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg"
  },
  {
    id:3,
    movieName:"Spiral: From the Book of Saw",
    url:"https://www.themoviedb.org/t/p/original/lcyKve7nXRFgRyms9M1bndNkKOx.jpg"
  },
  {
    id:4,
    movieName:"The Conjuring: The Devil Made Me Do It ",
    url:"https://www.themoviedb.org/t/p/original/isghxwTkgHsSfoEmXK1QZEYTjUl.jpg"
  },
  {
    id:5,
    movieName:"Skylines",
    url:"https://www.themoviedb.org/t/p/original/2W4ZvACURDyhiNnSIaFPHfNbny3.jpg"
  },
  {
    id:6,
    movieName:"Riders of Justice",
    url:"https://www.themoviedb.org/t/p/original/3eE0HuQXH2q5wQilbm3c59gJOST.jpg"
  }
]

const Upcoming = [
  {
    id:1,
    movieName:"F9",
    url:"https://www.themoviedb.org/t/p/original/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg"
  },
  {
    id:2,
    movieName:"The House Next Door: Meet the Blacks 2",
    url:"https://www.themoviedb.org/t/p/original/wuEefVnCa6gRLOQYBPfw8lEBT54.jpg"
  },
  {
    id:3,
    movieName:"Hitman's Wife's Bodyguard",
    url:"https://www.themoviedb.org/t/p/original/oht9CZHNDBEu5KitgxUsb0LhQ8v.jpg"
  },
  {
    id:4,
    movieName:"Lady Boss: The Jackie Collins Story",
    url:"https://www.themoviedb.org/t/p/original/yYJG3a68Z9NNxhh9QhWFKxNLtEQ.jpg"
  },
  {
    id:5,
    movieName:"Sound of Metal ",
    url:"https://www.themoviedb.org/t/p/original/y89kFMNYXNKMdlZjR2yg7nQtcQH.jpg"
  },
  {
    id:6,
    movieName:"Peter Rabbit 2: The Runaway",
    url:"https://www.themoviedb.org/t/p/original/cycDz68DtTjJrDJ1fV8EBq2Xdpb.jpg"
  }
]

const Top_Rated = [
  {
    id:1,
    movieName:"BLACKPINK: Light Up the Sky",
    url:"https://www.themoviedb.org/t/p/original/wwrvjmcgkDyB2RbCbIVLXZf82pl.jpg"
  },
  {
    id:2,
    movieName:"Gabriel's Inferno Part III",
    url:"https://www.themoviedb.org/t/p/original/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg"
  },
  {
    id:3,
    movieName:"Schindler's List",
    url:"https://www.themoviedb.org/t/p/original/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg"
  },
  {
    id:4,
    movieName:"Life in a Year",
    url:"https://www.themoviedb.org/t/p/original/7EuZIYEHLTu1G69maFLwg13u5iB.jpg"
  },
  {
    id:5,
    movieName:"The Dark Knight",
    url:"https://www.themoviedb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
]

const dummyCategoryJSON = [
  {
    categoty:"Popular",
    movieList:Popular
  },
  {
    categoty:"Now Playing",
    movieList:NowPlaying
  },
  {
    categoty:"Upcoming",
    movieList:Upcoming
  },
  {
    categoty:"Top Rated",
    movieList:Top_Rated
  }

]

const SilderData = [
  {
      key:1,
      url:"https://www.themoviedb.org/t/p/original/ovwN1JDPvllWZaH3xtKp7txRWDj.jpg",
      movieName:"The Scientist",
  },
  {
      key:2,
      url:"https://www.themoviedb.org/t/p/original/54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
      movieName:"Ava",
  },
  {
      key:3,
      url:"https://www.themoviedb.org/t/p/original/slQmxfWpRjf9o4AsJsOMEON3I1D.jpg",
      movieName:"Censor",
  },    
  {
      key:4,
      url:"https://www.themoviedb.org/t/p/original/eShw0LB5CkoEfYtpUcXPD85oz5Q.jpg",
      movieName:"Freaky"
  },    
  {
      key:5,
      url:"https://www.themoviedb.org/t/p/original/vviYFL6bT0p2AkXI1WIKC2y0rRl.jpg",
      movieName:"In the Earth"
  },
  {
    key:6,
    url:"https://www.themoviedb.org/t/p/original/pKULlYXToGBZ8PjNsnLtEchUSFX.jpg",
    movieName:"Princess Mononoke"
  }
]

ReactDOM.render(
  <React.StrictMode>
       <MainComponent movieData = {dummyCategoryJSON} silderData = {SilderData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

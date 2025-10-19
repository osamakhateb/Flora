import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';
import logoImg from "./assets/img/hero/logo.png";
import burgerImg from "./assets/img/hero/burger.svg";

import logo from './assets/img/Footer/logo.svg';
import facebookIcon from './assets/img/Footer/Frame.svg';
import twitterIcon from './assets/img/Footer/Frame1.svg';
import linkedinIcon from './assets/img/Footer/Frame2.svg';

function App() {
  return (
    <div className="App">
      <Header
        logo={logoImg}
        burger={burgerImg}
        heroTitle="Discover a place you will love to live"
        heroDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque."
      />
      <Main />
      <Footer
        logo={logo}
        logoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque."
        services={["Payment & Tax", "Features", "View Booking", "Support"]}
        about={["About us", "News", "Pricing", "New Property"]}
        location="2972 Westheimer Rd. Santa Ana, Illinois 85486"
        copyright="Copyright 2024 flora. All Rights Reserved"
        rightText="Terms & Conditions  Privacy Policy"
        socialIcons={[facebookIcon, twitterIcon, linkedinIcon]}
      />

    </div>
  );
}

export default App;
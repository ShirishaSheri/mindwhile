
import './App.css';
import React, { useEffect, useState } from "react";
import HomeSection from './components/HomeSection';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Sevices';


import Webdev from './components/Webdev';
//import Androiddev from './components/Paymentint';
import About from './components/About';
import Contact from './components/Contact'; 
import Careers from './components/Careers';  
import Paymentint from './components/Paymentint'; 
import Hireux from './components/Hireux';
import Hireandroiddev from './components/Hireandroiddev';
import Iosdev from './components/Iosdev'
import Marketing from './components/Marketing';  
import Domainhosting from './components/Domainhosting';  
import Hirephp from './components/Hirephp';
import Hireios from './components/Hireios';

import HotelManagement from './components/Hotelmanagement';
import SchoolERP from './components/SchoolERP';
import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import AndroidDev from './components/Androiddev';



function App() {
  const [services, setName] = useState("");
  const [service, setservice] = useState("");
  const [homehide, sethomehide] = useState("");
	// Callback function to handle the data received from the child
  
	const servicesmenushow = (childData) => {
	//	console.log(childData);
   // setName(childData);
   setName(childData.mousein);
   console.log('hi i am in ' + childData.mousein);
  // console.log('hi i am in ' + childData.comp);
    if(childData.hasOwnProperty("comp"))
    {
        setservice(childData.comp);
        sethomehide(true);
    }
	};
  const servicesmenuhide = (childData) => {

    setName(childData.mouseout);
    if(childData.hasOwnProperty("comp"))
    {
        setservice(childData.comp);
    }
	};
 


  return (
      // <div>
      //     <Header parentCallback={servicesmenushow}/>
      //      {service == "about" &&
      //         <About/>
      //      }
      //       {service == "contact" &&
      //         <Contact topvalue={240}/>
      //     }
      //      {
      //       homehide == false &&
      //         <HomeSection/>
      //      }
          
      //     {services == true &&
      //         <Services parentCallback={servicesmenuhide}/>
      //      }       
      //    </div> 
       <>
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<HomeSection />}
                    />
                    <Route
                        path="/about"
                        element={<About />}
                    />
                      <Route
                        path="/careers"
                        element={<Careers/>}
                    />
                    <Route
                        path="/contact"
                        element={<Contact />}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                     <Route
                        path="/webdev"
                        element={<Webdev />}
                    />
                    <Route
                        path="/androiddev"
                        element={<AndroidDev />}
                    />
                    <Route
                        path="/paymentint"
                        element={<Paymentint />}
                    />
                     <Route
                        path="/hireux"
                        element={<Hireux />}
                    />
                    <Route
                        path="/hireandroiddev"
                        element={<Hireandroiddev />}
                    />
                     <Route
                        path="/iosdev"
                        element={<Iosdev />}
                    />
                     <Route
                        path="/marketing"
                        element={<Marketing />}
                    />
                    
                    <Route
                        path="/domainhosting"
                        element={<Domainhosting />}
                    />
                     <Route
                        path="/hirephp"
                        element={<Hirephp />}
                    />
                     <Route
                        path="/hireios"
                        element={<Hireios />}
                    />
                      <Route
                        path="/hotel"
                        element={<HotelManagement />}
                    />
                      <Route
                        path="/school"
                        element={<SchoolERP />}
                    />
                </Routes>
            </Router>
        </>   

  )
}

export default App;

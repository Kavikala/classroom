import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
return (    
    <div className="header">
        <div >
            <img className="img" src="https://dynamic.design.com/asset/logo/c3773495-6bec-49bc-9c3b-c83759b202c9/logo-search-grid-2x?logoTemplateVersion=1&v=638922828367300000&layout=auto-1-1"/>

        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Cart</li>
                <li>Locate Us</li>
                
                
            </ul>

        </div>
    </div>
    );
};

const RestCard=({resData})=>{
   
   const{name,cuisines, avgRating, deliveryTime}=resData.data
    return(
       
        <div className="banner">
            <img  className="rest-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/21/68fcf732-f415-4822-811a-114ba6f6d731_52548.JPG"/>

        
        <h4> {name} </h4>
        <h5>{cuisines}</h5>
        <h5>{avgRating}star</h5>
        <h5>{deliveryTime} minutes</h5>
        </div>
        
    );
};


const resList = [
  {
    data: {
      id: "334",
      name: "KFC",
      cloudinaryImageId: "bdcd310972041b3a5a73e6559560f4e4",
      cuisines: ["Burgers", "Biryani", "American"],
      costForTwo: 40000,
      avgRating: "3.8",
      deliveryTime: 36,
    },
  },
  {
    data: {
      id: "229",
      name: "Meghana Foods",
      cloudinaryImageId: "un4ck7rcptpk77siu8of",
      cuisines: ["Biryani", "Andhra", "South Indian"],
      costForTwo: 50000,
      avgRating: "4.4",
      deliveryTime: 24,
    },
  },
  {
    data: {
      id: "121",
      name: "Kannur Food Point",
      cloudinaryImageId: "bmlehmo66z9jt66u2yt4",
      cuisines: ["Kerala", "Chinese"],
      costForTwo: 30000,
      avgRating: "3.9",
      deliveryTime: 48,
    },
  },
  {
    data: {
      id: "108",
      name: "Domino's Pizza",
      cloudinaryImageId: "v5rvsu7mpxn8v6m5n0jy",
      cuisines: ["Pizzas", "Italian", "Pastas"],
      costForTwo: 40000,
      avgRating: "4.3",
      deliveryTime: 30,
    },
  },
];










const BodyPart=()=> {
    return (
        <div className="container">
            <div className="search-container">
                <input placeholder="type here..."/>
                <button className="search">Search</button>

            </div>
            <div className="banners">
             {resList.map((restaurent)=><RestCard key={restaurent.data.id} resData={restaurent}/>)}
             
             

            </div>
        </div>
    );
 };






const Layout=()=>{
    return(
        <div>
            <Header/>
            <BodyPart/>
        </div>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Layout/>);


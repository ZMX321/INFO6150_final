import TravelCard from "./TravelCard";
import { useState } from "react";
import './Travel.css';
import AddTravelCard from "./AddTravelCard";


const initial_travels = [
    {id:1,
    imgPath:'./img/travel/Yose.JPG',
    location:'Yosemite',
    description:'This is the most beautiful national park'
    },
    {id:2,
    imgPath:'./img/travel/ABQ.JPG',
    location:'Albuquerque',
    description:'Hot air bullon festival'
    },
    {id:3,
    imgPath:'./img/travel/SC.JPG',
    location:'Santa Cruz',
    description:'Sunset at beach'
    },
    {id:4,
    imgPath:'./img/travel/Disney.JPG',
    location:'Los Angles',
    description:'California Adventure Park'
    },
]


function Travel() {

    const [travel_lists, setTravel_lists] = useState(initial_travels);
    const [call,setCall] = useState(false);

    function addTravelHandler(newTravel){
        setTravel_lists(
            [...travel_lists,
            newTravel]
        );
    }

    function deleteCardHandler(id){
        console.log(id);
        setTravel_lists(travel_lists.filter((list) => {
            return list.id !== id;
        }));
    }

    function changeCall(){
        setCall(!call);
    }


    return <div className="travel_page" id="main">
        {call && <div className="mask" onClick={changeCall}></div>}
        {call && <AddTravelCard onAddTravel={addTravelHandler} onBack={changeCall}/>}
        <div className="card_holder">
            {
                travel_lists.length === 0 ? 
                (<div className="no_element">
                    Take Down your first memo！
                </div>) :
                (travel_lists.map(item => {
                    return (
                        <TravelCard key={item.id} item={item} onDeleteCard={deleteCardHandler}/>
                    );
                })
                )
            }
        </div>
        <hr className="travel_line"/>
        <div className="call_add">
            <button onClick={changeCall}>Add New</button>
        </div>
        
    </div>
}

export default Travel;
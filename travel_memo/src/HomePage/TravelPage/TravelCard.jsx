import './TravelCard.css';

function TravelCard(props) {

    function deletCardHandler(){
        props.onDeleteCard(props.item.id);
    }

    return <div className="travel_card">
        <div className="travel_img">
            <img src={`${props.item.imgPath}`} alt="" />
        </div>
        <div className="travel_loc">{props.item.location}</div>
        <div className="travel_desc">{props.item.description}</div>
        <div className="travel_button">
            <button onClick={deletCardHandler}>Delete</button>
        </div>
    </div>
}

export default TravelCard;
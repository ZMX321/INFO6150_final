import { useState } from "react";
import './AddTravelCard.css';


function AddTravelCard(props) {
    const [submitImg,setSubmitImg] = useState('');
    const [submitLoca,setSubmitLoca] = useState('');
    const [submitDesc,setSubmitDesc] = useState('');


    function getLoca(e){
        setSubmitLoca(e.target.value);
    }

    function getDesc(e){
        setSubmitDesc(e.target.value);
    }

    function getImg(e){
        setSubmitImg(e.target.value);
    }

    function submitHandler(e){
        e.preventDefault();
        
        const travel = {
            id:Math.random(),
            imgPath:submitImg,
            location:submitLoca,
            description:submitDesc
        }
        
        setSubmitImg('');
        setSubmitLoca('');
        setSubmitDesc('');

        props.onBack();
        props.onAddTravel(travel);
    }
    
    return <div className="travel_form_container">
    <div className="travel_form_pic">
        <img src="./img/travel/travel.jpg" alt="" />
    </div>
    <form className="travel_form_content" onSubmit={submitHandler}>

        <label htmlFor="imgPath">ImgPath <span className="required">required</span></label>
        <input type="text" name="imgPath" onChange={getImg} value={submitImg} required/ >

        <label htmlFor="loca">Location <span className="required">required</span></label>
        <input type="text" name="loca" onChange={getLoca} value={submitLoca} required/ >

        <label htmlFor="desc">Description <span className="required">required</span></label>
        <textarea onChange={getDesc} value={submitDesc} required/>

        <button type="submit">Finish</button>
    </form>
</div>
}

export default AddTravelCard;
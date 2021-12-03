import './PostCard.css'

function PostCard(props) {
    

    return <div className="post_card">
        <div className="post_img">
            <img src={`${props.item.imgPath}`} alt="" />
        </div>
        <div className="post_loc">{props.item.location}</div>
        <div className="post_desc">{props.item.description}</div>
        <hr className="post_card_line"/>
        <div className="post_button">
            <button className="like">
                <img src="./img/like.png" alt="" />
                <span className="likes_num">{props.item.likes}</span>
            </button>
            <button className="collection">
                <img src="./img/collection.png" alt="" />
                <span className="collection_num">{props.item.collect}</span>
            </button>
        </div>
    </div>
}


export default PostCard;
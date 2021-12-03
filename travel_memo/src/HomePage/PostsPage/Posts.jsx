
import PostCard from "./PostCard";
import './Posts.css'

const posts_lists = [
    {id:1,
    imgPath:'./img/travel/travel1.JPG',
    location:'Zurich',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, veritatis illum vero eius, sed perferendis dolorem labore voluptatem veniam asperiores consectetur dolores nihil deserunt debitis molestiae. Accusamus, ex illum odio.',
    likes:342,
    collect:89
    },
    {id:2,
    imgPath:'./img/travel/travel2.JPG',
    location:'Bath',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, veritatis illum vero eius',
    likes:14,
    collect:3
    },
    {id:3,
    imgPath:'./img/travel/travel3.JPG',
    location:'Niagara',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi quas possimus.',
    likes:125,
    collect:56
    },
    {id:4,
    imgPath:'./img/travel/travel4.JPG',
    location:'Albuquerque',
    description:'Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Beatae vel commodi aliquid esse blanditiis reiciendis, unde officia suscipit nisi quo mollitia, sequi odio accusamus est iusto soluta eveniet eius quidem nesciunt voluptatum rerum atque corporis accusantium? Asperiores eveniet ipsa, laborum.',
    likes:70,
    collect:2
    },
    {id:5,
    imgPath:'./img/travel/travel5.JPG',
    location:'Budapest',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga id sint, placeat neque sed non blanditiis, eius at!',
    likes:65,
    collect:32
    },
]


function Posts() {


    return <div className="posts_page" id="main">
        <div className="posts_holder">
            {
                posts_lists.map(item => {
                    return (
                        <PostCard key={item.id} item={item}/>
                    );
                })
            }
        </div>
    </div>
}

export default Posts;
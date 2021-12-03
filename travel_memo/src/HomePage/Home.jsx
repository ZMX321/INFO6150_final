import './Home.css';
import { useState } from 'react';
import Expense from './ExpensePage/Expense';
import Travel from './TravelPage/Travel';
import Posts from './PostsPage/Posts';
import About from './AboutPage/About';
import Privacy from './PrivacyPage/Privacy';

const menuList = ['Expense', 'Travel', 'Posts', 'About', 'Privacy']


function Home() {
    const [selectedTitle, setSelectedTitle] = useState();

    function changeState(title){
        setSelectedTitle(title);
    }
    return <div className="home_page">
        <header>
            <a className="skip_link" href='#main'>Skip to content</a>
            <div className="title_img">
                <img src="./img/title.png" alt="your journey memo showed by wordart" /> 
            </div>
            <nav className="menubar">
                <ul className="menu_list">
                    {
                        menuList.map(title => {
                            return (
                                <li
                                    key={`${title}`}
                                    className={`menu_title ${selectedTitle === title ? 'menu--open' : ''}`}>
                                    <button
                                        className={`${title}`}
                                        onClick={() => changeState(title)}
                                    >
                                        {title}
                                    </button>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        </header>
        {!selectedTitle && <div className="welcome_page">
            Explore your Journey Here
        </div>}
        {selectedTitle === 'Expense' && <Expense/>}
        {selectedTitle === 'Travel' && <Travel/>}
        {selectedTitle === 'Posts' && <Posts/>}
        {selectedTitle === 'About' && <About/>}
        {selectedTitle === 'Privacy' && <Privacy/>}
        <footer>
            <p>Hope you can enjoy this application</p>
            <p>© 2021 Zhiming Xue</p>
        </footer>

    </div>

}

export default Home;



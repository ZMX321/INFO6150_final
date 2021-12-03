import './About.css';
import { useState } from 'react';
import IntroTab from './IntroTab';
import PrefaceTab from './PrefaceTab';
import ExpenseTab from './ExpenseTab';
import TravelTab from './TravelTab';
import PostsTab from './PostsTab';


const initila_titles = ['Intro', 'Preface', 'Expense', 'Travel', 'Posts'];

function About() {
    let initialTitle = initila_titles[0];
    const [titles] = useState(initila_titles);
    const [selectedTitle, setSelectedTitle] = useState(initialTitle);

    function changeState(title) {
        setSelectedTitle(title);
    }

    return <div className="about_page" id="main">
        <div className="titles">
            {
                titles.map(title => {
                    return (
                        <div
                            key={`${title}`}
                            className={`tabs_title ${selectedTitle === title ? 'tabs--open' : ''}`}>
                            <button
                                className={`${title}`}
                                onClick={() => changeState(title)}
                            >{title}
                            </button>
                        </div>
                    );
                })
            }
        </div>
        {selectedTitle === 'Intro' && <IntroTab />}
        {selectedTitle === 'Preface' && <PrefaceTab />}
        {selectedTitle === 'Expense' && <ExpenseTab />}
        {selectedTitle === 'Travel' && <TravelTab />}
        {selectedTitle === 'Posts' && <PostsTab />}
    </div>
}

export default About;
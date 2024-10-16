import React from 'react'
import useLoadingNavigation from '../components/navigationFunc';

export default function Certificates() {
    const { LoadingBarComponent } = useLoadingNavigation();

    return (
        <div className='certificates'>
            <LoadingBarComponent color={"#EEEEEE"} />
            <h2>Certificates</h2>
            <div className="row">
                <div className="col">
                    <h3>Workshop 15 days</h3>
                    <p><span>Internship at Qspider Campus :- </span>Gained practical experience in Java programming, including concepts like encapsulation and
                        polymorphism oops inheritance etc.</p>
                </div>
                <div className="col">
                    <h3>Workshop 15 days</h3>

                    <p><span>Synergy Institute of Management Technology & arts :-
                       </span> Data Science Workshop Completed intensive training in Data Science, enhancing proficiency in Machine Learning, Statistics, Python
                        programming, Mathematics, and Database management.</p>
                </div>
                <div className="col">
                    <h3>Workshop 30 days</h3>

                    <p><span>Synergy Institute of Management Technology & arts :- </span>Attended a workshop on Data Science with AI, gaining hands-on experience in machine learning, 
                    data preprocessing, and model development. Acquired skills to analyze complex data sets and drive data- driven decision-making.</p>
                </div>
            </div>
        </div>
    )
}

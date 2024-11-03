import React from 'react'
import useLoadingNavigation from '../components/navigationFunc';
export default function Summary() {

    const { LoadingBarComponent } = useLoadingNavigation();
    return (
        <div className="summary">
            <LoadingBarComponent color={"#EEEEEE"} />
            <h2>Summary</h2>
            <p>Aspiring full stack developer with a solid foundation in HTML, CSS, JavaScript, React.js, and Node.js. Eager to leverage skills in both front-end and back-end development to create robust, user-friendly applications. Committed to continuous learning and adapting to new technologies, seeking an opportunity to contribute to innovative projects and grow within a collaborative team environment.</p>
        </div>
    )
}

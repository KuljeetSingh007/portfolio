import "./App.css";
import useLoadingNavigation from './components/navigationFunc';
import { Link } from "react-router-dom";
function App() {
  const { handleNavigation, LoadingBarComponent } = useLoadingNavigation();
  return (
    <>
      <LoadingBarComponent color={'#94212f'} />
      <div className="body">
        <div className="imageBox">
          <Link  onClick={() => handleNavigation('/main')} >Let's Begin</Link>
        </div>
      </div>
    </>
  );
}
export default App;
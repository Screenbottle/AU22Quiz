import { Link } from "react-router-dom";


const Result = (props) => {


    return(
        <section>
            <h2>Resultat</h2>
            <p>Du fick {props.score} rätta svar</p>
            <Link to='/'>
                <button onClick={() => props.restart()}>Börja om</button>
            </Link>
            
        </section>
    );
}

export default Result;
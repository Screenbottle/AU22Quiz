import { Link } from "react-router-dom";


const Welcome = (props) => {

    return(
        <section>
            <h2>Välkommen till detta Quiz</h2>
            <p>Vill du sätta igång?</p>
            <Link to='/game'>
                <button >Ja!</button>
            </Link>
            
        </section>
    );
}

export default Welcome;
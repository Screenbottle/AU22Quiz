

const Result = (props) => {


    return(
        <section>
            <h2>Resultat</h2>
            <p>Du fick {props.score} rätta svar</p>
            <button onClick={() => props.restart()}>Börja om</button>
        </section>
    );
}

export default Result;
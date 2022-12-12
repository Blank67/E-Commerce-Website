const Jumbotron = (props) => {
    return (
        <div className="jumbotron jumbotron-fluid bg-secondary text-white p-4 my-1">
            <h1 className="display-1 text-center">{props.heading}</h1>
        </div>
    );
}

export default Jumbotron;
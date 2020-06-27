import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    const handleSubmit = (e) => {
        console.log(e.target.value);
    };

    return (
        <form
            action="https://playground.tesonet.lt/v1/tokens"
            method="post"
            className="testio-form"
            onSubmit={handleSubmit}
            autoComplete="off"
        >
            <input
                type="text"
                placeholder="Username"
                maxLength={32}
                autoComplete="off"
            />
            <input
                type="password"
                placeholder="Password"
                maxLength={32}
                autoComplete="off"
            />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById(`root`));

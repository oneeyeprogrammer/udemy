import ClassComponent from "./ClassComponents";
import FunctionComponent from "./FunctionComponents";
import React from "react";
import Header from "./Header";
import List from "./List";
import Button from "./Button";

class App extends React.Component {
    state = {
        judul: "",
        author: "Usep Syaikal Arifin",
    };

    changeValue = (e) => {
        this.setState({
            judul: e.target.value,
        });
    };

    click = () => {
        this.setState({
            author: this.state.judul,
        });
        this.setState({
            judul: "",
        });
    };

    render() {
        return (
            <div>
                <Header />
                <input
                    type="text"
                    value={this.state.judul}
                    onChange={this.changeValue}
                />
                <h3>{this.state.author}</h3>
                <Button click={this.click} />
            </div>
        );
    }
}

export default App;

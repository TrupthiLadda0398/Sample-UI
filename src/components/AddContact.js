import React from "react";

class AddContact extends React.Component {
    state = {
        showPopup: false
    };

    handleClick = () => {
        console.log('Button clicked, showing popup');
        this.setState({ showPopup: true }, () => {
            console.log('Popup state after setting to true:', this.state.showPopup);
            setTimeout(() => {
                console.log('Timeout reached, hiding popup');
                this.setState({ showPopup: false }, () => {
                    console.log('Popup state after setting to false:', this.state.showPopup);
                });
            }, 5000); // Wait for 5 seconds before hiding the popup
        });
    };


    render() {
        console.log("Rendering AddContact, showPopup state:", this.state.showPopup);
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"></input>
                    </div>
                    <div className="field">
                        <label>Email Id</label>
                        <input type="text" name="email" placeholder="Email"></input>
                    </div>
                </form>
                <form className="ui form">
                    <div className="field">
                        <label>Phone No</label>
                        <input type="text" name="name" placeholder="Phone No"></input>
                    </div>
                    <div className="field">
                        <label>Address</label>
                        <input type="text" name="email" placeholder="Address"></input>
                    </div>
                   
                    <button className="ui button blue" onClick={this.handleClick}>Click</button>
                    {this.state.showPopup && (
                    <div style={{ backgroundColor: 'lightgreen', padding: '10px', marginTop: '10px' }}>
                        Success! Your information has been submitted.
                    </div>
                )}
                </form>
            </div>
        );
    }    
}

export default AddContact;

import React from "react";

class AuctionsPage extends React.Component {
  state = {
    auction: {
      description: "",
      startBid: 0,
      currentBid: 0,
      seller: "",
    },
  };

  handleChange = (e) => {
    const auction = { ...this.state.auction, description: e.target.value };
    this.setState({ auction });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(this.state.auction.description);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Ongoing auctions</h2>
        <h3>Add auction</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.auction.description}
        ></input>
        <input type="submit" value="Save" />
      </form>
    );
  }
}
export default AuctionsPage;

import React from "react";
import { connect } from "react-redux";
import * as auctionActions from "../../redux/actions/auctionActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

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
    this.props.actions.createAuction(this.state.auction);
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
        {this.props.auctions.map((a) => (
          <div key={a.description}>{a.description}</div>
        ))}
      </form>
    );
  }
}

AuctionsPage.propTypes = {
  auctions: PropTypes.array.isRequired,
  actions: PropTypes.func.isRequired,
};

function mapStateToProps({ auctions }) {
  return {
    auctions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(auctionActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuctionsPage);

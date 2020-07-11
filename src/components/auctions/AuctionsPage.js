import React from "react";
import { connect } from "react-redux";
import * as auctionActions from "../../redux/actions/auctionActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class AuctionsPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadAuctions().catch((error) => {
      alert("Loading auctions failed" + error);
    });
  }

  render() {
    return (
      <>
        <h2>Ongoing auctions</h2>
        {this.props.auctions.map((a) => (
          <div key={a.title}>{a.title}</div>
        ))}
      </>
    );
  }
}

AuctionsPage.propTypes = {
  auctions: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
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

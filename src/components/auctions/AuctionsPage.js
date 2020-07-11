import React from "react";
import { connect } from "react-redux";
import * as auctionActions from "../../redux/actions/auctionActions";
import * as userActions from "../../redux/actions/userActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import AuctionList from "./AuctionList";

class AuctionsPage extends React.Component {
  componentDidMount() {
    const { auctions, users, actions } = this.props;
    if (auctions.length === 0) {
      actions.loadAuctions().catch((error) => {
        alert("Loading auctions failed" + error);
      });
    }

    if (users.length === 0) {
      actions.loadUsers().catch((error) => {
        alert("Loading users failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Ongoing auctions</h2>
        <AuctionList auctions={this.props.auctions}></AuctionList>
      </>
    );
  }
}

AuctionsPage.propTypes = {
  auctions: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    auctions:
      state.users.length === 0
        ? []
        : state.auctions.map((auction) => {
            return {
              ...auction,
              userName: state.users.find((u) => u.id === auction.seller).name,
            };
          }),
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadAuctions: bindActionCreators(auctionActions.loadAuctions, dispatch),
      loadUsers: bindActionCreators(userActions.loadUsers, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuctionsPage);

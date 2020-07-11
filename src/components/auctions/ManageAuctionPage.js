import React from "react";
import { connect } from "react-redux";
import * as auctionActions from "../../redux/actions/auctionActions";
import * as userActions from "../../redux/actions/userActions";
import PropTypes from "prop-types";

class ManageAuctionPage extends React.Component {
  componentDidMount() {
    const { loadUsers, loadAuctions, users, auctions } = this.props;
    if (auctions.length === 0) {
      loadAuctions().catch((error) => {
        alert("Loading auctions failed" + error);
      });
    }

    if (users.length === 0) {
      loadUsers().catch((error) => {
        alert("Loading users failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Manage auctions</h2>
      </>
    );
  }
}

ManageAuctionPage.propTypes = {
  auctions: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  loadAuctions: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    auctions: state.auctions,
    users: state.users,
  };
}

const mapDispatchToProps = {
  loadAuctions: auctionActions.loadAuctions,
  loadUsers: userActions.loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuctionPage);

import React from "react";
import { connect } from "react-redux";
import * as auctionActions from "../../redux/actions/auctionActions";
import * as userActions from "../../redux/actions/userActions";
import * as categoryActions from "../../redux/actions/categoryActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import AuctionList from "./AuctionList";

class AuctionsPage extends React.Component {
  componentDidMount() {
    const { auctions, users, actions, categories } = this.props;
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

    if (categories.length === 0) {
      actions.loadCategories().catch((error) => {
        alert("Loading categories failed" + error);
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
  categories: PropTypes.array.isRequired,
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
              category: state.categories.find((c) => c.id === auction.category)
                .name,
            };
          }),
    users: state.users,
    categories: state.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadAuctions: bindActionCreators(auctionActions.loadAuctions, dispatch),
      loadUsers: bindActionCreators(userActions.loadUsers, dispatch),
      loadCategories: bindActionCreators(
        categoryActions.loadCategories,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuctionsPage);

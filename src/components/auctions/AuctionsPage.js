import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadAuctions } from "../../redux/actions/auctionActions";
import { loadUsers } from "../../redux/actions/userActions";
import { loadCategories } from "../../redux/actions/categoryActions";
import PropTypes from "prop-types";
import AuctionList from "./AuctionList";
import Spinner from "../common/Spinner";

function AuctionsPage({
  loadAuctions,
  loadCategories,
  loadUsers,
  auctions,
  users,
  categories,
  history,
  loading,
}) {
  useEffect(() => {
    if (users.length === 0) {
      loadUsers().catch((error) => {
        alert("Loading users failed" + error);
      });
    }

    if (categories.length === 0) {
      loadCategories().catch((error) => {
        alert("Loading categories failed" + error);
      });
    }

    if (auctions.length === 0) {
      loadAuctions().catch((error) => {
        alert("Loading auctions failed" + error);
      });
    }
  }, []);

  return (
    <>
      <h2>Ongoing auctions</h2>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <button
            style={{ marginBottom: 20 }}
            className="btn btn-primary add-course"
            onClick={() => history.push("/auction")}
          >
            Add auction
          </button>
          <AuctionList auctions={auctions} />
        </>
      )}
    </>
  );
}

AuctionsPage.propTypes = {
  auctions: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  loadAuctions: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
  loadCategories: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    auctions:
      state.users.length === 0 || state.categories.length === 0
        ? []
        : state.auctions.map((auction) => {
            return {
              ...auction,
              userName: state.users.find((u) => u.id === auction.user).name,
              category: state.categories.find((c) => c.id === auction.category)
                .name,
            };
          }),
    users: state.users,
    categories: state.categories,
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  loadAuctions,
  loadUsers,
  loadCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuctionsPage);

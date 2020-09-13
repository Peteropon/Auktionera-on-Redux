import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MyAuctionList from "./MyAuctionList";
import Spinner from "../common/Spinner";
import { loadMyAuctions } from "../../redux/actions/auctionActions";
import { Link } from "react-router-dom";

function MyAuctionsPage({ loadMyAuctions, loading, myAuctions }) {
  useEffect(() => {
    if (myAuctions.length === 0) {
      try {
        loadMyAuctions();
      } catch (e) {
        console.info(e);
      }
    }
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h2>My auctions</h2>
          <Link to="new" className="btn btn-primary btn-lg">
            Create auction
          </Link>
          <MyAuctionList auctions={myAuctions} />
        </div>
      )}
    </>
  );
}

MyAuctionsPage.propTypes = {
  loading: PropTypes.bool,
  loadMyAuctions: PropTypes.func.isRequired,
  myAuctions: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    myAuctions: state.myAuctions,
    loading: state.apiCallsInProgress > 0,
  };
}
const mapDispatchToProps = { loadMyAuctions };

export default connect(mapStateToProps, mapDispatchToProps)(MyAuctionsPage);

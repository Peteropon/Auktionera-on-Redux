import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as auctionActions from "../../redux/actions/auctionActions";
import * as userActions from "../../redux/actions/userActions";
import PropTypes from "prop-types";
import AuctionForm from "./AuctionForm";
import { newAuction } from "../../../tools/mockData";

function ManageAuctionPage({
  loadUsers,
  loadAuctions,
  users,
  auctions,
  ...props
}) {
  const [auction, setAuction] = useState({ ...props.auction });
  const [errors, setErrors] = useState({});

  useEffect(() => {
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
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setAuction((prevAuction) => ({
      ...prevAuction,
      [name]: name === "userId" ? parseInt(value, 10) : value,
    }));
  }

  return (
    <AuctionForm
      errors={errors}
      auction={auction}
      users={users}
      onChange={handleChange}
    ></AuctionForm>
  );
}

ManageAuctionPage.propTypes = {
  auction: PropTypes.object.isRequired,
  auctions: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  loadAuctions: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    auction: newAuction,
    auctions: state.auctions,
    users: state.users,
  };
}

const mapDispatchToProps = {
  loadAuctions: auctionActions.loadAuctions,
  loadUsers: userActions.loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuctionPage);

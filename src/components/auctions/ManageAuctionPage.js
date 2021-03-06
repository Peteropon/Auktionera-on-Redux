import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadAuctions, saveAuction } from "../../redux/actions/auctionActions";
import { loadUsers } from "../../redux/actions/userActions";
import { loadCategories } from "../../redux/actions/categoryActions";
import PropTypes from "prop-types";
import AuctionForm from "./AuctionForm";
import { newAuction } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function ManageAuctionPage({
  users,
  auctions,
  categories,
  loadUsers,
  loadAuctions,
  loadCategories,
  saveAuction,
  history,
  ...props
}) {
  const [auction, setAuction] = useState({ ...props.auction });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (auctions.length === 0) {
      loadAuctions().catch((error) => {
        alert("Loading auctions failed" + error);
      });
    } else {
      setAuction({ ...props.auction });
    }

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
  }, [props.auction]);

  function handleChange(event) {
    const { name, value } = event.target;
    setAuction((prevAuction) => ({
      ...prevAuction,
      [name]:
        name === "user" || name === "category" ? parseInt(value, 10) : value,
    }));
  }

  function formIsValid() {
    const { title, user, category } = auction;
    const errors = {};
    if (!title) errors.title = "Title is required";
    if (!user) errors.user = "User is required";
    if (!category) errors.category = "Category is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveAuction(auction)
      .then(() => {
        toast.success("Auction saved!");
        history.push("/auctions");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return auctions.length === 0 ||
    users.length === 0 ||
    categories.length === 0 ? (
    <Spinner />
  ) : (
    <AuctionForm
      errors={errors}
      auction={auction}
      users={users}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageAuctionPage.propTypes = {
  auction: PropTypes.object.isRequired,
  auctions: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  loadAuctions: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
  loadCategories: PropTypes.func.isRequired,
  saveAuction: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export function getParsedId(pathname) {
  return parseInt(pathname.substring(9)) || null;
}

export function getAuctionById(auctions, id) {
  return auctions.find((auction) => auction.id === id) || null;
}

function mapStateToProps(state, ownProps) {
  const auctionId = getParsedId(ownProps.location.pathname);
  const auction =
    auctionId && state.auctions.length > 0
      ? getAuctionById(state.auctions, auctionId)
      : newAuction;
  return {
    auction,
    auctions: state.auctions,
    users: state.users,
    categories: state.categories,
  };
}

const mapDispatchToProps = {
  loadAuctions,
  saveAuction,
  loadUsers,
  loadCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuctionPage);

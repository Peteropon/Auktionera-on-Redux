import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { saveAuction } from "../../redux/actions/auctionActions";
import { loadCategories } from "../../redux/actions/categoryActions";
import config from "../../config";
import Spinner from "../common/Spinner";
import AuctionForm from "./AuctionForm";
import PropTypes from "prop-types";

function NewAuction({ saveAuction, categories, loadCategories }) {
  const [auction, setAuction] = useState({});
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (categories.length === 0) {
      loadCategories().catch((error) => {
        alert("Loading categories failed" + error);
      });
    }
  }, []);

  function handleFormChange(event) {
    const { name, value } = event.target;
    setAuction((prevAuction) => ({
      ...prevAuction,
      [name]: value,
    }));
  }

  function formIsValid() {
    const { title, description, category, startPrice } = auction;
    const errors = {};
    if (!title) errors.title = "Title is required";
    if (!description) errors.description = "A description is required";
    if (!category) errors.category = "Category is required";
    if (!startPrice) errors.startPrice = "A starting price is quite needed too";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
  }

  return saving ? (
    <Spinner />
  ) : (
    <AuctionForm
      errors={errors}
      auction={auction}
      saving={saving}
      categories={categories}
      onChange={handleFormChange}
      onSave={handleSubmit}
    />
  );
}

NewAuction.propTypes = {
  loadCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  saveAuction: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    categories: state.categories,
  };
}

const mapDispatchToProps = {
  saveAuction,
  loadCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewAuction);

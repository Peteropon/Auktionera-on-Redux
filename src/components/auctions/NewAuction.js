import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { saveAuction } from "../../redux/actions/auctionActions";
import { loadCategories } from "../../redux/actions/categoryActions";
import Spinner from "../common/Spinner";
import AuctionForm from "./AuctionForm";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { s3Upload } from "../../libs/awsLib";
import { useDropzone } from "react-dropzone";

function NewAuction({ saveAuction, categories, loadCategories, history }) {
  const [files, setFiles] = useState([]);
  const [auction, setAuction] = useState({});
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const { acceptedFiles } = useDropzone();
  const onDrop = useCallback((acceptedFile) => {
    setFiles((prevFiles) => [...prevFiles, acceptedFile[0]]);
  }, []);

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

  // function handleFileChange(acceptedFile) {
  //   acceptedFiles.push(acceptedFile);
  //   console.info(acceptedFiles);
  // }

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
    try {
      const attachment = files[0] ? await s3Upload(files[0]) : null;
      console.info(attachment);
      await saveAuction(auction);
      toast.success("Auction created successfully!");
      history.push("/");
    } catch (e) {
      console.info(e);
      setSaving(false);
    }
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
      onDrop={onDrop}
    />
  );
}

NewAuction.propTypes = {
  loadCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  saveAuction: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
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

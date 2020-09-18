import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { saveAuction } from "../../redux/actions/auctionActions";
import { loadCategories } from "../../redux/actions/categoryActions";
import { loadFile } from "../../redux/actions/fileActions";
import AuctionForm from "./AuctionForm";
import PropTypes from "prop-types";

function EditAuction({
  auction,
  auctionId,
  auctions,
  categories,
  loadCategories,
  loadFile,
  file,
  ...props
}) {
  // const [auction, setAuction] = useState({ ...props.auction });

  useEffect(() => {
    if (categories.length === 0) {
      loadCategories().catch((error) => {
        alert("Loading categories failed -" + error);
      });
    }
    if (auction.attachment) {
      loadFile(auction.attachment).catch((error) => {
        alert("Loading file failed -" + error);
      });
    }
  }, []);

  return (
    <>
      <AuctionForm auction={auction} categories={categories} />
    </>
  );
}

EditAuction.propTypes = {
  auction: PropTypes.object.isRequired,
  auctions: PropTypes.array.isRequired,
  auctionId: PropTypes.string,
  categories: PropTypes.array.isRequired,
  loadFile: PropTypes.func.isRequired,
  loadCategories: PropTypes.func.isRequired,
  file: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  const auctionId = ownProps.match.params.id;
  const auction = state.myAuctions.find(
    (auction) => auction.auctionId === auctionId
  );
  return {
    auction:
      state.file === "" ? auction : { ...auction, attachmentURL: state.file },
    auctions: state.myAuctions,
    auctionId,
    categories: state.categories,
    file: state.file,
  };
}

const mapDispatchToProps = {
  saveAuction,
  loadCategories,
  loadFile,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAuction);

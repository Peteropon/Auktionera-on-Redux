import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { saveAuction } from "../../redux/actions/auctionActions";
import { loadCategories } from "../../redux/actions/categoryActions";
import { loadFile } from "../../redux/actions/fileActions";
import AuctionForm from "./AuctionForm";
import PropTypes from "prop-types";

function EditAuction({
  auctionId,
  auctions,
  categories,
  loadCategories,
  ...props
}) {
  const [auction, setAuction] = useState({ ...props.auction });
  const [attachmentURL, setAttachmentURL] = useState("");

  useEffect(() => {
    if (categories.length === 0) {
      loadCategories().catch((error) => {
        alert("Loading categories failed" + error);
      });
    }
    if (auction.attachment) {
      setAttachmentURL(loadFile(auction.attachment));
    }
  }, []);

  return (
    <>
      <div>Hi there</div>
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
};

function mapStateToProps(state, ownProps) {
  const auctionId = ownProps.match.params.id;
  const auction = state.myAuctions.find(
    (auction) => auction.auctionId === auctionId
  );
  return {
    auction,
    auctions: state.myAuctions,
    auctionId,
    categories: state.categories,
  };
}

const mapDispatchToProps = {
  saveAuction,
  loadCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAuction);

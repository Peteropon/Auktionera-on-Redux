import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ListGroupItem } from "react-bootstrap";

const MyAuctionList = ({ auctions }) => (
  <>
    {auctions.map((auction) => {
      return (
        <Link key={auction.auctionId} to={"/myauctions/" + auction.auctionId}>
          <ListGroupItem>
            <p>{auction.title}</p>
            {"Created: " + new Date(auction.createdAt).toLocaleString()}
          </ListGroupItem>
        </Link>
      );
    })}
  </>
);

MyAuctionList.propTypes = {
  auctions: PropTypes.array.isRequired,
};

export default MyAuctionList;

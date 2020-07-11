import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AuctionList = ({ auctions }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Description</th>
        <th>Seller</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {auctions.map((auction) => {
        return (
          <tr key={auction.id}>
            <td>
              <a
                className="btn btn-light"
                href={"http://pluralsight.com/courses/" + auction.slug}
              >
                Watch
              </a>
            </td>
            <td>
              <Link to={"/course/" + auction.slug}>{auction.description}</Link>
            </td>
            <td>{auction.seller}</td>
            <td>{auction.category}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

AuctionList.propTypes = {
  auctions: PropTypes.array.isRequired,
};

export default AuctionList;

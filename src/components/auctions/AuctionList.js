import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardDeck, Container } from "react-bootstrap";
import photo from "./PageNotFound.png";

const AuctionList = ({ auctions }) => (
  <>
    <Container>
      <CardDeck>
        {auctions.map((auction) => {
          return (
            <Card className="col" key={auction.id}>
              <Card.Img variant="top" src={photo} height={200} />
              <Card.Body>
                <Card.Title>{auction.description}</Card.Title>
                <Card.Text>This content is a little bit longer.</Card.Text>
                <Link to={"/auction/" + auction.id}>See details</Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          );
        })}
      </CardDeck>
    </Container>
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
                <Link to={"/auction/" + auction.id}>{auction.description}</Link>
              </td>
              <td>{auction.userName}</td>
              <td>{auction.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </>
);

AuctionList.propTypes = {
  auctions: PropTypes.array.isRequired,
};

export default AuctionList;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Card,
  CardDeck,
  Container,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import photo from "./photoNotFound.png";

const AuctionList = ({ auctions }) => (
  <>
    <Container>
      <CardDeck>
        {auctions.map((auction) => {
          return (
            <Card className="col" key={auction.auctionId}>
              <Card.Img
                variant="top"
                src={photo}
                className="img-fluid"
                alt="Photo not found"
              />
              <Card.Body>
                <OverlayTrigger
                  placement="auto-start"
                  overlay={
                    <Tooltip id="title-tooltip">
                      Click for more details.
                    </Tooltip>
                  }
                  delay={200}
                >
                  <Card.Title>
                    <Link to={"/auction/" + auction.id}>{auction.title}</Link>
                  </Card.Title>
                </OverlayTrigger>
                <button className="btn btn-info">Bid!</button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Starting price: {auction.startPrice}
                </small>
                <p>Current bid: </p>
              </Card.Footer>
            </Card>
          );
        })}
      </CardDeck>
    </Container>
  </>
);

AuctionList.propTypes = {
  auctions: PropTypes.array.isRequired,
};

export default AuctionList;

'use client'

import { Button, Card } from "@mui/material";
import CheckIcon from "./CheckIcon";
import { TierDetail } from ".";


const TierCard = ({ tier }: { tier: TierDetail }) => {
  const isDonation = tier.name === "Donation";
  const openLink = (link: string) => window.open(link, "_blank")

  return (
    <Card className="sponsorshipCard">
      <h3 className="cardTitle">{tier.name}</h3>
      {isDonation ? (
        <p className="tierPricing">
          Make a custom one-time or recurring contribution.
        </p>
      ) : (
        <p className="tierPricing">
          <span className="pricingMain">${tier.fee} </span>USD / month
        </p>
      )}
      <div className="cardFooter">
        <Button variant="contained" className="cardFooterBtn" size="large" onClick={ () => openLink(tier.link) }>
          {isDonation ? "One-Time Donation" : "Contribute"}
        </Button>
        
      </div>
      <div className="tierBenefits">
        {tier.benefits.map((offer) => (
          <div className="benefit" key={offer}>
            <CheckIcon />
            <p>{offer}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TierCard;

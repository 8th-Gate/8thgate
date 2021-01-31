import React from "react";
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-tables";
import "./PricingCard.css";

function PricingCard() {
	return (
		<div className="pricingCard" id="pricing">
			<PricingTable highlightColor="#1976D2">
				<PricingSlot
					buttonText="TRY IT FREE"
					title="FREE"
					priceText="$0/month">
					<PricingDetail>
						{" "}
						<b>15</b> projects
					</PricingDetail>
					<PricingDetail>
						{" "}
						<b>5 GB</b> storage
					</PricingDetail>
					<PricingDetail>
						{" "}
						<b>5</b> users
					</PricingDetail>
					<PricingDetail strikethrough>
						{" "}
						<b>Time tracking</b>
					</PricingDetail>
				</PricingSlot>
				<PricingSlot
					highlighted
					buttonText="SIGN UP"
					title="BASIC"
					priceText="$24/month">
					<PricingDetail>
						{" "}
						<b>35</b> projects
					</PricingDetail>
					<PricingDetail>
						{" "}
						<b>15 GB</b> storage
					</PricingDetail>
					<PricingDetail>
						{" "}
						<b>Unlimited</b> users
					</PricingDetail>
					<PricingDetail>
						{" "}
						<b>Time tracking</b>
					</PricingDetail>
				</PricingSlot>
				<PricingSlot
					buttonText="SIGN UP"
					title="PROFESSIONAL"
					priceText="$99/month">
					<PricingDetail>
						{" "}
						<b>100</b> projects
					</PricingDetail>
					<PricingDetail>
						{" "}
						<b>30 GB</b> storage
					</PricingDetail>
					<PricingDetail>
						{" "}
						<b>Unlimited</b> users
					</PricingDetail>
					<PricingDetail>
						{" "}
						<b>Time tracking</b>
					</PricingDetail>
				</PricingSlot>
			</PricingTable>
			;
		</div>
	);
}

export default PricingCard;

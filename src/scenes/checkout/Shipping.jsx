import React from "react";
import { CheckBox } from "@mui/icons-material";
import { Box, FormControlLabel, Typography } from "@mui/material";
import AddressForm from "./AddressForm";

const Shipping = function (props) {
	return (
		<Box m={"30px auto"}>
			{/* Billing Form */}
			<Box>
				<Typography sx={{ mb: "15px" }} fontSize={"18px"}>
					Billing Information
				</Typography>
				<AddressForm
					type="billingAddress"
					values={props.values.billingAddress}
					errors={props.errors}
					touched={props.touched}
					handleBlur={props.handleBlur}
					handleChange={props.handleChange}
				/>
			</Box>

			<Box mb={"20px"}>
				<FormControlLabel
					label="Same for Shipping Address"
					control={
						<CheckBox
							defaultChecked
							value={props.values.shippingAddress.isSameAddress}
							onChange={() =>
								props.setFieldValue(
									"shippingAddress.isSameAddress",
									!props.values.shippingAddress.isSameAddress
								)
							}
						/>
					}
				/>
			</Box>

			{/* Shipping Form */}
			{!props.values.shippingAddress.isSameAddress && (
				<Box>
					<Typography sx={{ mb: "15px" }} fontSize={"18px"}>
						Shipping Information
					</Typography>
					<AddressForm
						type="shippingAddress"
						values={props.values.billingAddress}
						errors={props.errors}
						touched={props.touched}
						handleBlur={props.handleBlur}
						handleChange={props.handleChange}
					/>
				</Box>
			)}
		</Box>
	);
};

export default Shipping;

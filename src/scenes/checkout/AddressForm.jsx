import React from "react";
import { getIn } from "formik";
import { Box, TextField, useMediaQuery } from "@mui/material";

const AddressForm = function (props) {
	const isNonMobile = useMediaQuery("(min-width: 600px)");

	//These functions allow for better readability
	const formattedName = field => `${props.type}.${field}`;

	const formattedError = field =>
		Boolean(
			getIn(props.touched, formattedName(field)) && getIn(props.errors, formattedName(field))
		);

	const formattedHelper = field =>
		getIn(props.touched, formattedName(field)) && getIn(props.errors, formattedName(field));

	return (
		<Box
			display={"grid"}
			gap={"15px"}
			gridTemplateColumns={"repeat(4, min-max(0, 1fr))"}
			sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" } }}
		>
			<TextField
				fullWidth
				type="text"
				label="First Name"
				onBlur={props.handleBlur}
				onChange={props.handleChange}
				value={props.values.firstName}
				name={formattedName("firstName")}
				error={formattedError("firstName")}
				helperText={formattedHelper("firstName")}
				sx={{ gridColumn: "span 2" }}
			/>
			<TextField
				fullWidth
				type="text"
				label="Last Name"
				onBlur={props.handleBlur}
				onChange={props.handleChange}
				value={props.values.lastName}
				name={formattedName("lastName")}
				error={formattedError("lastName")}
				helperText={formattedHelper("lastName")}
				sx={{ gridColumn: "span 2" }}
			/>
			<TextField
				fullWidth
				type="text"
				label="Country"
				onBlur={props.handleBlur}
				onChange={props.handleChange}
				value={props.values.country}
				name={formattedName("country")}
				error={formattedError("country")}
				helperText={formattedHelper("country")}
				sx={{ gridColumn: "span 4" }}
			/>
			<TextField
				fullWidth
				type="text"
				label="Street Address 1"
				onBlur={props.handleBlur}
				onChange={props.handleChange}
				value={props.values.street1}
				name={formattedName("street1")}
				error={formattedError("street1")}
				helperText={formattedHelper("street1")}
				sx={{ gridColumn: "span 2" }}
			/>
			<TextField
				fullWidth
				type="text"
				label="Street Address 2 (optional)"
				onBlur={props.handleBlur}
				onChange={props.handleChange}
				value={props.values.street2}
				name={formattedName("street2")}
				error={formattedError("street2")}
				helperText={formattedHelper("street2")}
				sx={{ gridColumn: "span 2" }}
			/>
			<TextField
				fullWidth
				type="text"
				label="City"
				onBlur={props.handleBlur}
				onChange={props.handleChange}
				value={props.values.city}
				name={formattedName("city")}
				error={formattedError("city")}
				helperText={formattedHelper("city")}
				sx={{ gridColumn: "span 2" }}
			/>
			<TextField
				fullWidth
				type="text"
				label="State"
				onBlur={props.handleBlur}
				onChange={props.handleChange}
				value={props.values.state}
				name={formattedName("state")}
				error={formattedError("state")}
				helperText={formattedHelper("state")}
				sx={{ gridColumn: "1fr" }}
			/>
			<TextField
				fullWidth
				type="text"
				label="Zip Code"
				onBlur={props.handleBlur}
				onChange={props.handleChange}
				value={props.values.zipCode}
				name={formattedName("zipCode")}
				error={formattedError("zipCode")}
				helperText={formattedHelper("zipCode")}
				sx={{ gridColumn: "1fr" }}
			/>
		</Box>
	);
};

export default AddressForm;

import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const Payment = function (props) {
	return (
		<Box m={"30px 0"}>
			{/* Contact info */}
			<Box>
				<Typography fontSize={"18px"} sx={{ mb: "15px" }}>
					Contact Info
				</Typography>
				<TextField
					fullWidth
					type="text"
					label="Email"
					onBlur={props.handleBlur}
					onChange={props.handleChange}
					value={props.values.email}
					name={"email"}
					error={!!props.touched.email && !!props.errors.email}
					helperText={props.touched.email && props.errors.email}
					sx={{ gridColumn: "span 4", marginBottom: "15px" }}
				/>
				<TextField
					fullWidth
					type="text"
					label="Phone Number"
					onBlur={props.handleBlur}
					onChange={props.handleChange}
					value={props.values.phoneNumber}
					name={"phoneNumber"}
					error={!!props.touched.phoneNumber && !!props.errors.phoneNumber}
					helperText={props.touched.phoneNumber && props.errors.phoneNumber}
					sx={{ gridColumn: "span 4" }}
				/>
			</Box>
		</Box>
	);
};

export default Payment;

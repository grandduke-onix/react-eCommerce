import React, { useState } from "react";
import { Box, Typography, Divider, InputBase, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";

const Subscribe = function () {
	const [email, setEmail] = useState("");

	return (
		<Box width={"80%"} margin={"80px auto"} textAlign={"center"}>
			<IconButton>
				<MarkEmailReadOutlinedIcon fontSize="large" />
			</IconButton>
			<Typography variant="h3">Subscribe to Our Newsletter</Typography>
			<Typography>
				add and recieve $20 coupon for your first order when you checkout
			</Typography>
			<Box
				p={"2px 4px"}
				m={"15px auto"}
				display={"flex"}
				alignItems={"center"}
				width={"75%"}
				backgroundColor={"#f2f2f2"}
			>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder="Enter email"
					onChange={e => setEmail(e.target.value)}
				/>
				<Divider sx={{ height: "28px", margin: "0.5px" }} orientation="vertical" />
				<Typography sx={{ p: "10px", ":hover": { cursor: "pointer" } }}>
					Subscribe
				</Typography>
			</Box>
		</Box>
	);
};

export default Subscribe;

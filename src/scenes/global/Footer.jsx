import React from "react";
import { useTheme } from "@mui/material";
import { Typography, Box } from "@mui/material";
import { shades } from "../../theme";

const Footer = function () {
	const neutral = useTheme().palette.neutral;

	return (
		<Box mt={"70px"} p={"40px 0"} backgroundColor={neutral.light}>
			<Box
				width={"80%"}
				margin={"auto"}
				display={"flex"}
				justifyContent={"space-between"}
				flexWrap={"wrap"}
				rowGap={"30px"}
				columnGap={"clamp(20px, 30px, 40px"}
			>
				<Box width={"clamp(20%, 30%, 40%)"}>
					<Typography
						variant="h4"
						fontWeight={"bold"}
						mb={"30px"}
						color={shades.secondary[500]}
					>
						ECCOMER
					</Typography>
					<div>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ducimus eos,
						totam perferendis dolorem temporibus itaque tenetur mollitia, corporis
						nostrum asperiores ex illo ipsa sequi ipsum labore est, fuga quibusdam
						veniam rerum soluta impedit! Officia!
					</div>
				</Box>
				<Box>
					<Typography variant="h4" fontWeight={"bold"} mb={"30px"}>
						About us
					</Typography>
					<Typography mb={"30px"}>Careers</Typography>
					<Typography mb={"30px"}>Our Stores</Typography>
					<Typography mb={"30px"}>Terms and Conditions</Typography>
					<Typography mb={"30px"}>Privacy Policy</Typography>
				</Box>
				<Box>
					<Typography variant="h4" fontWeight={"bold"} mb={"30px"}>
						Customer Care
					</Typography>
					<Typography mb={"30px"}>Help Center</Typography>
					<Typography mb={"30px"}>Track Your Order</Typography>
					<Typography mb={"30px"}>Coperate and Bulk Purchases</Typography>
					<Typography mb={"30px"}>Returns and Refunds</Typography>
				</Box>

				<Box width={"clamp(20%, 25%, 30%)"}>
					<Typography variant="h4" fontWeight={"bold"} mb={"30px"}>
						Contact us
					</Typography>
					<Typography mb={"30px"}></Typography>
					<Typography mb={"30px"}>Whatever PO Box whatever number</Typography>
					<Typography mb={"30px"}>Email: something@gmail.com</Typography>
					<Typography mb={"30px"}>(234)-907-092-7990</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Footer;

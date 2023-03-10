import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

const Item = function (props) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [count, setCount] = useState(1);
	const [isHovered, setIsHovered] = useState(false);
	const { neutral } = useTheme().palette;
	const { category, price, name, image } = props.item.attributes;
	const {
		data: {
			attributes: {
				formats: {
					medium: { url },
				},
			},
		},
	} = image;

	return (
		<Box width={props.width}>
			<Box
				position={"relative"}
				onMouseOver={() => setIsHovered(true)}
				onMouseOut={() => setIsHovered(false)}
			>
				<img
					src={`http://localhost:1337${url}`}
					alt={props.item.name}
					width={"300px"}
					height={"400px"}
					onClick={() => navigate(`/item/${props.item.id}`)}
					style={{ cursor: "pointer" }}
				/>
				<Box
					display={isHovered ? "block" : "none"}
					position={"absolute"}
					bottom={"10%"}
					left={"0"}
					width={"100%"}
					padding={"0 5%"}
				>
					<Box display={"flex"} justifyContent={"space-between"}>
						{/* Amount */}
						<Box
							display={"flex"}
							alignItems={"center"}
							backgroundColor={shades.neutral[100]}
							borderRadius={"3px"}
						>
							<IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
								<RemoveIcon />
							</IconButton>
							<Typography color={shades.primary[300]}>{count}</Typography>
							<IconButton onClick={() => setCount(count + 1)}>
								<AddIcon />
							</IconButton>
						</Box>

						{/* Button */}
						<Button
							onClick={() => dispatch(addToCart({ item: { ...props.item, count } }))}
							sx={{ backgroundColor: shades.primary[300], color: "white" }}
						>
							Add to Cart
						</Button>
					</Box>
				</Box>
			</Box>

			<Box mt={"3px"}>
				<Typography variant="subtitle2" color={neutral.dark}>
					{category}
				</Typography>
				<Typography>{name}</Typography>
				<Typography fontWeight={"bold"}>${price}</Typography>
			</Box>
		</Box>
	);
};

export default Item;

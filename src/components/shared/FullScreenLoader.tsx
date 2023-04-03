import { CircularProgress, Stack, Typography } from "@mui/material";
import { FC } from "react";

const FullScreenLoader: FC = () => {
	return (
		<Stack
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			height="calc(100vh - 100px)"
			spacing={1}
		>
			<CircularProgress thickness={2} />
			<Typography variant="h6" component="span">
				Loading...
			</Typography>
		</Stack>
	);
};

export default FullScreenLoader;

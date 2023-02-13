import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { ChangeEvent, FC } from "react";
import { FormLabel, IconButton, Stack, TextField } from "@mui/material";
import styles from "./ItemCounter.module.css";

type ItemCounterProps = {
	current: number;
	onChange: (newValue: number) => void;
	min: number;
	max: number;
	name: string;
	label: string;
};

const ItemCounter: FC<ItemCounterProps> = ({
	current,
	onChange,
	min,
	max,
	name,
	label,
}) => {
	const onRemove = (): void => {
		if (current <= min) return;
		onChange(current - 1);
	};
	const onAdd = (): void => {
		if (current >= max) return;
		onChange(current + 1);
	};
	const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const value = Number(e.target.value);
		if (value > max || value < min) return;
		onChange(value);
	};
	return (
		<Stack
			direction="row"
			justifyContent="space-between"
			alignItems="center"
		>
			<IconButton
				onClick={onRemove}
				disabled={current <= min}
				size="small"
			>
				<RemoveCircle />
			</IconButton>
			<FormLabel id={name + "type-selector-label"} hidden>
				{label}
			</FormLabel>
			<TextField
				id={name + "item-counter"}
				aria-labelledby={name + "type-selector-label"}
				hiddenLabel
				sx={{
					width: "50px",
				}}
				inputProps={{
					className: styles["item-counter-input"],
					style: {
						textAlign: "center",
					},
				}}
				type="number"
				onChange={onInputChange}
				value={current}
				size="small"
				variant="standard"
			/>
			<IconButton onClick={onAdd} disabled={current >= max} size="small">
				<AddCircle />
			</IconButton>
		</Stack>
	);
};

export default ItemCounter;

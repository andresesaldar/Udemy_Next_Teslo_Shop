import { ChangeEvent, ReactElement } from "react";
import {
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from "@mui/material";

export type TypeSelectorProps<T extends string> = {
	selected: T;
	available: Set<T>;
	onChange: (newValue: T) => void;
	label: string;
	name: string;
};

function TypeSelector<T extends string>({
	selected,
	available,
	onChange,
	label,
	name,
}: TypeSelectorProps<T>): ReactElement {
	const onValueChange = (event: ChangeEvent<HTMLInputElement>): void =>
		onChange(event.target.value as T);
	return (
		<FormControl>
			<FormLabel id={name + "type-selector-label"} hidden>
				{label}
			</FormLabel>
			<RadioGroup
				row
				aria-labelledby={name + "type-selector-label"}
				name={name + "type-selector"}
				value={selected}
				onChange={onValueChange}
			>
				{Array.from(available).map((option, i) => (
					<FormControlLabel
						key={i}
						value={option}
						control={<Radio />}
						label={option}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
}

export default TypeSelector;

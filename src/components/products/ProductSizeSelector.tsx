import TypeSelector, { TypeSelectorProps } from "../shared/TypeSelector";
import { FC } from "react";
import { ProductSize } from "@/models/product";

type ProductSizeSelectorProps = TypeSelectorProps<ProductSize>;

const ProductSizeSelector: FC<ProductSizeSelectorProps> = ({
	available,
	selected,
	onChange,
	label,
	name,
}) => (
	<TypeSelector
		available={available}
		selected={selected}
		onChange={onChange}
		label={label}
		name={name}
	/>
);

export default ProductSizeSelector;

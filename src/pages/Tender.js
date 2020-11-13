import React from "react";
import { PrimaryButton } from "../components/Buttons";

export default function Tender() {
	return (
		<div className="flex flex-col w-full p-2">
			<div className="py-2">
				<span className="text-xl text-gray-800">Tender No. 1</span>
			</div>
			<div>
				<span className="text-xl text-gray-800">Map View</span>
			</div>
			<div className="flex flex-col text-xl text-gray-800">
				<span>Tender Name</span>
				<span>Contract No</span>
				<span>Procurring Entity</span>
				<span>Supplier Name</span>
			</div>
			<div className="flex justify-center w-full py-2">
				<PrimaryButton title="Evaluate" />
			</div>
		</div>
	);
}

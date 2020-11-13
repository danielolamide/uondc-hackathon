import React from "react";
import TextInput from "../components/CustomTextInput";
import { PrimaryButton } from "../components/Buttons";

export default function ConfirmEvaluation() {
	return (
		<div className="flex flex-col px-6 py-4">
			<span className="text-xl text-gray-800">Confirm Evaluation</span>
			<div className="py-2">
				<select
					name="evaluation"
					className="w-full p-2 border-2 border-gray-800"
				>
					<option value="Type of Evaluation">Type of Evaluation</option>
				</select>
			</div>
			<div className="w-full py-2">
				<TextInput placeholder="Title" />
			</div>
			<div className="py-2">
				<TextInput placeholder="Description" />
			</div>
			<div className="py-2">
				<TextInput placeholder="Select Date" />
			</div>
			<div className="py-2">
				<TextInput placeholder="Insert Images (Optional)" />
			</div>
			<div className="flex justify-center w-full py-2">
				<div className="px-2">
					<PrimaryButton title="Edit" />
				</div>
				<PrimaryButton title="Confirm" />
			</div>
		</div>
	);
}

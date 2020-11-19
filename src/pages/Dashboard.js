import React from "react";
import TextInput from "../components/CustomTextInput";
import { PrimaryButton } from "../components/Buttons";
import List from "../components/List";
export default function Dashboard() {
	const items = ["Tender 1", "Tender 2", "Tender 3"];
	return (
		<div className="flex flex-col w-full p-2">
			<div className="flex justify-center w-full py-4">
				<div className="flex-1 px-1">
					<TextInput placeholder="Search tender..." />
				</div>
				<PrimaryButton title="Search" />
			</div>
			<div className="flex flex-col w-full">
				<div className="flex justify-center w-full">
					<span className="text-xl text-gray-800">Recent Tenders</span>
				</div>
				<div className="py-2">
					<List items={items} />
				</div>
			</div>
		</div>
	);
}

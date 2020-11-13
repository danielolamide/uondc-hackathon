import React from "react";
import List from "../components/List";

export default function Search() {
	const items = ["Tender 1", "Tender 2", "Tender 3"];
	return (
		<div className="flex flex-col w-full p-2">
			<div className="flex justify-center w-full">
				<span className="text-xl text-gray-800">Search Results</span>
			</div>
			<div className="py-4">
				<List items={items} />
			</div>
		</div>
	);
}

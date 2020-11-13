import React from "react";

export function PrimaryButton({ title }) {
	return (
		<button className="px-6 py-3 text-gray-300 uppercase bg-gray-700 rounded-md">{title}</button>
	);
}

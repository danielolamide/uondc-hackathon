import React from "react";

export default function TextField({ placeholder }) {
	return (
		<input
			type="text"
			placeholder={placeholder}
			className="w-full p-3 placeholder-gray-800 bg-gray-400 rounded-sm outline-none"
		/>
	);
}

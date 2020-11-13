import React from "react";
import { FaChevronRight } from "react-icons/fa";

export default function List({ items }) {
	return (
		<div className="w-full">
			{items.map((item, i) =>
				i + 1 !== items.length ? (
					<div className="flex items-center justify-between w-full p-2 text-gray-300 bg-gray-800 border-b border-gray-200">
						<span>{item}</span>
						<FaChevronRight size={10} color="gray" />
					</div>
				) : (
					<div className="flex items-center justify-between w-full p-2 text-gray-300 bg-gray-800">
						<span>{item}</span>
						<FaChevronRight size={10} color="gray" />
					</div>
				)
			)}
		</div>
	);
}

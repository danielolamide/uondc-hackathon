import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
	width: "100%",
	height: "100%"
};
const containerStyles = {
	position: "relative"
};
export class MapContainer extends Component {
	render() {
		return (
			<div className="w-full h-64">
				<Map
					google={this.props.google}
					containerStyle={containerStyles}
					zoom={14}
					style={mapStyles}
					initialCenter={{
						lat: -1.2884,
						lng: 36.8233
					}}
				/>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: `${process.env.REACT_APP_MAPS_API}`
})(MapContainer);

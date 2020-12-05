import React, { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

const UserDetails = ({ users }) => {
  const [user, setUser] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (users) {
      setUser(...users.filter((user) => user.login.uuid === id));
    }
  }, [users, id]);

  if (!users) {
    return <Redirect to="/" />;
  }

  if (user) {
    const lat = user.location.coordinates.latitude;
    const lon = user.location.coordinates.longitude;
    const position = [parseFloat(lat), parseFloat(lon)];

    return (
      <>
        <h2>User Details</h2>
        <p>
          Hello, my name is <b>{user.name.first}</b> and I'm from{" "}
          <b>{user.location.city}</b>
        </p>
        <Link to="/">Back</Link>

        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="map"
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default UserDetails;

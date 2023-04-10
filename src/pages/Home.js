import React from "react";
import BackMap from "../asset/kolkata-map.jpg";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const data = [
  {
    name: "D & P Digital Store",
    left: "200px",
    top: "200px",
    mapLink: "https://goo.gl/maps/uT13hWdsatdWrCpP6",
    isActive: true,
  },
  {
    name: "Kharpara Tarun Sangha Club",
    left: "100px",
    top: "500px",
    mapLink: "https://goo.gl/maps/69t4fVeooQggGggw9",
    isActive: false,
  },
  {
    name: "IGWTP Park",
    left: "500px",
    top: "500px",
    mapLink: "https://goo.gl/maps/UEU4vveCE4Reu9H66",
    isActive: true,
  },
  {
    name: "Temple [5/10]",
    left: "600px",
    top: "500px",
    mapLink: "https://goo.gl/maps/XqhppekRX5uFXYKj6",
    isActive: true,
  },
];

const MyComponent = () => {
  const styles = {
    backgroundImage: `url('${BackMap}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    width: "100%",
    height: "96vh",
  };

  return (
    <>
      <div style={styles}></div>
      {data?.map((val) => {
        return (
          <a href={val?.mapLink} target="_blank">
            <IconButton
              color={val?.isActive ? "secondary" : "error"}
              aria-label="add an alarm"
              style={{
                left: val?.left,
                top: val?.top,
                display: "block",
                position: "absolute",
              }}
            >
              <FmdGoodIcon style={{ fontSize: 50 }} />
              <p
                style={{
                  fontSize: 17,
                  margin: 0,
                  fontWeight: "bold",
                  textShadow: "2px 7px 20px #797979",
                }}
              >
                {val?.name}
              </p>
            </IconButton>
          </a>
        );
      })}
    </>
  );
};

export default MyComponent;

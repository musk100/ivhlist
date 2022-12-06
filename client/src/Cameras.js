import React from "react";
import "./App.css";
import { dummyData } from "./data";

export const Cameras = () => {
  return (
    <>
      <Home />
      <div className="camera-container">
        {dummyData.map((data, key) => {
          return (
            <div key={key}>
              <Camera
                key={key}
                company={data.company}
                ticker={data.ticker}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const Home = () => {
  return (
    <header className="header">
      <h2>Your Camera List Tracker</h2>
    </header>
  );
};

const Camera = ({ company, ticker }) => {
  if (!company) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{company}</h5>
          </td>
          <td>
            <h5>{ticker}</h5>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

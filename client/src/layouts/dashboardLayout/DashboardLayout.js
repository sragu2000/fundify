import "./DashboardLayout.css";
import { Outlet } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { useState } from "react";
import NavBar from "./NavBar/NavBar";
export default function DashboardLayout() {
  return (
    <div className="dashboard-container">
      <NavBar />
      <main className="main-container">
        <Outlet />
      </main>

    </div>
  );
}


export const editButton = (
  <span style={{ color: "#23758E", cursor: "pointer" }}>
    <FaEdit />
  </span>
);
export const deleteButton = (
  <span style={{ color: "#B91C1C", cursor: "pointer" }}>
    <FaRegTrashAlt className="delete-button-style" />
  </span>
);

export const viewButton = (
  <span style={{ color: "rgb(30 93 38)", cursor: "pointer" }}>
    <MdOpenInNew />
  </span>
);

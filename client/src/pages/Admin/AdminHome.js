//Admin Home page
import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
import "../../styles/AdminHome.css";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <div className="admin-home-container container">
        <div className="admin-welcome d-flex flex-column mt-4">
          <h1 className="admin-welcome-title">
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3 className="admin-subtitle">Manage FarmTech Innovations Platform</h3>
          <hr />
          <p className="admin-description">
            As an administrator, you play a vital role in the FarmTech Innovations platform. Your responsibilities include overseeing farm technology management, monitoring user activities, and ensuring the platform's data integrity.
          </p>
          <p className="admin-description">
            You can manage different aspects of the platform, such as farm data, equipment inventories, and user accounts. Utilize the tools available to generate reports, track farm performance, and coordinate with farmers and technology providers.
          </p>
          <p className="admin-description">
            Your work ensures that the technology and resources provided are effectively supporting farmers and enhancing agricultural productivity. Please use the dashboard features to review farm metrics, add new technology records, and manage user interactions as necessary.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;

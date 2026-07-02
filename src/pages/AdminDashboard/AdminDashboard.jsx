import { useEffect, useState } from "react";
import { apiClient, API } from "../../config/api";
import { useAuth } from "../../context/AuthContext";

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    apiClient.get(API.adminDashboard).then((res) => setData(res.data));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user?.name} ({user?.roles?.join(", ")})</p>
      {data && (
        <div>
          <p>Total Students: {data.total_students}</p>
          <p>Total Admins: {data.total_admins}</p>
        </div>
      )}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
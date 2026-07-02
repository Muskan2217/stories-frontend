import { useEffect, useState } from "react";
import { apiClient, API } from "../../config/api";
import { useAuth } from "../../context/AuthContext";

const StudentDashboard = () => {
  const { user, logout } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    apiClient.get(API.studentDashboard).then((res) => setData(res.data));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Student Dashboard</h1>
      <p>Welcome, {user?.name}</p>
      {data && <p>{data.message}</p>}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default StudentDashboard;
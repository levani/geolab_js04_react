import { useEffect } from "react"
import axios from 'axios';
import { useHistory } from "react-router-dom";
import useAuth from "./hooks/useAuth";

export default function Dashboard() {
  let history = useHistory();
  const { token } = useAuth();

  useEffect(() => {
    axios.get('http://localhost:5001/js04-b4877/us-central1/api/dashboard', {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log('response')
      })
      .catch((error) => {
        if (error.response.status === 401) {
          history.push('/login');
        }
      })
  }, [token]);

  return (
    <div>
      Dashboard
    </div>
  )
}
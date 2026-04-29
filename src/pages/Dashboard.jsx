import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/feature/authSlice";
import { useEffect } from "react";
import { getTodos } from "../redux/thunk/todoThunk";

const Dashboard = () => {

    const dispatch = useDispatch()
    const {currentUser} = useSelector((state) => state.auth)
    const {items} = useSelector((state) => state.todo)


    
    const handleLogout = () => {
        dispatch(logout())
    }

    useEffect(() => {
        dispatch(getTodos())
    },[])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-black text-white rounded-xl"
          >
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-lg">Profile</h3>
            <p className="text-sm text-gray-600 mt-2">Name: {currentUser?.name}</p>
            <p className="text-sm text-gray-600">Email: {currentUser?.email}</p>
          </div>

         {items.map((i,idx) => (<li key={idx}>{i.todo}</li>))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard
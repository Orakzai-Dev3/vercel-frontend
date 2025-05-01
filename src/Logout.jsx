import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
      
     data = await response.json()
     data.message
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (<button 
        onClick={() => setShowPopup(true)}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
   
  );
};

export default Logout;
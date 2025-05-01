import React from 'react'

import  { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';


function ProtectedRoute({ children, allowed_role }) {
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRole = async () => {
      try {
    
        
        // 3. Then verify with backend
        const response = await fetch('http://localhost:3000/get-role', {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            
          },
          credentials: 'include'
        });

        if (!response.ok) {
          throw new Error('Failed to verify role');
        }

        const data = await response.json();
        setRole(data.role);
        console.log(role)
      } catch (err) {
        console.error('Authentication error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRole();
  }, []);

  if (loading) {
    return <div>Loading authentication...</div>;
  }

  if (error) {
    return <Navigate to="/signin" replace />;
  }

  if (allowed_role && role !== allowed_role) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

export default ProtectedRoute;



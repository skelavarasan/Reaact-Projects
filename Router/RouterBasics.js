import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet, useNavigate, useParams } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function Users() {
  return (
    <div>
      <h1>Users Page</h1>
      <ul>
        <li>
          <Link to="1">User 1</Link>
        </li>
        <li>
          <Link to="2">User 2</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

function UserProfile({ params }) {
    const { id } = useParams();

    return <h2>User Profile: {id}</h2>;
}

function ProtectedPage() {
  return <h1>Protected Page</h1>;
}

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate a login action
    setTimeout(() => {
      navigate('/protected');
    }, 1000);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function NotFound() {
  return <h1>Not Found</h1>;
}

function RouterBasics() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />}>
          <Route path=":id" element={<UserProfile />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/protected" element={<ProtectedPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default RouterBasics;

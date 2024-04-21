import { useAuth } from "./security/AuthContext";

export default function Welcome() {
  const authContext = useAuth();

  const username = authContext.username;
  return (
    <div className="container">
      <h1 className="text-center">Welcome {username}</h1>
    </div>
  );
}

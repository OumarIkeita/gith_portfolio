import { useState } from "react";
import { LiaEye , LiaEyeSlash} from "react-icons/lia";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [InputFace, setInputFace] = useState(false);
  const navigate = useNavigate();
  //input FaEye Icons
  const handleInput = () => {
    setInputFace(!InputFace);
  };
  ///login Form
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        Email,
        Password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate('/Home');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Username/Student No"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="Email"
            autoComplete="off"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            type={InputFace ? "text" : "Password"}
            id="Password"
            name="Password"
            autoComplete="off"
          />
          <button type="button" onClick={handleInput}>
            {InputFace ? <LiaEyeSlash /> : <LiaEye />}
          </button>
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
}

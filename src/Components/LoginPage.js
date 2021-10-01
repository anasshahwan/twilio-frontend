import { useHistory, Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";
function LoginPage() {
  const auth = getAuth();
  const emailInput = useRef("");
  const passwordInput = useRef("");

  const history = useHistory();
  function onSubmit(e) {
    e.preventDefault();
    const email = emailInput.current.value;
    const pass = passwordInput.current.value;
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        history.push("/video");

        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div>
      <h1>LoginPage</h1>
      <form onSubmit={onSubmit}>
        <label for="email">Email: </label>
        <input ref={emailInput} id="email" type="email"></input>
        <br />
        <label for="Password">Password: </label>
        <input ref={passwordInput} id="Passowrd" type="password"></input>
        <br />
        <button> Login </button>
        <p>
          Don't have an account <Link to="/signup"> Register Now </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;

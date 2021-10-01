import { useHistory, Link } from "react-router-dom";
import { useRef } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const auth = getAuth();

  const history = useHistory();
  const emailInput = useRef("");
  const passwordInput = useRef("");

  async function onSubmit(e) {
    e.preventDefault();
    const email = emailInput.current.value;
    const pass = passwordInput.current.value;
    // history.push("/video");
    await createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <div>
      <h1>SignUp Page</h1>
      <form onSubmit={onSubmit}>
        <label for="email">Email: </label>
        <input ref={emailInput} id="email" type="email"></input>
        <br />
        <label for="Password">Password: </label>
        <input ref={passwordInput} id="Passowrd" type="password"></input>
        <br />
        <button> SignUp </button>
        <p>
          Do you have an account <Link to="/"> Login here </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;

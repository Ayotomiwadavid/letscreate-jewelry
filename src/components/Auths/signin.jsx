import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../shared/Footer";
import AuthNavbar from "../shared/Navbar/authNav";
import { signIn } from "../../Controller";
import { toast } from "react-toastify";
import { AuthStatus } from "../../Context/Usecontext";

const SigninForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  //Context Import starts here
  const authContext = useContext(AuthStatus);
  const {setAuthStatusValue, setUser} = authContext;

  // HANDLE SIGN IN FUNCTION
  const signInAccount = async () => {
    setLoading(true)
    try {

      const userdata = await signIn(email, password, setLoading);
      setAuthStatusValue(true);
      setUser(userdata);

      // Redirect to the home page after successful sign-in
      navigate("/");
      toast.success("Signed in successfully");

    } catch (error) {
      // Handle sign-in error
      toast.error("Failed to sign in. " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AuthNavbar />
      <div className="flex flex-col gap-5 my-12 mx-3 md:mx-[10rem] lg:mx-[18em] text-center justify-center items-center">
        <h2 className="text-[30px] text-black font-bold pt-5 sm:pt-12">
          Log in to your account
        </h2>
        <p className="text-primary_A2 small-medium md:base-regular mt-2">
          Welcome back! Please enter your details.
        </p>
        <div className="flex flex-col text-left gap-5 w-full mt-4">
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="......54@gmail.com"
              className="border rounded p-2 w-full"
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="border rounded p-2 w-full"
              required
            />
          </div>

          <button
            type="submit"
            onClick={signInAccount}
            className="bg-primary text-white p-3 rounded-md"
          >
            {isLoading ? (
              <div className="flex gap-3 justify-center items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-white"></div>
                Loading...
              </div>
            ) : (
              "Log in"
            )}
          </button>

          <p className="text-small-regular text-light-2 text-left mt-2">
            Don&apos;t have an account?
            <Link
              to="/sign-up"
              className="text-primary text-small-semibold ml-1"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SigninForm;

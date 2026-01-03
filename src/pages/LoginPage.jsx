import { Link, useLocation, useNavigate } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaUserShield } from "react-icons/fa";

import alert from "../lib/utils/alert";
import {
  loginUser,
  loginWithProvider,
  GoogleProvider,
} from "../services/firebase";
import { useAuth } from "../providers/AuthProvider";
import useToggle from "../hooks/useToggle";

import ScrollToTop from "../components/shared/ScrollToTop";
import PageTitle from "../components/shared/PageTitle";

const LoginPage = () => {
  const { setUser } = useAuth();
  const { value: showPassword, toggle: toggleShowPassword } = useToggle();
  const {
    register: registerFormField,
    reset: resetForm,
    watch,
    handleSubmit,
    setValue, // Used to programmatically fill the form
    formState: { errors: formErrors, isSubmitting: formIsSubmitting },
  } = useForm();

  const { state: redirectTo } = useLocation();
  const navigate = useNavigate();

  const email = watch("email");

  const handleAuthResult = (success, user, message) => {
    if (success) {
      setUser(user);
      resetForm();
      alert.success(
        "Logged In!",
        `You are successfully logged in as: ${user.displayName || "Demo User"}.`
      );
      navigate(redirectTo || "/");
    } else {
      alert.error("Oops!", message);
    }
  };

  const handleLogin = async (formData) => {
    const { email, password } = formData;
    const { success, user, message } = await loginUser(email, password);
    handleAuthResult(success, user, message);
  };

  const handleLoginWithGoogle = async () => {
    const { success, user, message } = await loginWithProvider(GoogleProvider);
    handleAuthResult(success, user, message);
  };

  const handleDemoLogin = async () => {
    const demoEmail = "demouser@gmail.com";
    const demoPassword = "Dem0u$er";

    setValue("email", demoEmail);
    setValue("password", demoPassword);

    const { success, user, message } = await loginUser(demoEmail, demoPassword);
    handleAuthResult(success, user, message);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <ScrollToTop />
      <PageTitle title="Login" />

      <motion.form
        onSubmit={handleSubmit(handleLogin)}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -25 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full max-w-sm mx-auto"
      >
        <fieldset className="fieldset bg-base-200 border border-base-300 rounded-xl p-6 shadow-md">
          <legend className="text-3xl font-bold text-center mb-4">Login</legend>

          <div className="flex flex-col gap-3">
            <label className="label font-medium">Email</label>
            <input
              {...registerFormField("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
            />
            {formErrors.email && (
              <p className="label text-xs text-error">
                {formErrors.email.message}
              </p>
            )}

            <label className="label font-medium mt-2">Password</label>
            <div className="relative">
              <input
                {...registerFormField("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type={showPassword ? "text" : "password"}
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-base-content/50 hover:text-primary"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
            {formErrors.password && (
              <p className="label text-xs text-error">
                {formErrors.password.message}
              </p>
            )}
          </div>

          <div className="mt-2 text-right">
            <Link
              to="/reset-password"
              state={email}
              className="link link-hover text-xs opacity-70"
            >
              Forgot password?
            </Link>
          </div>

          <motion.button
            type="submit"
            className="btn btn-primary w-full mt-4"
            disabled={formIsSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {formIsSubmitting ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Login"
            )}
          </motion.button>

          <div className="divider text-xs opacity-50">OR</div>

          <div className="flex flex-col gap-3">
            {/* Demo Login Button */}
            <button
              type="button"
              onClick={handleDemoLogin}
              disabled={formIsSubmitting}
              className="btn btn-outline btn-secondary gap-2"
            >
              <FaUserShield size={18} />
              Quick Demo Login
            </button>

            {/* Google Login Button */}
            <button
              type="button"
              onClick={handleLoginWithGoogle}
              disabled={formIsSubmitting}
              className="btn btn-outline border-base-300 gap-2 hover:bg-base-300 hover:text-base-content"
            >
              <FcGoogle size={20} />
              <span className="text-sm">Continue with Google</span>
            </button>
          </div>

          <div className="mt-6 text-center text-sm">
            <span className="opacity-70">Don't have an account? </span>
            <Link
              to="/register"
              className="underline text-primary font-semibold hover:text-primary-focus"
            >
              Register
            </Link>
          </div>
        </fieldset>
      </motion.form>
    </div>
  );
};

export default LoginPage;

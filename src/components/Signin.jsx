import React from "react";
import { MdEmail, MdLock } from "react-icons/md";

const Signin = () => {
  return (
    <div className="min-h-full w-full overflow-auto flex items-center justify-center p-4">
      <form className="form_container mt-32 mb-8">
        <div className="logo_container flex items-center justify-center">
          <img src="./src/assets/images/nike.svg" alt="" />
        </div>
        <div className="title_container">
          <p className="title">Login to your Account</p>
          <span className="subtitle">
            Get started with our app, just create an account and enjoy the
            experience.
          </span>
        </div>
        <br />
        <div className="input_container">
          <label className="input_label" htmlFor="email_field">
            Email
          </label>
          <MdEmail className="icon" size={24} />
          <input
            placeholder="Email"
            title="Input title"
            name="input-name"
            type="text"
            className="input_field"
            id="email_field"
          />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="password_field">
            Password
          </label>
          <MdLock className="icon" size={24} />
          <input
            placeholder="Password"
            title="Input title"
            name="input-name"
            type="password"
            className="input_field"
            id="password_field"
          />
        </div>
        <button title="Sign In" type="submit" className="sign-in_btn">
          <span>Sign In</span>
        </button>
        <div className="separator">
          <hr className="line" />
          <span>Or</span>
          <hr className="line" />
        </div>
        <button title="Sign In" type="submit" className="sign-in_ggl">
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="Google Icon"
            height="18"
            width="18"
          />
          <span>Sign In with Google</span>
        </button>
        <button title="Sign In" type="submit" className="sign-in_apl">
          <img
            src="https://cdn-icons-png.flaticon.com/512/0/747.png"
            className="invert-[1]"
            alt="Apple Icon"
            height="20"
            width="16"
          />
          <span>Sign In with Apple</span>
        </button>
        <p className="note">Terms of use &amp; Conditions</p>
      </form>
    </div>
  );
};

export default Signin;

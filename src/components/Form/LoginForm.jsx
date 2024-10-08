import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import icons from "../../sprite.svg";

import { useState } from "react";
import { login } from "../../utils/api";
import { useDispatch } from "react-redux";
import { addToken } from "../../../redux/auth/authSlice";
import { addName } from "../../../redux/user/userSlice";

export const LoginForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, actions) => {
    const response = await login(values);
    const { token, username } = response;

    dispatch(addToken(token));
    dispatch(addName(username));
    closeModal();
    actions.resetForm();
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
        message: "Email error",
        excludeEmptyString: true,
      })
      .required("Email is required"),
    password: Yup.string()
      .min(8, "At least 8 characters")
      .max(64, "No more than 64 characters")
      .matches(/^[a-zA-Z0-9!@#$%^&*]{8,64}/, {
        message: "Include Latin letters and numbers without spaces",
        excludeEmptyString: true,
      })
      .required("Password is required"),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <button type="button" onClick={closeModal}>
                <svg width="32px" height="32px">
                  <use href={`${icons}#icon-modal-cross`}></use>
                </svg>
              </button>
              <div>
                <p>Login</p>
              </div>
              <div>
                <div>
                  <ErrorMessage name="email" component="div" />
                  <Field name="email" placeholder=" " />
                  <label htmlFor="email">Email</label>
                </div>
                <div>
                  <ErrorMessage name="password" component="div" />
                  <Field
                    name="password"
                    placeholder=" "
                    type={showPassword ? "text" : "password"}
                  />
                  <label htmlFor="password">Password</label>

                  <div onClick={handlePasswordVisibility}>
                    {showPassword ? (
                      <svg width="20px" height="20px">
                        <use
                          stroke="gray"
                          fill="none"
                          href={`${icons}#icon-eye`}
                        />
                      </svg>
                    ) : (
                      <svg width="20px" height="20px">
                        <use fill="none" href={`${icons}#icon-eye-hiden`} />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <button type="submit">Login</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import icons from "../../sprite.svg";

import { useState } from "react";
import { register } from "../../utils/api";

export const RegistrationForm = ({ closeModal }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, actions) => {
    console.log(values);
    await register(values);
    // await updateProfile(auth.currentUser, { displayName: name });
    // dispatch(addToken(user.accessToken));
    closeModal();
    actions.resetForm();
  };

  const RegistrationSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Name is too short")
      .max(32, "Name is too long")
      .required("Name is required")
      .lowercase()
      .trim(),
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
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={RegistrationSchema}
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
                <p>Registration</p>
              </div>
              <div>
                <div>
                  <ErrorMessage name="username" component="div" />
                  <Field name="username" placeholder=" " />
                  <label htmlFor="username">Name</label>
                </div>
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
                <button type="submit">Register</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

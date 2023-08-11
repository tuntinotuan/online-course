import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useForm } from "react-hook-form";
import Strapi from "strapi-sdk-js";
import Input from "../components/input/Input";
import { handleTestReduxThunk } from "../redux-toolkit/counterSlice";

const strapi = new Strapi({
  url: "http://localhost:1337",
  prefix: "/api",
  store: {
    key: "strapi_jwt",
    useLocalStorage: false,
    cookieOptions: { path: "/" },
  },
  axiosOptions: {},
});

const courseUrl =
  "http://localhost:1337/api/courses?populate=video_lists.videos.Video";

const DemoPage = () => {
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.counter);
  console.log("course", course);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [data, setData] = useState();
  const [info, setInfo] = useState();
  const [token, setToken] = useState();
  console.log("info, token", info, token);
  useEffect(() => {
    // async function fetchCourse() {
    //   let results = [];
    //   try {
    //     const response = await axios.get(courseUrl);
    //     results = response.data.data;
    //     setData(results);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // fetchCourse();
    dispatch(handleTestReduxThunk());
  }, []);
  const handleLogin = async (values) => {
    console.log("values", values);

    try {
      const { user, jwt } = await strapi.login({
        identifier: values.email,
        password: values.password,
      });
      setInfo(user);
      setToken(jwt);
    } catch (error) {
      console.log(error.error.message);
    }
    // Async await
    // try {
    //   const response = await axios.post("http://localhost:1337/api/auth/local", {
    //     identifier: values.email,
    //     password: values.password,
    //   });
    //   console.log("response", response);
    //   const { user, jwt, error } = await response.then((result) => result.data);
    //   response && setInfo(user);
    //   response && setToken(jwt);
    // } catch (error) {
    //   console.log(error.response.data.error);
    // }
    // Promise
    // axios
    //   .post("http://localhost:1337/api/auth/local", {
    //     identifier: values.email,
    //     password: values.password,
    //   })
    //   .then((response) => {
    //     // Handle success.
    //     console.log("Well done!");
    //     console.log("Response", response);
    //     console.log("User profile", response.data.user);
    //     console.log("User token", response.data.jwt);
    //   })
    //   .catch((error) => {
    //     // Handle error.
    //     console.log("An error occurred:", error.response);
    //   });
  };
  const handleLogout = () => {
    strapi.logout();
    console.log("logout successfully!");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Input
          name="email"
          type="text"
          placeholder="email or username"
          control={control}
        />
        <Input
          control={control}
          name="password"
          type="text"
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
      <button
        onClick={handleLogout}
        className="p-3 rounded-md bg-gray-800 text-white font-semibold"
      >
        Logout
      </button>
      {/* {data &&
        data.map((item) => (
          <div>
            {item.attributes.title}
            <div>
              {item &&
                item.attributes.video_lists.data.map((item) => (
                  <div>
                    <p>{item.attributes.chapter}</p>
                    <div>
                      {item &&
                        item.attributes.videos.data.map((item) => (
                          <div>
                            {item &&
                              item.attributes.Video.data.map((item) => (
                                <>
                                  <video controls width="20%">
                                    <source
                                      src={`http://localhost:1337${item?.attributes.url}`}
                                      type="video/mp4"
                                    />
                                    Sorry, your browser doesn't support embedded
                                    videos.
                                  </video>
                                </>
                              ))}
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))} */}
    </div>
  );
};

export default DemoPage;

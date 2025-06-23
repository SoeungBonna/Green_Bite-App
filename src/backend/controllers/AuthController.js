import { v4 as uuid } from "uuid";
import { Response } from "miragejs";
import { formatDate } from "../utils/authUtils";
const sign = require("jwt-encode");

export const signupHandler = function (schema, request) {
  const { email, password, ...rest } = JSON.parse(request.requestBody);
  try {
    const foundUser = schema.users.findBy({ email });
    if (foundUser) {
      return new Response(422, {}, {
        errors: ["Email already exists."],
      });
    }

    const _id = uuid();
    const encodedToken = sign({ _id, email }, "secret123"); // use static secret

    const newUser = {
      _id,
      email,
      password,
      encodedToken, // Store it in DB!
      createdAt: formatDate(),
      updatedAt: formatDate(),
      ...rest,
      cart: [],
      wishlist: [],
      addressList: [],
    };

    const createdUser = schema.users.create(newUser);
    return new Response(201, {}, { createdUser, encodedToken });
  } catch (error) {
    return new Response(500, {}, { error: error.message });
  }
};


export const loginHandler = function (schema, request) {
  const { email, password } = JSON.parse(request.requestBody);
  try {
    const foundUser = schema.users.findBy({ email });

    if (!foundUser) {
      return new Response(404, {}, {
        errors: ["The email you entered is not registered."],
      });
    }

    if (password !== foundUser.password) {
      return new Response(401, {}, {
        errors: ["Incorrect password."],
      });
    }

    const encodedToken = foundUser.encodedToken || sign(
      { _id: foundUser._id, email },
      "secret123"
    );

    return new Response(200, {}, {
      foundUser: {
        ...foundUser.attrs,
        password: undefined, // Optional: hide password
      },
      encodedToken,
    });
  } catch (error) {
    console.error("Login failed:", error.message);
    return new Response(500, {}, { error: error.message });
  }
};


const baseURL = "http://localhost:5000";

export const loginRequest = (email, password) => {
  return fetch(baseURL + "/api/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

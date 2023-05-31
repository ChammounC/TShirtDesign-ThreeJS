
const config = {
  development: {
    backendUrl: "http://localhost:8080/api/v1/dalle",
  },
  production: {
    backendUrl: import.meta.env.VITE_URL,
  },
};

export default config;

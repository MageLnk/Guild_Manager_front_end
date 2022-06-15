const apiCall = async ({ url, method = "get", body, headers }) => {
  try {
    const response = await fetch(url, { method, body, headers });
    console.log("Viendo algo", body);
    return response.json();
  } catch (error) {
    Promise.reject(error);
  }
};

export default apiCall;

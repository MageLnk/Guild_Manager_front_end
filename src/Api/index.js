const apiCall = async ({ url, method = "get", body, headers }) => {
  try {
    const response = await fetch(url, { method, body, headers });
    console.log("Response??", response);
    const data = await response.json();
    console.log("Data??", data);
    return data;
  } catch (error) {
    //Promise.reject(error);
    console.log("Error dentro de la función apiCall", error);
  }
};

export default apiCall;

import axios from "axios";

const BASE_URL = "http://localhost:8000"; // Update this with your API base URL

class GrayAPI {
  static async request(endpoint, body = {}, method = "get") {
    console.debug("API Call:", endpoint, body, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    try {
      return (
        await axios({
          url: url,
          method: method,
          data: JSON.stringify(body),
          headers: headers,
          withCredentials: true,
        })
      ).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  // Auth routes
  static async sendLogin(data) {
    let res = await this.request(`login`, data, "post");
    return res;
  }
}

export default GrayAPI;

import axios, { AxiosResponse } from "axios";

export default function ApiUtil() {
  const _baseUrl: string = "http://localhost:8000/api";

  const setTokenInfo = (token: any): void => {
    localStorage.setItem("tokenInfo", JSON.stringify(token));
  };
  const _getTokenInfo = (): any => {
    const token = localStorage.getItem("tokenInfo");
    if (token) {
      return JSON.parse(token);
    } else {
      return false;
    }
  };

  const call = async (
    verb: string,
    api: string,
    param: object
  ): Promise<any> => {
    const token = _getTokenInfo();
    let url = _baseUrl + api;
    let response: AxiosResponse;

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    };

    try {
      switch (verb) {
        case "get":
          url += "?" + param;
          response = await axios.get(url);
          break;
        case "put":
          response = await axios.put(url, param, { headers });
          break;
        case "post":
          response = await axios.put(url, param, { headers });
          break;
        case "delete":
          response = await axios.put(url, param, { headers });
          break;
        default:
          throw Error(`Unsupported verb ${verb}`);
      }
    } catch (error) {
      throw Error("No internet connection");
    }
    return _responseHandler(response);
  };

  const _responseHandler = (res: AxiosResponse) => {
    switch (res.status) {
      case 200:
        return JSON.parse(res.data);
      case 400:
        return Error(`Bad request ${res.statusText}`);
      default:
        return Error(`Communication error ${res.statusText}`);
    }
  };
}

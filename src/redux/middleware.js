import axios from "axios";

function callApi({ url, data, method }) {
  let config = { method, url, headers: { "Content-type": "application/json" } };

  if (data) {
    config.data = data;
  }

  return axios(config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export const CALL_API = Symbol("Call API");

export default () => (next) => (action) => {
  const callAPI = action[CALL_API];

  if (typeof callAPI === "undefined") {
    return next(action);
  }

  let { url, data, method, types } = callAPI;

  const [requestType, successType, errorType] = types;
  let requestAction = { type: requestType };

  next(requestAction);

  return callApi({ url, data, method })
    .then(
      (response) => {
        let { isAxiosError, status, data, ...rest } = response;

        if (status >= 300 || isAxiosError) {
          next({ type: errorType, error: response });
        } else {
          next({
            data,
            type: successType,
            ...rest,
          });
        }
      },
      (error) => {
        next({ error, type: errorType });
      }
    )
    .catch(() => {});
};

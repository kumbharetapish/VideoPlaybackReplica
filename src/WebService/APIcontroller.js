import Axios from "axios";

export const getVideoList = async () => {
  let Data = await Axios.get(
    "https://5d76bf96515d1a0014085cf9.mockapi.io/playlist/"
  )

    .then(response => {
      return response.data;
    })
    .catch(err => {
      alert("Failed => " + err);
      return Promise.reject({ error: err });
    });

  return Promise.resolve( Data );
};

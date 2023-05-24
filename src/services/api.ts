import axios from "axios";
export const getDatas = () => {
  const link = "https://fakestoreapi.com/products/";
  return new Promise((resolve, reject) => {
    axios
      .get(link)
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// getDatas().then((res)=>{}).catch((error)=>{})

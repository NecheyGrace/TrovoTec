import React, { useState, useEffect } from "react";
import {
  IoPerson,
  IoTransgender,
  IoMail,
  IoAdd,
  IoOptionsOutline,
  IoNotifications,
  IoPersonCircleOutline,
  IoPersonCircle,
  IoPersonSharp,
  IoPersonOutline,
} from "react-icons/io5";
import Map from "./maps";

const Page = () => {
  const [data, setData] = useState([]);
  const [more, setMore] = useState(10);

  const showMore = () => {
    setMore((value) => value + 10);
  };

  const API = "https://random-data-api.com/api/users/random_user?size=100";
  const fetchData = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div className="bg-slate-100"></div>;
};

export default Page;

/* {Object.entries(item.address).map((key, i) => (
                <div>
                  <p>{key[0]}:</p>
                  {[key[1]].map((kzy) => (
                    <div>
                      <p>{kzy.lat}</p>
                      <p>{kzy.lng}</p>
                    </div>
                  ))}

                  {String(
                    key.filter(function (item) {
                      return item !== { coordinates };
                    })
                  )}
                </div>
                  ))} 
                */

import React from "react";
import { useEffect, useState } from "react";
import {
  IoPerson,
  IoMail,
  IoAdd,
  IoMenuSharp,
  IoTransgenderSharp,
} from "react-icons/io5";
import Map from "./maps";

const Main = () => {
  const [data, setData] = useState([]);
  const [mafia, setMafia] = useState([]);
  const [more, setMore] = useState(10);
  const [modal, setModal] = useState(false);

  const showMore = () => {
    setMore((value) => value + 10);
  };

  //const { render, moda } = useModal();
  const API = "https://random-data-api.com/api/users/random_user?size=100";
  const fetchData = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        //  console.log(res);
        setData(res);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const Modal = () => {
    return (
      <div>
        <button
          aria-label="close"
          className="ml-[90%] h-10 w-10 bg-slate-300 rounded-3xl shadow-md"
          onClick={() => setModal(false)}
        >
          <p className="font-[Pm] text-2xl text-slate-100 ">X</p>
        </button>
        <div className="h-76 w-[90%] items-center flex justify-center">
          <div>
            <div className="flex gap-16">
              {[mafia.address].map((address) => {
                return (
                  <div>
                    {[address.coordinates].map((coordinates) => {
                      return (
                        <div>
                          <Map lng={coordinates.lng} lat={coordinates.lat} />
                        </div>
                      );
                    })}
                  </div>
                );
              })}
              <div>
                <img
                  src={mafia.avatar}
                  className="w-32 h-32 rounded-full shadow-lg bg-slate-200"
                />
                <p className="text-[Pl] text-xl cursor-auto">
                  {mafia.first_name} {mafia.last_name}
                </p>
                <div className="flex font-[pl] text-sm mt-2 justify-between">
                  <div className="flex items-center ">
                    <IoPerson className="mr-1 text-amber-500" />
                    <p className="cursor-auto">{mafia.username}</p>
                  </div>
                  <div className="flex items-center ">
                    <IoTransgenderSharp className="mr-4 text-amber-500" />
                    <p className="cursor-auto">{mafia.gender}</p>
                  </div>
                </div>
                <div className="flex items-center mt-1">
                  <IoMail className="mr-1 text-amber-500" />
                  <p className="font-[Pl] text-sm cursor-auto">{mafia.email}</p>
                </div>
                <div className="font-[Pl] text-sm">
                  <p>DOB: {mafia.date_of_birth}</p>
                  <p>Phone no: {mafia.phone_number}</p>
                  <p>S.I number: {mafia.social_insurance_number}</p>
                  <p>{mafia.password}</p>
                </div>
                {[mafia.employment].map((employment) => {
                  return (
                    <div className="font-[Pl] text-sm">
                      <p>Job: {employment.title}</p>
                      <p>Skill: {employment.key_skill}</p>
                    </div>
                  );
                })}
                {[mafia.subscription].map((subscription) => {
                  return (
                    <div className="font-[Pl] text-sm">
                      <p>Plan: {subscription.plan}</p>
                      <p>Status: {subscription.status}</p>
                      <p>Payment_method: {subscription.payment_method}</p>
                      <p>Term: {subscription.term}</p>
                    </div>
                  );
                })}
                {[mafia.address].map((address) => {
                  return (
                    <div className="font-[Pl] text-sm">
                      <p>Street: {address.street_name}</p>
                      <p>Address: {address.street_address}</p>
                      <p>City: {address.city}</p>
                      <p>Zip Code: {address.zip_code}</p>
                      <p>State: {address.state}</p>
                      <p>Country: {address.country}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  };

  return (
    <div className="px-20 pt-8 bg-slate-100">
      {!modal ? (
        <div>
          <div className="flex items-center justify-between">
            <p className="font-[Pm] text-lg">Users Details</p>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 transition-all cursor-pointer group hover:bg-slate-300 rounded-3xl bg-amber-500">
                <IoAdd
                  size={24}
                  className="text-white group-hover:text-amber-500"
                />
              </div>
              <div className="flex items-center p-1 ml-5 rounded-md cursor-pointer bg-slate-300">
                <IoMenuSharp size={20} className="mr-1 text-white" />
                <p className="font-[Pl] text-white">Filter</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-4 gap-[34px]">
              {data.slice(0, more).map((single, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      setModal(true);
                      setMafia(single);
                    }}
                    className=" cursor-pointer h-[270px] hover:opacity-70 bg-white w-[280px] -ml-2 rounded-2xl p-5"
                  >
                    <div className="flex justify-center">
                      <img
                        src={single.avatar}
                        className="w-32 h-32 rounded-full shadow-lg bg-slate-200"
                      />
                    </div>
                    <div className="flex justify-center mt-4">
                      <p className="text-[Pl] text-xl cursor-auto">
                        {single.first_name} {single.last_name}
                      </p>
                    </div>
                    <div className="flex font-[pl] text-sm mt-2 justify-between">
                      <div className="flex items-center ">
                        <IoPerson className="mr-1 text-amber-500" />
                        <p className="cursor-auto">{single.username}</p>
                      </div>
                      <div className="flex items-center ">
                        <IoTransgenderSharp className="mr-1 text-amber-500" />
                        <p className="cursor-auto">{single.gender}</p>
                      </div>
                    </div>
                    <div className="flex items-center mt-1">
                      <IoMail className="mr-1 text-amber-500" />
                      <p className="font-[Pl] text-sm cursor-auto">
                        {single.email}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="pl-[90%] pb-4 mt-5">
            <button
              onClick={showMore}
              className="p-2 rounded-md shadow-md bg-slate-200"
            >
              <p className="font-[Pl] text-black/80">Load More</p>
            </button>
          </div>
        </div>
      ) : (
        <Modal />
      )}
    </div>
  );
};

export default Main;

"use client";
import React from "react";
import { useState , useEffect} from "react";

const StateDemo = () => {
  const [step, setStep] = useState(1);
  const [isDivVisible, setDivVisible] = useState(true);
  const [hidebutton, showbutton] = useState(true);
  const message: string[] = [
    "React Introduction",
    "Describing UI",
    "Managing State",
  ];

  const handleToggleDiv = () => {
    setDivVisible(!isDivVisible);
    if(step == 1){
      showbutton(!hidebutton)
      }
      else{
        showbutton(hidebutton);
      }
  };

 

  useEffect(() => {

    if (hidebutton) {
      showbutton(!hidebutton);
    } else {
      showbutton(hidebutton);
    }
  

}, [true]);

  return (
    <div>
      <div className="bg-gray-200 w-1/2 h-80 ml-60 mt-10 rounded-md">
        <div className="flex justify-between pt-5 mx-10  ">
          <button className="bg-purple-400 rounded-full " onClick={handleToggleDiv}>
            {isDivVisible ? "Hide" : "Show"} Div
          </button>
        </div>

        {isDivVisible && (
          <>
            <div className="flex justify-between pt-5 mx-10">
              <div
                className={`${
                  step >= 1 ? "bg-purple-400" : "bg-gray-300"
                }   border rounded-full  w-8 h-8 pt-1 text-center`}
              >
                1
              </div>
              <div
                className={`${
                  step >= 2 ? "bg-purple-400" : "bg-gray-300"
                }   border rounded-full  w-8 h-8 pt-1 text-center`}
              >
                2
              </div>
              <div
                className={`${
                  step >= 3 ? "bg-purple-400" : "bg-gray-300"
                }   border rounded-full  w-8 h-8 pt-1 text-center`}
              >
                3
              </div>
            </div>
            <p className="text-center mt-20">{message[step - 1]}</p>
            <div className="flex justify-between mx-10 mt-20">
              {hidebutton &&(
              <button
                className="bg-purple-400 rounded-md p-2"
                onClick={() => (step > 1 ? setStep(step - 1) : "")}

              >
                Previous
              </button>
              )}
              <button
                className="bg-purple-400 rounded-md p-2"
                onClick={() => (step < 3 ? setStep(step + 1) : "") }
              >
                Next Step
              </button>

      
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StateDemo;

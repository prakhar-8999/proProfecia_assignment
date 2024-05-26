"use client";
import useCounter from "@/store/useCounter";
import {useState} from "react";

export default function Home() {
  const [input, setInput] = useState<number | undefined>();
  const {count, incrementCount, decrementCount} = useCounter();
  return (
    <>
      <div className="flex justify-center items-center h-[90vh]">
        <div className="flex-col">
          <div className="mb-10">
            <input
              type="number"
              value={input}
              onChange={(e) => {
                console.log(e.target.value);
                console.log(Number(e.target.value));

                setInput(
                  Number(e.target.value) == 0
                    ? undefined
                    : Number(e.target.value)
                );
              }}
              id="number-input"
              aria-describedby="helper-text-explanation"
              placeholder="Enter Count Number"
              className="bg-gray-50 border  text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div className="flex gap-x-10">
            <button
              type="button"
              onClick={() => decrementCount(input)}
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              -
            </button>
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Count is {count}
            </button>
            <button
              type="button"
              onClick={() => incrementCount(input)}
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

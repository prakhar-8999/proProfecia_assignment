import {useEffect, useState} from "react";

const useCounter = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const cookie = document.cookie
      .split(";")
      .reduce(
        (ac, cv, i) =>
          Object.assign(ac, {[cv.split("=")[0]]: cv.split("=")[1]}),
        {" count": false}
      );
    setCount(Number(cookie[" count"]) ?? 0);
  }, []);

  const incrementCount = (value?: number) => {
    setCount((prev) => {
      prev = value ? prev + value : prev + 1;
      document.cookie = `count=${prev}; SameSite=None; Secure`;
      return prev;
    });
  };
  const decrementCount = (value?: number) =>
    setCount((prev) => {
      prev = value ? prev - value : prev - 1;
      document.cookie = `count=${prev}; SameSite=None; Secure`;
      return prev;
    });

  return {count, incrementCount, decrementCount};
};

export default useCounter;

import {useEffect, useState} from "react";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const cookie = document.cookie
      .split(";")
      .reduce(
        (ac, cv, i) =>
          Object.assign(ac, {[cv.split("=")[0]]: cv.split("=")[1]}),
        {" isDark": "dark"}
      );
    console.log(cookie[" isDark"]);

    setIsDark(cookie[" isDark"] === "dark");
  }, []);

  useEffect(() => {
    isDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDark]);

  const onChangeTheme = (value: boolean) => {
    console.log(value);

    setIsDark(value);
    document.cookie = `isDark=${
      value ? "dark" : "light"
    }; SameSite=None; Secure`;
  };

  const ToggleSwitch = () => (
    <label className="inline-flex items-center me-5 cursor-pointer">
      <input
        type="checkbox"
        checked={isDark}
        className="sr-only peer"
        onChange={(e) => onChangeTheme(e.target.checked)}
      />
      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-400">
        {isDark ? "Enable Light Mode" : "Enable Dark Mode"}
      </span>
    </label>
  );
  return {ToggleSwitch};
};

export {useDarkMode};

import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`${className} xl:max-w-324 mx-auto container px-3 xl:px-0 sm:px-2`}
    >
      {children}
    </div>
  );
};

export default Container;

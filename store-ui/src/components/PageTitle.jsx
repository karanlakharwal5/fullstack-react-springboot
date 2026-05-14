import React from "react";

export default function PageTitle({ title }) {
  return (
    <h1 className="text-3xl text-primary dark:text-light font-primary text-center font-extrabold mt-4 py-2">{title}</h1>
  );
}

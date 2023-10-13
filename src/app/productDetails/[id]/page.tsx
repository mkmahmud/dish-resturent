"use client";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams();

  return <div>This is the ID {id}</div>;
};

export default page;

"use client";

const FooterMenus = ({ head, children }: any) => {
  return (
    <div className="my-10 ">
      <h1 className="uppercase text-[18px] text-red font-bold my-4 text-left">{head}</h1>
      {children}
    </div>
  );
};

export default FooterMenus;

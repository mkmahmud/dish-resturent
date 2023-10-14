interface IProps {
  label: string;
  type: string;
  name: string;
}

const Input = ({ label, type, name }: IProps) => {
  return (
    <div className="my-10 relative group">
      <span className=" px-4 bg-red border text-[16px] absolute -top-4  ml-4 group-hover:bg-black">
        {label}
      </span>
      <input
        type={type}
        className="w-full  border-2 border-white bg-transparent  text-[18px] px-4 pt-4 pb-2 outline-none"
        name={name}
        id=""
      />
    </div>
  );
};

export default Input;

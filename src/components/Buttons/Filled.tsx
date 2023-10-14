import { LoginOutlined } from "@ant-design/icons";
const FilledButton = ({ content, bg, color }: any) => {
  return (
    <button
      className={`bg-${bg} px-4 py-2 text-[18px] font-bold text-${color} rounded-full flex items-center`}
    >
      {" "}
      <span className="px-2">{content}</span> 
    </button>
  );
};

export default FilledButton;

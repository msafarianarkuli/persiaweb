import { FaUser } from "react-icons/fa";

function ActionCard({ Icon, title, onClick }) {
  return (
    <button
      className='flex items-center bg-red-300 h-[50px] w-[200px] rounded text-white group'
      onClick={onClick}>
      <div className='h-full bg-[#320495] w-[50px] rounded-r flex items-center justify-center group-hover:bg-[#2950C1] custom-transition'>
        <Icon className='text-xl' />
      </div>
      <div className='bg-[#2950C1] h-full w-[150px] rounded-l flex items-center justify-center group-hover:bg-black custom-transition'>
        {title}
      </div>
    </button>
  );
}

export default ActionCard;

import { MoveDown, MoveUp } from 'lucide-react'

const Indexratediv = ({key,name,percentage,ltp}) => {
    function isNegative(num) {
        return num < 0;
      }
  return (
    <div key={key} className="px-2 w-[50%]  sm:w-auto rounded-sm text-white text-sm font-inter">
    <p className="text-sm bg-transparent lg:text-base text-start font-inter border-b border-white text-white font-thin pointer-events-none">
      {name}
    </p>
    <div className="flex gap-1 items-center">
      <div className="flex rounded-sm items-center">
        <span className="mr-1">₹</span>
        <p className={`md:text-lg leading-7 lg:w-[6vw] font-bold ${isNegative(percentage) ? "text-red-500" : "text-green-500"}`}>{ltp}</p>
        </div>
      <h3 className={`flex  text-xs font-thin ${isNegative(percentage) ? "text-red-500" : "text-green-500"}`}>
        ({percentage})%
        {isNegative(percentage)?<MoveDown color="red"/>:<MoveUp color="green"/>}
        
      </h3>
    </div>
  </div>
  )
}

export default Indexratediv
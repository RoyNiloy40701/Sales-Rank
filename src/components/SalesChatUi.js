import Realtime from './chatBot/Realtime';
import AllButton from './chatBot/AllButton';
import ChatBox from './chatBot/ChatBox';

const SalesChatUi = () => {

  return (
    <div className=" bg-blue-900 flex flex-col items-center  justify-center mt-28 sm:mt-20 md:mt-18" >
      <div className=" max-w-7xl mx-auto flex-1 p-6 my-8">
        <div className="text-white mb-4">
          <p className="text-2xl font-normal">Live AI Coach</p>
          <h1 className="text-2xl md:text-4xl font-normal mt-2">Take a Suggestion Coaching</h1>
        </div>
        <div className='flex flex-col  md:flex-row  gap-4 my-8'>
          <ChatBox />
          <AllButton />
          <Realtime />
        </div>
      </div>
    </div>


  );
}

export default SalesChatUi

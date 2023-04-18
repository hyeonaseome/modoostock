function Bank(): JSX.Element {
  return (
    <>
      <div className="flex items-center justify-center w-full mx-auto border-4 ">
        {/* 1. 예금 */}
        <div className="flex flex-col w-1/3 min-w-[33%] md:w-1/4 md:min-w-[25%] lg:min-w-[20%] lg:w-1/5 mx-2 text-center border-2 rounded-[2rem] bg-[#FFF2CC]/60 border-[#F0A633]/60">
          <div className="py-5">
            <span className="font-extrabold text-[1.7rem] text-[#F0A633] ">
              예금
            </span>
          </div>
          <div className="font-medium leading-5 text-[#707070] text-[0.9rem]">
            <span>6시간마다 1%의</span> <br />
            <span>이자를 받을 수 있어요.</span>
          </div>
          <div className="py-10 mx-auto">
            <img
              className="object-contain w-[6rem] h-[6rem]"
              src="/money1.png"
              alt=""
            />
          </div>
          <div className="pb-7">
            <div className="px-4 py-1 mx-auto font-extrabold text-white rounded-3xl w-[60%] bg-[#FFC24E]/60 text-[1.1rem]">
              예금 하기
            </div>
          </div>
        </div>
        {/* 2. 출금 */}
        <div className="flex flex-col w-1/3 min-w-[33%] md:w-1/4 md:min-w-[25%] lg:min-w-[20%] lg:w-1/5 mx-2 text-center border-2 rounded-[2rem] bg-[#FFDCA9]/60 border-[#FD9653]/60">
          <div className="py-5">
            <span className="font-extrabold text-[1.7rem] text-[#F0A633] ">
              출금
            </span>
          </div>
          <div className="font-medium leading-5 text-[#707070] text-[0.9rem]">
            <span>통장에 있는 </span> <br />
            <span>돈을 뺄 수 있습니다.</span>
          </div>
          <div className="py-10 mx-auto">
            <img
              className="object-contain w-[6rem] h-[6rem]"
              src="/money2.png"
              alt=""
            />
          </div>
          <div className="pb-7">
            <div className="px-4 py-1 mx-auto font-extrabold text-white rounded-3xl w-[60%] bg-[#FB8B2F] text-[1.1rem]">
              출금 하기
            </div>
          </div>
        </div>
        {/* 송금 */}
        <div className="flex flex-col w-1/3 min-w-[33%] md:w-1/4 md:min-w-[25%] lg:min-w-[20%] lg:w-1/5 mx-2 text-center border-2 rounded-[2rem] bg-[#D7E9F7]/60 border-[#748DA6]/60">
          <div className="py-5">
            <span className="font-extrabold text-[1.7rem] text-[#F0A633] ">
              송금
            </span>
          </div>
          <div className="font-medium leading-5 text-[#707070] text-[0.9rem]">
            <span>다른 사용자에게</span> <br />
            <span>돈을 보낼 수 있습니다.</span>
          </div>
          <div className="py-10 mx-auto">
            <img
              className="object-contain w-[6rem] h-[6rem]"
              src="/money3.png"
              alt=""
            />
          </div>
          <div className="pb-7">
            <div className="px-4 py-1 mx-auto font-extrabold text-white rounded-3xl w-[60%] bg-[#2C94EA] text-[1.1rem]">
              송금 하기
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 pb-5 pr-20 font-semibold text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] text-[#8D8D8D]">
        <span> 총 예금 금액 </span>
        <span className="font-black text-[#3F3F3F] text-[1.6rem] md:text-[1.8rem] lg:text-[2rem]">
          999,999,999,999
        </span>
        <span> 원</span>
      </div>
    </>
  );
}
export default Bank;

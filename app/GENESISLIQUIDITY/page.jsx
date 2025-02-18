import Link from "next/link"

const GENESISLIQUIDITY = () => {
  return (
     <div className="flex flex-col lg:flex-row items-center lg:items-start justify-normal 2xl:justify-between gap-16 text-white mt-12 mb-28">
      <div className="w-full 2xl:w-[67%]">
        <div className="flex items-end flex-wrap gap-10">
          <h5 className="text-[46px] leading-none">
          SPXDAO<span className="text-xl translate-x-[10px] -translate-y-[24px] inline-block ">(SPX)</span>
          </h5>
          <p className="text-[11px] 2xl:text-xl">Market cap: Premarket</p>
          <p className="text-[11px] 2xl:text-xl">
            CA: NAN
          </p>
        </div>

        <div className=" 2xl:h-[850px] overflow-hidden mt-2 flex items-center justify-center premarket_chart">
          <div
            className="tradingview-widget-container ">
           
            <h2 className=" text-[fff] text-[46px]">premarket</h2>
          
          </div>
        </div>
        <div className="flex gap-x-6 md:gap-x-11 gap-y-2 md:gap-y-4 flex-wrap mt-6">
          <div className="text-lg md:text-[32px] leading-5 md:leading-9">
            <p className="text-[#949494]">Premarket Apy </p>
            <p>40,015.9%</p>
          </div>
          <div className="text-lg md:text-[32px] leading-5 md:leading-9">
            <p className="text-[#949494]">Total Value Contributed</p>
            <p>$27.5k</p>
          </div>
          <div className="text-lg md:text-[32px] leading-5 md:leading-9">
            <p className="text-[#949494]">Time Left</p>
            <p>2h 30M</p>
          </div>
          {/* <div className="text-lg md:text-[32px] leading-5 md:leading-9">
            <p className="text-[#949494]"></p>
            <p>5 days</p>
                  </div>
                    <div className="text-lg md:text-[32px] leading-5 md:leading-9">
            <p className="text-[#949494]"></p>
            <p>5 days</p>
          </div> */}
        </div>
      </div>
      <div className="w-full md:w-[496px] 2xl:w-[32%]">
     

        <div  className="border p-3 2xl:p-8 rounded-[6px] bg-[#0D0E17]">
          <div className="flex items-center gap-2 ">
            <img src="/images/star2.png" className="w-[15px]" alt="" />
            <h3 className="text-[13px] text-[#fff]">Genesis Liquidity</h3>
            
          </div>
          <h3 className="text-white text-[15px] font-[400] mt-[11px]">SPXDAO <span className='text-[#FF1DE8]'>is launching $SPX</span></h3>
          <h3 className="text-white text-[15px] font-[400] mt-[11px]">
            <span className='text-[#03F0FF]'>Farm $SPX tokens early</span> by committing ETH or other assets to their treasury pre-market. These assets back the value of their new coin.
          </h3>

          <div className="relative mt-[11px] mb-[33px]">
            <label htmlFor="" className="text-white text-[15px] font-[400]">How much ETH would you like to contribute?</label>
            <br />
            <input
              className="w-[35%] bg-transparent h-[2.6rem]  border rounded-[6px] pl-2 pr-16 text-base 2xl:text-2xl mt-[11px]"
              type="text"
              name=""
              id=""
              defaultValue={""}
            />
            
          </div>
           <div className="relative mt-[11px]">
            <label htmlFor="" className="text-white text-[15px] font-[400]">  How much DAI would you like to contribute?</label>
            <br />
            <input
              className="w-[35%] bg-transparent h-[2.6rem]  border rounded-[6px] pl-2 pr-16 text-base 2xl:text-2xl mt-[11px]"
              type="text"
              name=""
              id=""
              defaultValue={""}
            />
            
          </div>
          <h3 className="text-white text-[15px] font-[400] mt-[11px]">
            In exchange for your assets, <span className='text-[#FF1DE8]'>you’ll earn $SPX</span> at a rate of 240,411% for the next 3 hours. The maximum each participant can farm is 2% of supply
            <br />
           
            <span className="text-white text-[13px] font-[400] mt-[11px]">Juice takes 1% of genesis pool contributions to help keep the lights on.</span>
          </h3>
         

        
          <div className="text-center mt-[30px]">
             <Link href={'/'} className="text-center text-white text-[20px] font-[700]">
            [ contribute]
          </Link>
         </div>
        </div>

      

        <div className="flex items-center gap-5 mt-12">
          <img src="/images/image1.png" alt="" />
          <div className="text-sm 2xl:text-2xl">
            <p className="mb-2">about</p>
            <p>
              Welcome to the S&P6900, an advanced blockchain cryptography token with limitless possibilities and scientific utilization.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GENESISLIQUIDITY
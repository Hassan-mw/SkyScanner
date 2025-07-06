'use client';

import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { Jost } from 'next/font/google';
import { TbSTurnDown } from 'react-icons/tb';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';

import CustomDatePicker from '../../Components_Custom/CustomDatePicker';
import PlanesearchPlane from '../../Components_Custom/PlaneSearchBarPlace';
import PlanePerson from '../../Components_Custom/PlanePerson';
import { fetchAllFlightData } from '@/app/API/flightApi';
import { DataContext } from '@/app/ContextApi/ContextApi';

const jost = Jost({
  weight: ['400'],
  subsets: ['latin'],
});

const FightSearchBarLargeScreens = () => {
  const [startPlace, setStartPlace] = useState('Pakistan');
  const [endPlace, setEndPlace] = useState('Saudi Arabia');
  const [departDate, setDepartDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [adult, setAdult] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState('Economy');
  const [totalTraveller, setTotalTraveller] = useState<number>(0);

  const { flightData, setFlightData } = useContext(DataContext);

  useEffect(() => {
    setTotalTraveller(adult + children);
  }, [adult, children]);

  const handleClickButton = async () => {
    const startDate = departDate?.toLocaleDateString() || '01/09/2025';
    const endDate = returnDate?.toLocaleDateString() || '15/09/2025';

    if (startPlace && endPlace && totalTraveller && roomType) {
      const data = await fetchAllFlightData({
        startPlace,
        endPlace,
        startDate,
        endDate,
        totaltraveller: totalTraveller,
        roomType,
      });
      console.log(data,'++++++++++')
      if (data) {
        localStorage.setItem('flightData', JSON.stringify(data.data));
        redirect(`/flights/${startPlace}-${endPlace}`);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-w-full">
      <div className="relative h-[350px] 2xl:h-[550px] w-full">
        <Image
          className="hidden 2xl:block object-cover w-[100vw]"
          fill
          src="/large_screen_bg_image.webp"
          alt="large_screen_bg_image"
        />

        {/* Overlay content */}
        <div className="absolute h-full w-full top-0 left-0 flex items-center justify-center">
          <div className="bg-[#05203c] 2xl:p-6 2xl:rounded-lg flex flex-col items-center justify-center gap-y-[3px] xl:gap-y-4 w-full px-5 pb-5 max-w-screen-xl space-y-3">
            
            {/* Header */}
            <div className="w-full flex flex-col items-start">
              <h1
                className={`${jost.className} pb-12 text-3xl text-white 2xl:hidden`}
                style={{ fontWeight: 700 }}
              >
                Millions of cheap flights. One simple search.
              </h1>
              <div className="flex items-center justify-start gap-x-3 text-white">
                <TbSTurnDown />
                <h2 className="font-semibold text-md">Create a multi-city route</h2>
              </div>
            </div>

            {/* Search Menubar */}
            <Menubar className="w-full bg-[#05203c] h-20 grid grid-cols-6 border-[#05203c]">
              {/* Start Place */}
              <MenubarMenu>
                <MenubarTrigger className="w-full relative h-full bg-white col-span-1 rounded-none rounded-l-md p-0">
                  <div className="flex flex-col items-start py-3 px-4 justify-start w-full">
                    <span className="text-gray-800 font-semibold text-sm">From</span>
                    <div className="text-slate-800 truncate pr-1 max-w-full">
                      <span>{startPlace || 'Anywhere'}</span>
                    </div>
                  </div>
                  <div className="absolute -right-[22px] top-[14px] bg-white border-[#05203c] size-10 flex border-[3px] items-center justify-center rounded-full">
                    <FaArrowRightArrowLeft />
                  </div>
                </MenubarTrigger>
                <MenubarContent>
                  <PlanesearchPlane value={startPlace} setValue={setStartPlace} />
                </MenubarContent>
              </MenubarMenu>

              {/* End Place */}
              <MenubarMenu>
                <MenubarTrigger className="w-full h-full bg-white col-span-1 rounded-none pl-5">
                  <div className="flex flex-col items-start py-3 px-4 justify-start w-full">
                    <span className="text-gray-800 font-semibold text-sm">To</span>
                    <div className="text-slate-800 truncate pr-1 max-w-full">
                      <span>{endPlace || 'Anywhere'}</span>
                    </div>
                  </div>
                </MenubarTrigger>
                <MenubarContent>
                  <PlanesearchPlane value={endPlace} setValue={setEndPlace} />
                </MenubarContent>
              </MenubarMenu>

              {/* Depart Date */}
              <MenubarMenu>
                <MenubarTrigger className="w-full h-full bg-white col-span-1 rounded-none pl-5">
                  <div className="w-full flex flex-col items-start p-3 bg-white gap-1">
                    <div className="text-sm text-gray-800">Depart</div>
                    <div className="text-black truncate">
                      {departDate ? departDate.toLocaleDateString() : '01/09/2025'}
                    </div>
                  </div>
                </MenubarTrigger>
                <MenubarContent>
                  <CustomDatePicker date={departDate} setDateSelect={setDepartDate} />
                </MenubarContent>
              </MenubarMenu>

              {/* Return Date */}
              <MenubarMenu>
                <MenubarTrigger className="w-full h-full bg-white col-span-1 rounded-none pl-5">
                  <div className="w-full flex flex-col items-start p-3 bg-white gap-1">
                    <div className="text-sm text-gray-800">Return</div>
                    <div className="text-black truncate">
                      {returnDate ? returnDate.toLocaleDateString() : '15/09/2025'}
                    </div>
                  </div>
                </MenubarTrigger>
                <MenubarContent>
                  <CustomDatePicker date={returnDate} setDateSelect={setReturnDate} />
                </MenubarContent>
              </MenubarMenu>

              {/* Person */}
              <MenubarMenu>
                <MenubarTrigger className="w-full h-full bg-white col-span-1 rounded-none rounded-r-xl p-0">
                  <div className="flex flex-col items-start py-3 px-4 justify-start w-full">
                    <span className="text-gray-800 font-semibold text-sm">Person</span>
                    <div className="text-slate-800 truncate pr-1 max-w-full">
                      <span>
                        {`${totalTraveller} ${totalTraveller > 1 ? 'travellers' : 'traveller'}, ${roomType}`}
                      </span>
                    </div>
                  </div>
                </MenubarTrigger>
                <MenubarContent>
                  <PlanePerson
                    adult={adult}
                    setAdult={setAdult}
                    children={children}
                    setChildren={setChildren}
                    roomType={roomType}
                    setRoomType={setRoomType}
                  />
                </MenubarContent>
              </MenubarMenu>

              {/* Search Button */}
              <div onClick={handleClickButton} className="w-full flex items-center justify-center h-full rounded-xl">
                <div className="w-full ml-3 max-w-[80%] h-full 2xl:max-w-full rounded-xl flex items-center justify-center text-white font-semibold bg-blue-600 duration-700 hover:bg-blue-700">
                  <h2 className={`${jost.className} text-sm`}>Search</h2>
                </div>
              </div>
            </Menubar>

            {/* Popular Filters */}
            <div className="w-full flex items-start justify-start">
              <div className="w-full max-w-xl justify-start grid grid-cols-4">
                <h2 className={`${jost.className} text-white text-md`}>Popular filters:</h2>

                <div className="flex items-center justify-center text-white gap-x-2">
                  <input className="size-[15px]" type="checkbox" />
                  <p className={`${jost.className} text-md`}>Free cancelation</p>
                </div>

                <div className="flex items-center justify-center text-white gap-x-2">
                  <input className="size-[15px]" type="checkbox" />
                  <p className={`${jost.className} text-md`}>4 stars</p>
                </div>

                <div className="flex items-center justify-center text-white gap-x-2">
                  <input className="size-[15px]" type="checkbox" />
                  <p className={`${jost.className} text-md`}>5 stars</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FightSearchBarLargeScreens;

'use client'
import { differenceInDays, setYear } from "date-fns";
import Image from "next/image";
import { useState } from "react";
import DatePicker from 'react-datepicker'

export default function Home() {
  const today = new Date();

  const getEventDate = (month: number, day: number) => {
    let eventDate = new Date(today.getFullYear(), month - 1, day)

    if (eventDate < today) {
      eventDate = setYear(eventDate, today.getFullYear() + 1);
    }

    return eventDate;
  };

  const comemorative_dates = [
    { nome: "ano novo", data: getEventDate(1, 1) },
    { nome: "natal", data: getEventDate(12, 25) },
    { nome: "páscoa", data: getEventDate(4, 20) },
    { nome: "são joão", data: getEventDate(6, 24) },
    { nome: "carnaval", data: getEventDate(2, 17) },
  ]

  const [curretIndex, setCurretIndex] = useState(0)
  const selectedEvent = comemorative_dates[curretIndex];
  const daysRemaining = differenceInDays(selectedEvent.data, today);
 
  return (
    <main>
      <section className="w-screen h-[300px] rounded-b-[100px] dark:bg-zinc-300 bg-zinc-900 dark:text-zinc-900 flex flex-col justify-center items-center">
        <div className="relative w-full flex flex-col items-center">
          <div className="relative w-full flex justify-around shadow-lg items-center py-3 rounded-2xl font-serif font-bold dark:text-black text-white border-b border-zinc-700">
            {comemorative_dates.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurretIndex(index)}
                className={`relative py-1 rounded-2xl cursor-pointer`}
              >
                {item.nome}
              </button>
            ))}
          </div>

          <div
            className="absolute w-4 h-4 rounded-full transition-all duration-300 dark:bg-zinc-900 bg-zinc-50"
            style={{
              top: "85%",
              left: `calc(${curretIndex} * 20% + 9%)`,
            }}
          ></div>
        </div>

        <div className="flex flex-col mt-12 -space-y-8 max-sm:-space-y-7 select-none dark:text-black text-white">
          <span>faltam</span>
          <h1 className="text-[60px] sm:text-[80px] font-black font-serif">
            {daysRemaining} dias
          </h1>
          <span className="text-end">para {comemorative_dates[curretIndex].nome === 'páscoa' ? 'a' : 'o'} {comemorative_dates[curretIndex].nome}</span>
        </div>
      </section>
    </main>
  );
}

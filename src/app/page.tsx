'use client'
import { Calendar } from "@/components/ui/calendar";
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
  const hollydaysRemaining = differenceInDays(selectedEvent.data, today) + 1

  const [startDate, setStartDate] = useState<Date | any>(today);
  const [endDate, setEndDate] = useState<Date | any>(comemorative_dates[curretIndex].data)
  const daysRemaining = startDate && endDate ? differenceInDays(endDate, startDate) : 0

  return (
    <main className="flex flex-col items-center">
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
            {hollydaysRemaining} dias
          </h1>
          <span className="text-end">para {comemorative_dates[curretIndex].nome === 'páscoa' ? 'a' : 'o'} {comemorative_dates[curretIndex].nome}</span>
        </div>
      </section>

      <section className="md:mt-12 p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-lg md:w-[700px] w-full md:border border-zinc-200 dark:border-zinc-700">
        <div className="flex items-center justify-center md:gap-[70px] gap-[20px] max-sm:flex-col">
          <div className="relative">
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Data de início</label>
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={setStartDate}
              className="w-full px-4 py-2 rounded-md border-2 border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
            />
            <span className="absolute right-3 top-[38px] text-zinc-400 dark:text-zinc-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Data final</label>
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={setEndDate}
              className="w-full px-4 py-2 rounded-md border-2 border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
            />
            <span className="absolute right-3 top-[38px] text-zinc-400 dark:text-zinc-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg text-center">
          <p className="text-sm text-blue-700 dark:text-blue-200 font-medium">Diferença de</p>
          <p className="text-3xl font-bold text-blue-800 dark:text-blue-100 mt-1">{daysRemaining} dias</p>
        </div>
      </section>
    </main>
  );
}

'use client'
import { differenceInDays, format } from "date-fns";
import Image from "next/image";
import { useState } from "react";
import DatePicker from 'react-datepicker'

export default function Home() {
  return (
    <main>
      <section className="w-screen h-[300px] rounded-b-[100px] dark:bg-zinc-300 bg-zinc-900 dark:text-zinc-900 flex flex-col justify-center items-center">
        <div className="absolute top-3 w-[98%] flex justify-around shadow-lg items-center py-3 rounded-2xl font-serif font-bold dark:text-black text-white border-b border-zinc-700">
          <button className="hover:-translate-y-2 transition-all duration-300">ano novo</button>
          <button className="hover:-translate-y-2 transition-all duration-300">natal</button>
          <button className="hover:-translate-y-2 transition-all duration-300">páscoa</button>
          <button className="hover:-translate-y-2 transition-all duration-300">são joão</button>
          <button className="hover:-translate-y-2 transition-all duration-300">carnaval</button>
        </div>
        <div className="flex flex-col -space-y-8 max-sm:-space-y-7 select-none dark:text-black text-white">
          <span>faltam</span>
          <h1 className="text-[60px] sm:text-[80px] font-black font-serif">
            365 dias
          </h1>
          <span className="text-end">para o ano novo</span>
        </div>
      </section>

      <div className="relative">
        
      </div>
    </main>
  );
}

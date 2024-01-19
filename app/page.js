"use client";
import Image from "next/image";
import React from "react";
import Calendar from "@/components/Calender";
import Navbar from "@/components/Navbar";
import Widget from "@/components/Widget";
import DateAndArea from "@/components/DateAndArea";
import TodoList from "@/components/TodoList";
export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-gray-100 ">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Left Section */}
        <div className="lg:w-1/3 flex flex-col border-2 border-black bg-white p-4">
          <DateAndArea />
          <Widget />
        </div>

        {/* Right Section */}
        <div className="lg:flex-grow w-full lg:w-2/3 border-2 border-black bg-white p-4 h-full">
          <Calendar />
        </div>
      </div>
    </main>
  );
}

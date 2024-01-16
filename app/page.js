'use client'

import Image from 'next/image'

import React from 'react'
import Calendar from '@/components/Calender'
import Navbar from '@/components/Navbar'
import Widget from '@/components/Widget'
import DateAndArea from '@/components/DateAndArea'
import TodoList from '@/components/TodoList'

export default function Home() {
  return (
    <main className="flex border-2 border-red-700 flex-col justify-between p-24">
      <Navbar />

      <container className='flex'>
        
        <div className=" flex flex-col items-center justify-between border" >
          <DateAndArea />
          <Widget />
        </div>

        <div className=" flex-col z-10 max-w-5xl w-2/3 items-center justify-between border font-mono text-sm lg:flex">
          <Calendar />
          <TodoList />
        </div>

      </container>
    </main>
  )
}

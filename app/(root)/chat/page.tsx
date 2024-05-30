import React from 'react';
import SideBar from '@/components/SideBar';
import ChatArea from '@/components/ChatArea';
import TabBar from '@/components/TabBar';

const Home = () => {
  return (
    <div className="flex">
      <TabBar />
      <SideBar />
      <div className="flex-grow h-screen flex flex-col">
        <ChatArea />
      </div>
    </div>
  );
};

export default Home;

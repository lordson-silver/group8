import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar'
import { LogoutIcon } from './ui/importSVG'

const ProfileCard = () => {
  return (
        <div className='border-[#2E2E2E] border rounded-[15px] bg-[#1F1F1F] flex gap-3 items-center p-[10px]'>
            <Avatar>
              <AvatarImage src="./image.png" />
            </Avatar>

          
            <div className="flex flex-col justify-center sm:min-w-32">
              <p className="text-[12px] text-white">Daniel Grayson</p>
              <p className=" text-[10px] text-[#6D6D6D]">daniel@gmail.com</p>
            </div>
          <LogoutIcon />         
        </div>
  )
}

export default ProfileCard
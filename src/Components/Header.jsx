import React from 'react'

function Header() {
    const menu = [ 
        {
            id: 1,
            name: 'HOME',
        },
        {
            id: 2,
            name: 'SKILLS',
        },
        {
            id: 3,
            name: 'PROJECTS',
        },
        {
            id: 4,
            name: 'CONTACT',
        },
    ];
    
  return (
    <div>
        <div className='w-[90px] h-[90px] bg-black '>
            <img src= '/public/compass.png'
            className='p-7'
            />
        </div>
        <div>
            {menu.map((item)=> (
                // eslint-disable-next-line react/jsx-key
                <div className='cursor-pointer'>
                  {item.name}
                </div>
            ))}
        </div>
    </div>
  )
};

export default Header
// import { DownIcon } from '@/assets/Icons';
// import React from 'react'

// interface typeTagNavbar {
//     id: string;
//     title: string;
//  }

// export default  function Tagnavbar() {
//     // const TagNavbarCategory:any =  TagNavbarData()
//   return (
//     <div className='mb-[35px] flex items-center justify-between'>
//     <nav>
//     <ul className='flex items-center space-x-[37px]'>
//         {/* {TagNavbarCategory.map((item:typeTagNavbar) => (
//             <li key={item.id} className=''>
//                  <a className='text-[#3D3D3D] text-[15px] leading-[16px] font-normal duration-300 hover:text-[#46A358] hover:font-bold' href="#">{item.title}</a>
//             </li>
//         ))} */}
        
//     </ul>
//     </nav>
//       <div className='flex items-center space-x-[8px]'>
//         <span className='text-[#3D3D3D] text-[15px] leading-[16px]'>Short by:</span>
//         <div className='flex items-center gap-[5px]'>
//             <span className='text-[#3D3D3D] text-[15px] leading-[16px]'>Default sorting</span>
//             <DownIcon/>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];

const App: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default App;

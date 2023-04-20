import React from 'react';

import * as FaIcons from 'react-icons/fa'
import * as FaIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/io'
import * as FaIcons from 'react-icons/ri'

export const SidebarData = [
    {
    title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed:<RiIcons.RiArrowDownSFFill />,
    iconOpend:<RiIcons.RiArrowUpSFill />,
    subNav: [
        {
            tle: 'users',
            path: '/overview/Users',
            icon: <IoIcons.IoIosPaper />,

        },
        {
            tle: 'revenue',
            path: '/overview/revenue',
            icon: <IoIcons.IoIosPaper />,

        },

    ]



    }

]
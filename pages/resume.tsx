import { NextPage } from 'next'
import React from 'react'

const Resume: NextPage = () => {
  const experience = [
    {
      company: {
        about:
          'A subsidiary of Danube Online, one of the largest online grocers in Saudi Arabia',
        name: 'AYM'
      },
      from: 2017,
      positions: [
        {
          description: [
            'Requirement gathering with stakeholders, sprint planning, and project management for the next generations of our products',
            'Hiring, training, retention, and code reviews for my team',
            'Three of my team members went on to lead their teams; one of them at a junior VP level'
          ],
          from: 2019,
          name: 'Tech lead',
          to: 2020
        },
        {
          description: [
            'Designed the architecture and built the backend for a loyalty program for a major consumer brand',
            'Scaled to over 5 million monthly active users with close to 0% error rate',
            'Hired and managed a team of remote and on-site developers'
          ],
          from: 2018,
          name: 'Backend lead',
          to: 2019
        },
        {
          description: [
            'Built operations and fulfillment tech for the largest chain of supermarkets in Saudi Arabia',
            'Multiple apps for warehouse workers, drivers, supervisors, and managers',
            'Increased operational capability and efficiency 10,000%'
          ],
          from: 2017,
          name: 'Full-stack engineer',
          to: 2018
        }
      ],
      to: 2020
    },
    {
      company: {
        about: 'A premium marketplace which got acquired by Noon in 2017',
        name: 'JadoPado'
      },
      from: 2016,
      positions: [
        {
          description: [
            'Localized our flagship React Native app into Arabic, including right-to-left layouts, animations, iconography',
            'Contributed to the React Native open-source ecosystem with RTL improvements'
          ],
          from: 2016,
          name: 'Full-stack engineer',
          to: 2017
        }
      ],
      to: 2017
    },
    {
      company: {
        about: 'A digital design house',
        name: 'Pixel Twist'
      },
      from: 2015,
      positions: [
        {
          from: 2015,
          to: 2016
        }
      ],
      to: 2016
    }
  ]

  return null
}

export default Resume

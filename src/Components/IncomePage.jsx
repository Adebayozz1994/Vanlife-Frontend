import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const IncomePage = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Ju', 'Au', 'Se', 'Oc', 'No', 
          new Date().toLocaleString('default', { month: 'long' }) 
        ],
        datasets: [{
          label: 'Income',
          data: [4,1.5,3,2.5,1.5,0.5], 
          backgroundColor: ['#FFEAD0', '#FFEAD0', '#FFEAD0', '#FFEAD0', '#FF8C38', '#FF8C38'], 
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 5, 
            ticks: {
              stepSize: 1,
              callback: value => `$${value}k`, 
            },
          },
          x: {
            grid: {
              display: false, 
            },
          },
        },
        plugins: {
          legend: {
            display: false, 
          },
        },
      }
    });
    return () => chart.destroy();
  }, []);




  return (
    <section className="lg:p-6 p-2 mx-10">
      <h1 className="text-2xl lg:text-4xl font-bold">Income</h1>

      <p className='font-bold text-base mt-10'>Last <span className='underline'>30 Days</span></p>
      <p className="lg:text-3xl font-bold mt-8">$2,260</p>

      <main className=' lg:w-full mt-4'>
      <canvas ref={chartRef} />
      </main>
      <div className='flex mt-10 mb-20 justify-between '>
          <p><b>Your transactions (3)</b></p>
          <p className=' font-bold'><small>Last <span className=' underline'>30 days</span></small></p>
      </div>
      <div className='flex mt-10 mb-20 justify-between '>
          <p className='font-bold text-2xl'>$720</p>
          <p className=' font-medium'>1/12/22</p>
      </div>
      <div className='flex mt-10 mb-20 justify-between '>
          <p className='font-bold text-2xl'>$560</p>
          <p className=' font-medium'>10/11/22</p>
      </div>
      <div className='flex mt-10 mb-20 justify-between '>
          <p className='font-bold text-2xl'>$980</p>
          <p className=' font-medium'>23/11/22</p>
      </div>
    </section>
  );
  
}

export default IncomePage
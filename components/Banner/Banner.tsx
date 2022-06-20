import Image from 'next/image';

import { Circle, Plus } from '../../svgs';

const locations = ['Ndere Island', 'Impala Sanctuary', 'Hippo Point', 'Dunga Bay','Kit Mikayi'];
const activities = ['Boat Rides', 'Island Trips', 'Bird-watching', 'Game-viewing'];
const grades = ['Grade 1', 'Grade 2', 'Grade 3'];
const regions = ['Region 1', 'Region 2', 'Region 3'];

const Banner = () => (
  <div className="flex items-center h-full my-6">
    <div className="relative w-1/2 mr-0">
      <p className="text-3xl font-bold text-purple-800 my-10 ml-5 font-mono lg:mt-10 lg:mr-0 ">Explore Kisumu</p>
      <p className="text-md text-purple-800 ml-4">Package finder</p>
      <div className="w-8 h-1 bg-purple-800 mt-4 mr-0 ml-6" />
      <div className="flex mt-6 mb-24 mr-0">
        <div className="flex ">
          <select className="w-40 h-11 border-2 m-2 pt-0 pr-3 rounded-lg cursor-pointer mr-5 text-md focus:outline-black">
            <option>Location</option>
            {locations.map((location, index) => (
              <option value={location} key={index}>
                {location}
              </option>
            ))}
          </select>
          <select className="w-40 h-11 border-2 m-2 pt-0 pr-3 rounded-lg cursor-pointer mr-5 text-md focus:outline-black">
            <option>Activity</option>
            {activities.map((activity, index) => (
              <option value={activity} key={index}>
                {activity}
              </option>
            ))}
          </select>
        </div>

      </div>
      <button className="bg-orange-500 h-10 w-30 p-2 m-8 border-2 rounded-lg">Explore</button>
    </div>
    <div className="bg-black hidden lg:block">
    <Image
    src="/lotter/82445-travelers-walking-using-travelrmap-application.gif" 
    alt="Vercel Logo" 
    width={550}
    height={550}
    objectFit="contain" 
    />
    </div>
  </div>
);

export default Banner;

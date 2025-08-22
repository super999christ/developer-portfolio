// @flow strict
import * as React from 'react';
import ProArtisan from './ProArtisan';
import ProCareflow from './ProCareflow';
import ProUserhub from './ProUserhub';
import ProChargingStation from './ProChargingStation';
import ProPickleball from './ProPickleball';
import ProGuarantors from './ProGuarantors';
import ProMariana from './ProMariana';
import ProOrderProtection from './ProOrderProtection';
import ProEnvive from './ProEnvive';

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          <a href={project.url} target='_blank'>{project.name}</a>
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <div className='max-h-[350px] overflow-y-auto'>
        {project.id === 1 && <ProCareflow />}
        {project.id === 2 && <ProUserhub />}
        {project.id === 3 && <ProOrderProtection />}
        {project.id === 4 && <ProChargingStation />}
        {project.id === 5 && <ProPickleball />}
        {project.id === 6 && <ProGuarantors />}
        {project.id === 7 && <ProMariana />}
        {project.id === 8 && <ProArtisan />}
        {project.id === 9 && <ProEnvive />}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
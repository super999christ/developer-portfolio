import Screenshot1 from '/public/projects/guarantors/1.png';
import Screenshot2 from '/public/projects/guarantors/2.png';
import Screenshot3 from '/public/projects/guarantors/3.png';
import ModalImage from '../../ModalImage';

export default function ProGuarantors() {
	return (
		<>
			<div>
        TheGuarantors provides innovative insurance products that facilitate lease approvals, streamline security deposit management, and offer comprehensive renter's insurance - all with the goal of creating a more accessible and secure rental experience. This seamlessly connects renters, owners, and operators, enabling more individuals to access their dream living spaces while mitigating risks for property owners.
			</div>
			<div className="flex flex-wrap gap-4 mt-4">
				<ModalImage src={Screenshot1} className='project-image' />
				<ModalImage src={Screenshot2} className='project-image' />
				<ModalImage src={Screenshot3} className='project-image' />
			</div>
			<div className='mt-4'>
				<ul className='project-roles'>
					<li>Developed a cutting-edge, unbiased algorithm to determine renter eligibility, helping to increase access and reduce bias.</li>
					<li>Implemented robust web and mobile applications that provide a seamless user experience for all stakeholders.</li>
					<li>Integrated advanced data analytics and machine learning capabilities to optimize product offerings and operational efficiency.</li>
				</ul>
			</div>
		</>
	)
}
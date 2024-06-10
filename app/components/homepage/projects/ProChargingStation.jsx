import Screenshot1 from '/public/projects/nxu/1.png';
import Screenshot2 from '/public/projects/nxu/2.png';
import Screenshot3 from '/public/projects/nxu/3.png';
import Screenshot4 from '/public/projects/nxu/4.png';
import Screenshot5 from '/public/projects/nxu/5.png';
import Screenshot6 from '/public/projects/nxu/6.png';
import ModalImage from '../../ModalImage';

export default function ProChargingStation() {
	return (
		<>
			<div>
        NxuOne™ app is an easy-to-use app that provides access to our DC fast charging stations when you are on the go. Use our app to seamlessly start and stop sessions, see real time charging metrics and ensure secure payment processing.
			</div>
			<div className="flex flex-wrap gap-4 mt-4">
				<ModalImage src={Screenshot1} className='project-image' />
				<ModalImage src={Screenshot2} className='project-image' />
				<ModalImage src={Screenshot3} className='project-image' />
        <ModalImage src={Screenshot4} className='project-image' />
				<ModalImage src={Screenshot5} className='project-image' />
				<ModalImage src={Screenshot6} className='project-image' />
			</div>
			<div className='mt-4'>
				<ul className='project-roles'>
					<li>Developed a user-friendly mobile app enabling users to manage charging sessions directly from their smartphones.</li>
					<li>Built a web application that allows users to easily set up their charging profiles, locate nearby Nxu One charging stations, and monitor real-time charging status.</li>
				</ul>
			</div>
		</>
	)
}
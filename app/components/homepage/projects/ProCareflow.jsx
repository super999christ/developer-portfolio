import Screenshot1 from '/public/projects/awell/1.png';
import Screenshot2 from '/public/projects/awell/2.png';
import Screenshot3 from '/public/projects/awell/3.png';
import Screenshot4 from '/public/projects/awell/4.png';
import Screenshot5 from '/public/projects/awell/5.png';
import Screenshot6 from '/public/projects/awell/6.png';
import ModalImage from '../../ModalImage';

export default function ProCareflow() {
	return (
		<>
			<div>
        Healthcare platform that enables organizations to build, operate, and monitor digital care pathways, patient onboarding, and clinical workflows. This provides a user-friendly, drag-and-drop interface, pre-built integrations, and real-time analytics to help healthcare teams improve clinical and operational efficiency, reduce errors, and drive better patient outcomes.
			</div>
			<div className="flex flex-wrap gap-4 mt-4">
				<ModalImage src={Screenshot1} />
				<ModalImage src={Screenshot2} />
				<ModalImage src={Screenshot3} />
        <ModalImage src={Screenshot4} />
				<ModalImage src={Screenshot5} />
				<ModalImage src={Screenshot6} />
			</div>
			<div className='mt-4'>
				<ul className='project-roles'>
					<li>Developed the intuitive drag-and-drop workflow builder, enabling clinical experts to easily create and iterate on complex digital care pathways without relying on technical resources.</li>
					<li>Integrated Awell with EMR and automated manual processes for healthcare teams.</li>
					<li>Built Awell's powerful API layer to empowering healthcare organizations to extend the platform's capabilities.</li>
					<li>Implemented an AI-powered chatbot integration within the Awell platform.</li>
				</ul>
			</div>
		</>
	)
}
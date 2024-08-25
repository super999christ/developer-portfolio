import Screenshot1 from '/public/projects/mariana/1.png';
import Screenshot2 from '/public/projects/mariana/2.png';
import Screenshot3 from '/public/projects/mariana/3.png';
import Screenshot4 from '/public/projects/mariana/4.png';
import ModalImage from '../../ModalImage';

export default function Promariana() {
	return (
		<>
			<div>
        This platform seamlessly integrates with your existing electronic health record (EHR) system to automate and augment clinical encounters, ensuring no effort or revenue is wasted.CARE's key features include a multilingual AI medical scribe that transcribes conversations with 95% accuracy, autonomous medical coding that generates audited codes with over 92% accuracy, and a patient communication assistance that triages messages and automates responses, keeping your inbox always at zero.
			</div>
			<div className="flex flex-wrap gap-4 mt-4">
				<ModalImage src={Screenshot1} />
				<ModalImage src={Screenshot2} />
				<ModalImage src={Screenshot3} />
        <ModalImage src={Screenshot4} />
			</div>
			<div className='mt-4'>
				<ul className='project-roles'>
					<li>Developed the AI-powered clinical decision support system that leverages the patient's full history and latest medical knowledge to provide real-time insights and treatment recommendations.</li>
					<li>Implemented the MarianaGPT, a HIPAA-compliant AI assistant that allows healthcare providers to quickly fetch information, summarize documents, and generate medical text.</li>
					<li>Designed the seamless EHR integration that enables CARE to automatically populate clinical notes and medical codes directly into the provider's workflow.</li>
				</ul>
			</div>
		</>
	)
}
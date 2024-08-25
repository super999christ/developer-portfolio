import Screenshot1 from '/public/projects/userhub/1.png';
import Screenshot2 from '/public/projects/userhub/2.png';
import Screenshot3 from '/public/projects/userhub/3.png';
import Screenshot4 from '/public/projects/userhub/4.png';
import Screenshot5 from '/public/projects/userhub/5.png';
import ModalImage from '../../ModalImage';

export default function ProCareflow() {
	return (
		<>
			<div>
        UserHub is a comprehensive user and billing management platform designed for B2B SaaS companies. It offers features such as team management, seat management, and per-seat licensing, allowing businesses to effectively manage their user base and billing processes.
			</div>
			<div className="flex flex-wrap gap-4 mt-4">
				<ModalImage src={Screenshot1} />
				<ModalImage src={Screenshot2} />
				<ModalImage src={Screenshot3} />
        <ModalImage src={Screenshot4} />
				<ModalImage src={Screenshot5} />
			</div>
			<div className='mt-4'>
				<ul className='project-roles'>
					<li>Implemented advanced seat management capabilities, enabling clients to easily track, manage, and scale their user subscriptions.</li>
					<li>Developed a flexible pricing engine that supports a wide range of pricing models, including seat-based, per-active-user, flat, usage-based, and hybrid plans.</li>
					<li>Integrated UserHub with various identity providers (Auth0, Google Cloud Identity Platform, Firebase) and payment gateways (Stripe).</li>
					<li>Designed and built a comprehensive admin console that allows client teams to manage users, subscriptions, and seats from a single, intuitive interface.</li>
				</ul>
			</div>
		</>
	)
}
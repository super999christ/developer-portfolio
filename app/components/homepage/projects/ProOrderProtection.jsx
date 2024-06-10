import Screenshot1 from '/public/projects/orderprotection/1.png';
import Screenshot2 from '/public/projects/orderprotection/2.png';
import Screenshot3 from '/public/projects/orderprotection/3.png';
import ModalImage from '../../ModalImage';

export default function ProOrderProtection() {
	return (
		<>
			<div>
				OrderProtection entailed building a robust and scalable web application that seamlessly integrates with e-commerce platforms, providing customers with reliable and comprehensive coverage for their online purchases.
			</div>
			<div className="flex flex-wrap gap-4 mt-4">
				<ModalImage src={Screenshot1} />
				<ModalImage src={Screenshot2} />
				<ModalImage src={Screenshot3} />
			</div>
			<div className='mt-4'>
				<ul className='project-roles'>
					<li>Led the development of the Shopify app that integrates shipping protection services with Shopify and BigCommerce.</li>
					<li>Implemented a scalable, fault-tolerant architecture that can handle high traffic and transaction volumes.</li>
					<li>Contributed to the development of a user-friendly web interface with intuitive workflows, optimizing the customer journey.</li>
				</ul>
			</div>
		</>
	)
}
import Screenshot1 from '/public/projects/pickleball/1.png';
import Screenshot2 from '/public/projects/pickleball/2.png';
import Screenshot3 from '/public/projects/pickleball/3.png';
import Screenshot4 from '/public/projects/pickleball/4.png';
import Screenshot5 from '/public/projects/pickleball/5.png';
import ModalImage from '../../ModalImage';

export default function ProPickleball() {
	return (
		<>
			<div>
        Pickleball is a comprehensive platform dedicated to the sport of pickleball, serving as a one-stop destination for all things related to the game. The website features a wide range of content, including news, tournament results, league information, player rankings, and various resources for pickleball enthusiasts.
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
					<li>Developed a content management system to efficiently manage and publish a wide range of pickleball-related content like clubs, leagues, tournaments, etc.</li>
					<li>Implemented analytics and visualization tools to track player statistics, tournament results, and league standings.</li>
					<li>Integrated the website with external platforms, such as Pickleball TV and Pickleball Central, to provide users with a comprehensive and integrated experience</li>
				</ul>
			</div>
		</>
	)
}
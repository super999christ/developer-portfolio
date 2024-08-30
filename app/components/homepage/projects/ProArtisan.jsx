import Screenshot1 from '/public/projects/artisan/1.webp';
import Screenshot2 from '/public/projects/artisan/2.webp';
import Screenshot3 from '/public/projects/artisan/3.webp';
import Screenshot4 from '/public/projects/artisan/4.webp';
import ModalImage from '../../ModalImage';

export default function ProArtisan() {
  return (
    <>
      <div>
        Artisan is an AI-powered, all-in-one platform that automates and
        optimizes outbound sales workflows, empowering sales teams to focus on
        high-leverage activities. The platform, centered around the AI BDR agent
        Ava, consolidates various outbound tools into a single, AI-first
        platform, enabling sales teams to maximize productivity and efficiency.
      </div>
      <div className="flex flex-wrap gap-4 mt-4">
				<ModalImage src={Screenshot2} lottieAnimation="https://www.artisan.co/assets/home/ArtisanHero.lottie" />
        <ModalImage src={Screenshot1} lottieAnimation="https://www.artisan.co/assets/home/ArtisanHero.lottie" />
        <ModalImage src={Screenshot3} lottieAnimation="https://www.artisan.co/assets/home/ArtisanHero.lottie"  />
        <ModalImage src={Screenshot4} lottieAnimation="https://www.artisan.co/assets/home/ArtisanHero.lottie" />
			</div>
      <div className="mt-4">
        <ul className="project-roles">
          <li>
            Designed and implemented the core AI-driven engine that powers Ava,
            the AI BDR agent, to automate 80% of outbound tasks such as lead
            research, email generation, and workflow management.
          </li>
          <li>
            Played a key role in developing the integrated platform that
            consolidates various outbound tools, including B2B data, sales
            playbooks, email warmup, and sales automation.
          </li>
          <li>
            Leveraged serverless architecture on the backend utilizing AWS
            Lambda to handle webhooks from the integrated tools like GitHub,
            Hubspot, Slack, etc.
          </li>
          <li>
            Designed and implemented a flexible, modular frontend architecture
            using a microfrontend approach, allowing for a customized user
            experience for different client segments
          </li>
        </ul>
      </div>
    </>
  );
}

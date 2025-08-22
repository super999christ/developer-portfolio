import Screenshot1 from '/public/projects/envive/1.png';
import Screenshot2 from '/public/projects/envive/2.png';
import Screenshot3 from '/public/projects/envive/3.png';

import ModalImage from '../../ModalImage';

export default function ProEnvive() {
  return (
    <>
      <div>
        Envive.ai is an artificial intelligence platform for e-commerce brands that uses custom-built AI agents to create personalized shopping experiences, improve customer engagement, and boost sales by acting as intelligent sales, search, and support assistants on a brand's website. The platform integrates directly with a brand's data to provide factual, brand-safe, and continuously learning customer interactions across various touchpoints. 
      </div>
      <div className="flex flex-wrap gap-4 mt-4">
        <ModalImage src={Screenshot1} />
        <ModalImage src={Screenshot2} />
        <ModalImage src={Screenshot3} />
      </div>
      <div className="mt-4">
        <ul className="project-roles">
          <li>
            Translated complex Figma designs for Envive’s sales or search agents into responsive pages using Next.js and TypeScript.
          </li>
          <li>
            Integrated AI‑powered search or chat interfaces with Shopify & BigCommerce & Magento.
          </li>
          <li>
            Measured success through conversion‑rate improvements and larger average order values.
          </li>
          <li>
            Ensured performance, SEO and accessibility while deploying these features.
          </li>
        </ul>
      </div>
    </>
  );
}

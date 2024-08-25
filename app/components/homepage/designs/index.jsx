import DesignEcommerceView from './DesignEcommerceView';
import DesignFacebookView from './DesignFacebookView';
import DesignBookingView from './DesignBookingView';
import DesignWhatsappView from './DesignWhatsappView';
import DesignTwitterView from './DesignTwitterView';
import DesignYoutubeView from './DesignYoutubeView';
import DesignUrlshortView from './DesignUrlshortView';
import DesignUberView from './DesignUberView';
import DesignNetflixView from './DesignNetflixView';
import DesignPaypalView from './DesignPaypalView';

export default function DesignView({ topic }) {
  return (
    <div className='flex justify-center py-10'>
      {topic === 'ecommerce' && <DesignEcommerceView />}
      {topic === 'twitter' && <DesignTwitterView />}
      {topic === 'facebook' && <DesignFacebookView />}
      {topic === 'youtube' && <DesignYoutubeView />}
      {topic === 'whatsapp' && <DesignWhatsappView />}
      {topic === 'booking' && <DesignBookingView />}
      {topic === 'urlshort' && <DesignUrlshortView />}
      {topic === 'uber' && <DesignUberView />}
      {topic === 'netflix' && <DesignNetflixView />}
      {topic === 'paypal' && <DesignPaypalView />}
    </div>
  );
}


import Banner from '../components/Banner';
import AustraliaClients from '../components/AustraliaClients';
export default function Client() {
  return (
        <div>
             <Banner image="https://erlendissolutions.com/assets/img/about.png">
                <h1 className="text-white text-4xl font-bold">Welcome to Our Site</h1>
             </Banner>
             
        
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <AustraliaClients />
    </div>
        </div>
  );
}

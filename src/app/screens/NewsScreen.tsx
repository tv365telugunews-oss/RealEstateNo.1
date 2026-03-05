import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Layout } from '../components/Layout';
import { X } from 'lucide-react';

export function NewsScreen() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const tabs = ['All', 'Hyderabad', 'Telangana', 'AP', 'National'];

  const newsArticles = [
    {
      id: 1,
      title: 'Hyderabad Property Market Sees 15% Growth in Q1 2026',
      description: 'Real estate experts predict continued growth in Hyderabad residential sector driven by IT expansion.',
      fullContent: 'The Hyderabad real estate market has witnessed a remarkable 15% growth in the first quarter of 2026, according to recent market analysis. The surge is primarily attributed to the continued expansion of IT and technology parks in areas like Gachibowli, HITEC City, and Financial District. Industry experts predict that this upward trend will continue throughout 2026, with residential properties experiencing the highest demand. Property prices in prime locations have appreciated significantly, while suburban areas are also seeing increased interest from homebuyers and investors. The growth is further supported by improved infrastructure, metro rail connectivity, and favorable government policies encouraging real estate development.',
      source: 'Times of India',
      date: 'Feb 20, 2026',
      category: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?w=400',
    },
    {
      id: 2,
      title: 'New RERA Guidelines for Real Estate Developers',
      description: 'Government announces stricter compliance measures for property developers across Telangana.',
      fullContent: 'The Telangana Real Estate Regulatory Authority (RERA) has announced new comprehensive guidelines for real estate developers operating in the state. The updated regulations focus on enhanced transparency, timely project completion, and better protection for homebuyers. Key changes include mandatory quarterly progress reports, stricter penalties for project delays, and improved grievance redressal mechanisms. Developers are now required to maintain 70% of project funds in escrow accounts to ensure project completion. The new guidelines also mandate digital documentation and online registration processes. Industry stakeholders have welcomed these changes, stating they will bring more accountability and trust to the real estate sector.',
      source: 'Economic Times',
      date: 'Feb 18, 2026',
      category: 'Telangana',
      image: 'https://images.unsplash.com/photo-1580741990231-4aa1c1d9a76a?w=400',
    },
    {
      id: 3,
      title: 'Amaravati Capital Region Property Prices Surge',
      description: 'With renewed focus on capital development, property prices in Amaravati region see significant increase.',
      fullContent: 'Property prices in the Amaravati capital region have surged by over 25% in recent months following the government\'s renewed commitment to capital development. The announcement of major infrastructure projects, including road networks, government complexes, and commercial hubs, has sparked significant investor interest. Real estate developers have reported a substantial increase in land acquisitions and project launches. The capital region, spanning across multiple districts, is witnessing unprecedented demand from both residential and commercial buyers. Market analysts predict that the trend will continue as more development projects are announced and executed. However, experts also caution potential buyers to conduct thorough due diligence before making investment decisions.',
      source: 'The Hindu',
      date: 'Feb 17, 2026',
      category: 'AP',
      image: 'https://images.unsplash.com/photo-1762195804027-04a19d9d3ab6?w=400',
    },
    {
      id: 4,
      title: 'Home Loan Interest Rates Expected to Drop',
      description: 'Major banks announce reduction in home loan rates, boosting affordability for homebuyers.',
      fullContent: 'Leading banks across India have announced a reduction in home loan interest rates, offering relief to prospective homebuyers. The new rates, ranging from 6.5% to 8.5%, represent a decrease of 0.25% to 0.50% compared to previous rates. This move comes in response to improved economic indicators and government initiatives to boost the housing sector. Financial experts believe this will significantly enhance affordability and stimulate demand in the residential real estate market. The reduced rates are expected to benefit both first-time homebuyers and those looking to refinance existing loans. Industry analysts predict this could lead to a 15-20% increase in home loan applications over the next quarter. Banks are also offering special schemes for affordable housing segments with even more competitive rates.',
      source: 'Business Standard',
      date: 'Feb 16, 2026',
      category: 'National',
      image: 'https://images.unsplash.com/photo-1684990574834-aa0e11bc1ef8?w=400',
    },
    {
      id: 5,
      title: 'Metro Rail Expansion Boosts Suburban Property Demand',
      description: 'Areas along new metro corridors witness increased buyer interest and price appreciation.',
      fullContent: 'The ongoing expansion of Hyderabad Metro Rail network has triggered a significant surge in property demand along the new corridors. Areas such as Miyapur, Kukatpally, Kokapet, and Shamshabad are experiencing unprecedented buyer interest. Property prices in these localities have appreciated by 10-15% since the metro route announcements. Real estate developers are launching multiple residential projects along the metro corridors, anticipating continued demand growth. The improved connectivity has made suburban areas more attractive to IT professionals and families seeking affordable housing options. Market experts note that properties within 1-2 km of metro stations command premium prices. The trend is expected to continue as more metro phases become operational, potentially reshaping Hyderabad\'s real estate landscape.',
      source: 'Deccan Chronicle',
      date: 'Feb 15, 2026',
      category: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?w=400',
    },
  ];

  const filteredArticles = activeTab === 'all'
    ? newsArticles
    : newsArticles.filter(article => article.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <Layout title="Property News" showBack={true} showBottomNav={true}>
      {/* Tab Filter */}
      <div className="px-4 mb-4 mt-4">
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.toLowerCase()
                  ? 'bg-[#CC0000] text-white'
                  : 'bg-[#F8F9FA] text-[#6B6B8A] border-2 border-[#0088CC]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* News List */}
      <div className="px-4 space-y-4 pb-4">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <ImageWithFallback
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
              fallbackText="property news"
            />
            <div className="p-4">
              <h3 className="font-bold text-[#1A1A2E] text-base mb-2 font-['Poppins']">
                {article.title}
              </h3>
              <p className="text-sm text-[#6B6B8A] mb-3 line-clamp-2">
                {article.description}
              </p>
              <div className="flex justify-between items-center text-xs text-[#6B6B8A]">
                <span className="font-medium">{article.source}</span>
                <span>{article.date}</span>
              </div>
              <button 
                onClick={() => setSelectedArticle(article.id)}
                className="text-[#CC0000] text-sm font-medium mt-3 hover:underline"
              >
                Read More →
              </button>
            </div>
          </div>
        ))}

        {/* Advertisement Banner */}
        <div className="border-2 border-dashed border-[#0088CC] rounded-lg p-8 text-center mt-6">
          <p className="text-[10px] text-[#6B6B8A] mb-2">Advertisement</p>
          <div className="flex items-center justify-center">
            <span className="text-[#0088CC] font-medium">Google AdSense Placeholder</span>
          </div>
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:items-center justify-center">
          <div className="bg-white w-full max-w-[390px] sm:max-w-2xl max-h-[80vh] rounded-t-3xl sm:rounded-2xl overflow-hidden animate-slide-up">
            {/* Modal Header */}
            <div className="bg-[#0088CC] px-6 py-4 flex items-center justify-between sticky top-0">
              <h2 className="font-bold text-white text-lg font-['Poppins']">
                Article Details
              </h2>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(80vh-64px)] px-6 py-4 pb-24">
              {(() => {
                const article = newsArticles.find(a => a.id === selectedArticle);
                if (!article) return null;
                
                return (
                  <div className="space-y-4">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-xl"
                      fallbackText="property news"
                    />
                    
                    <h3 className="font-bold text-[#1A1A2E] text-xl font-['Poppins']">
                      {article.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-xs text-[#6B6B8A]">
                      <span className="font-medium">{article.source}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                      <span>•</span>
                      <span className="bg-[#0088CC] text-white px-2 py-1 rounded-full text-xs">
                        {article.category}
                      </span>
                    </div>
                    
                    <p className="text-sm text-[#1A1A2E] leading-relaxed">
                      {article.fullContent}
                    </p>

                    {/* Contact Section */}
                    <div className="border-t-2 border-gray-200 pt-4 mt-6">
                      <p className="text-sm text-[#6B6B8A] mb-3">
                        For more information or property inquiries:
                      </p>
                      <a
                        href="tel:9618404505"
                        className="block w-full bg-[#0088CC] text-white py-3 rounded-xl font-medium text-center hover:bg-[#0077BE] transition-colors"
                      >
                        Contact Real Estate No.1
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
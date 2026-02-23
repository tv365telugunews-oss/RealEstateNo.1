import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Search, Filter, Home, Newspaper, Plus, Bookmark, User, Settings, MapPin, Phone, Mail, MessageCircle, Info, ChevronDown, X } from 'lucide-react';
import { Switch } from '../components/ui/switch';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Input } from '../components/ui/input';
import locationIcon from 'figma:asset/5568e598ca8c8cf9ba3db49a96be5e066a028da1.png';

export function NewHomeScreen() {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState('home');
  const [showLocationSelector, setShowLocationSelector] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedState, setSelectedState] = useState('Telangana');
  const [selectedDistrict, setSelectedDistrict] = useState('Hyderabad');
  const [selectedMandal, setSelectedMandal] = useState('');
  const [mandalSearch, setMandalSearch] = useState('');
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [settings, setSettings] = useState({
    voiceCalls: true,
    whatsapp: true,
    email: false,
    sms: false,
  });

  // Auto-play advertisement carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % 8);
    }, 4000); // Change ad every 4 seconds
    return () => clearInterval(interval);
  }, []);

  // Location data with comprehensive mandal information
  const telanganaDistricts = [
    'GHMC Area', 'Hyderabad', 'Rangareddy', 'Medchal-Malkajigiri', 'Sangareddy', 'Vikarabad',
    'Yadadri Bhuvanagiri', 'Nalgonda', 'Suryapet', 'Khammam', 'Bhadradri Kothagudem',
    'Warangal Urban', 'Warangal Rural', 'Hanamkonda', 'Jangaon', 'Mahabubabad',
    'Mulugu', 'Jayashankar Bhupalpally', 'Rajanna Sircilla', 'Karimnagar', 'Peddapalli',
    'Mancherial', 'Nirmal', 'Adilabad', 'Kumuram Bheem', 'Nizamabad',
    'Kamareddy', 'Siddipet', 'Medak', 'Narayanpet', 'Nagarkurnool',
    'Wanaparthy', 'Gadwal', 'Jogulamba Gadwal'
  ];

  const andhraDistricts = [
    'Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Kurnool',
    'Kadapa', 'Nellore', 'Anantapur', 'Chittoor', 'Krishna',
    'West Godavari', 'East Godavari', 'Srikakulam', 'Vizianagaram', 'Prakasam',
    'Eluru', 'NTR District', 'Bapatla', 'Palnadu', 'Sri Sathya Sai',
    'Anakapalli', 'Kakinada', 'Alluri Sitharama Raju', 'Parvathipuram Manyam', 'Nandyal',
    'Sri Balaji'
  ];

  // Comprehensive mandal data for each district
  const mandalsByDistrict: Record<string, string[]> = {
    // GHMC Area - All 300+ Circles/Areas
    'GHMC Area': [
      // Central Zone
      'Abids', 'Afzalgunj', 'Amberpet', 'Asifnagar', 'Bahadurpura', 'Bandlaguda Jagir',
      'Barkas', 'Bholakpur', 'Chandrayangutta', 'Charminar', 'Dabeerpura', 'Dhoolpet',
      'Falaknuma', 'Gaddiannaram', 'Golconda', 'Goshamahal', 'Gunfoundry', 'Himayatnagar',
      'Hussaini Alam', 'Karwan', 'Khilwat', 'Laldarwaja', 'Malakpet', 'Mangalhat',
      'Moghalpura', 'Musheerabad', 'Narayanguda', 'Nampally', 'Panjesha', 'Pathar Gatti',
      'Purani Haveli', 'Rein Bazar', 'Saroornagar', 'Santosh Nagar', 'Shah Ali Banda',
      'Shahinayatgunj', 'Shalibanda', 'Shivam Road', 'Sultan Shahi', 'Talabkatta',
      'Tappachabutra', 'Uppuguda', 'Vattepally', 'Vijayapuri Colony', 'Yakutpura',
      // East Zone
      'Alwal', 'Anandnagar', 'Balanagar', 'Balaji Nagar', 'Bansilalpet', 'Begumpet',
      'Bhoiguda', 'Borabanda', 'Bowenpally', 'Chilakalguda', 'E.C.I.L.', 'East Marredpally',
      'Ferozeguda', 'Goutam Nagar', 'Habsiguda', 'Kapra', 'Khairatabad', 'Lallaguda',
      'Malkajgiri', 'Marredpally', 'Mettuguda', 'Neredmet', 'New Bowenpally', 'Padmarao Nagar',
      'Paradise', 'Park Lane', 'Parsigutta', 'Picket', 'R.K. Puram', 'Ramnagar',
      'Ramgopalpet', 'Rasoolpura', 'S.D. Road', 'Safilguda', 'Secunderabad', 'Sitafalmandi',
      'Tadbund', 'Tarnaka', 'Tirumalagiri', 'Trimulgherry', 'Vikrampuri', 'West Marredpally',
      'Yapral', 'Anandbagh', 'Ghatkesar', 'Keesara', 'Peerzadiguda', 'Uppal',
      // West Zone
      'Ameenpur', 'Ameerpet', 'Attapur', 'Banjara Hills', 'Bhavani Nagar', 'Chandanagar',
      'Durgam Cheruvu', 'Erragadda', 'Film Nagar', 'Gachibowli', 'Gopanpally', 'Gudimalkapur',
      'Hafeezpet', 'HITEC City', 'Hyderguda', 'Jeedimetla', 'Jubilee Hills', 'Khajaguda',
      'KPHB Colony', 'Kukatpally', 'Langar Houz', 'Lingampally', 'Madhapur', 'Madinaguda',
      'Mahankali', 'Mallepally', 'Masab Tank', 'Meerpet', 'Mehdipatnam', 'Miyapur',
      'Nagole', 'Nanakramguda', 'Nizampet', 'Panjagutta', 'Patancheru', 'Puppalaguda',
      'Quthbullapur', 'Rajendranagar', 'Ramanthapur', 'Sanathnagar', 'Serilingampally',
      'Shaikpet', 'Shamshabad', 'Somajiguda', 'S.R. Nagar', 'Tolichowki',
      // North Zone
      'Bachupally', 'Bollaram', 'Bollarum', 'Dammaiguda', 'Dundigal', 'Gandimaisamma',
      'Hakimpet', 'Kompally', 'Mallampet', 'Medchal', 'Medipally', 'Moula Ali',
      'Muduchinthalapally', 'Nacharam', 'Pragathinagar', 'Shamirpet', 'Suraram',
      'Thumkunta', 'Turkapally', 'A.S. Rao Nagar', 'Almasguda', 'Ambernagar',
      // South Zone
      'Abdullapurmet', 'Adibatla', 'Aramghar', 'Aziz Nagar', 'Badangpet',
      'Champapet', 'Chintalmet', 'Chintalkunta', 'Gandipet',
      'Karmanghat', 'Kismatpur', 'Kokapet', 'Kothapet', 'Kothur', 'L.B. Nagar',
      'Maheshwaram', 'Mailardevpally', 'Manikonda', 'Mansoorabad', 'Osman Nagar',
      'Pahadi Shareef', 'Petlaburj', 'R.C. Puram', 'Ranga Reddy', 'Saidabad',
      'Saroornagar East', 'Shivarampally', 'Talabchanchalam', 'Tukkuguda', 'Upparpally',
      'Vanasthalipuram', 'Yousufguda', 'Zindabazar',
      // Additional GHMC Localities
      'Kondapur', 'Financial District', 'Botanical Garden', 'Laxmiguda', 'Narsingi',
      'Madhapur Hi-Tech City', 'Cyber Towers', 'Raidurgam', 'Kavuri Hills', 'Shilparamam',
      'Mind Space', 'Inorbit Mall Area', 'Begumpet Airport', 'Somajiguda Press Club',
      'Lakdi Ka Pul', 'Moazzam Jahi Market', 'Old City', 'Chaderghat', 'Chanchalguda',
      'Koti', 'Vidyanagar', 'Tarnaka IIT Area', 'Habsiguda Metro', 'Ngri', 'Nacharam IDA',
      'Uppal Stadium', 'L B Nagar Metro', 'Dilsukhnagar', 'Chaitanyapuri',
      'Kothapet Fruit Market', 'Lalapet', 'Ramnagar Metro', 'Moula Ali Dargah', 'Sitaram Bagh',
      'Kushaiguda', 'Sainikpuri', 'Radhika Theater', 'Prashasan Nagar', 'Kowkoor', 'Ammuguda',
      'Gundlapochampally', 'Kistareddypet', 'Jalpally', 'Mamidipally', 'Mangalpally',
      'Narsingi Village', 'Kollur', 'Gopanapally', 'Pragathi Nagar', 'Nizampet Village',
      'Miyapur Metro', 'BHEL Factory', 'Moosapet', 'Fathenagar', 'Bahadurpura Old City',
      'Darusalam', 'Misrigunj', 'Toli Masjid', 'Nehru Nagar', 'Golnaka', 'Shanthi Nagar',
      'Warasiguda', 'Chilkalguda', 'Koranti', 'Yapral Village', 'Cherlapally',
      'Jawahar Nagar', 'Kapra Village', 'Old Bowenpally', 'Yapral Lake', 'Sainagar',
      'Officers Colony', 'Sikh Village', 'VST', 'Sitarampuram', 'Lothukunta',
      'Alwal Metro', 'Neredmet Old', 'Anand Nagar Colony', 'DRDO Township',
      'IS Sadan', 'Toli Chowki', 'Masjidbanda', 'Mehdipatnam Circle', 'Rethibowli',
      'Hydernagar', 'Kukatpally Housing Board', 'Nizampet X Road', 'Pragathi Nagar Colony',
      'Jeedimetla Industrial Area', 'Balanagar Industrial Area', 'Sanathnagar Industrial Area',
      'Moosapet Metro', 'Bharatnagar', 'SR Nagar Metro', 'Ameerpet Metro', 'Panjagutta Circle',
      'Somajiguda Y Junction', 'Raj Bhavan Road', 'Necklace Road', 'Tank Bund', 'NTR Gardens',
      'Lumbini Park', 'Sailing Club', 'Eat Street', 'Hussain Sagar', 'Sanjeevaiah Park',
      'Telugu Talli Flyover', 'Paradise Circle', 'Rasoolpura Metro', 'Begumpet Railway Station',
      'Prakash Nagar', 'Maitrivanam', 'Film Nagar Colony', 'Road No 10', 'Road No 12',
      'Road No 36', 'Road No 45', 'Jubilee Hills Check Post', 'Jubilee Hills Circle',
      'Image Hospital', 'Apollo Hospital', 'Care Hospital', 'Continental Hospital',
      'Hitech City Metro', 'Cyber Gateway', 'Mindspace IT Park', 'Raheja Mind Space',
      'DLF Cyber City', 'WaveRock', 'Gachibowli Stadium', 'IIIT Hyderabad', 'ISB Campus',
      'University of Hyderabad', 'Central University', 'Gachibowli Flyover',
      'Biodiversity Park', 'Silicon Valley', 'Knowledge City', 'Wipro Circle',
      'Infosys Campus', 'TCS Gachibowli', 'Microsoft Campus', 'Google Office',
      'Amazon Office', 'Deloitte Campus', 'Accenture Office', 'Cognizant Campus',
      'Tellapur', 'Nallagandla', 'Serilingampally Mandal', 'Madhapur Police Station',
      'Kukatpally Metro', 'JNTU College', 'Miyapur Bus Depot', 'Lingampally Railway Station',
      'Patancheru Industrial Area', 'Ramachandrapuram', 'Chandanagar Metro',
      'Madinaguda Arch', 'Hafeezpet Metro', 'Hitex Exhibition Center', 'Shilparamam Entry'
    ],
    'Hyderabad': [
      'Secunderabad', 'Tirumalagiri', 'Malkajgiri', 'Kapra', 'Uppal', 'Hayathnagar',
      'Saroornagar', 'Amberpet', 'Khairatabad', 'Musheerabad', 'Marredpally', 'Begumpet',
      'Serilingampally', 'Kukatpally', 'Rajendranagar', 'Shaikpet', 'Bahadurpura',
      'Charminar', 'Goshamahal', 'Nampally', 'Asifnagar', 'Bandlaguda', 'Chandrayangutta'
    ],
    'Rangareddy': [
      'Shamshabad', 'Rajendranagar', 'Serilingampally', 'Shankarpally', 'Moinabad',
      'Chevella', 'Vikarabad', 'Tandur', 'Pargi', 'Keshampet', 'Farooqnagar',
      'Ibrahimpatnam', 'Manchal', 'Yacharam', 'Kandukur', 'Hayathnagar', 'Ghatkesar',
      'Keesara', 'Medchal', 'Shamirpet', 'Muduchinthalapally', 'Maheshwaram',
      'Abdullapurmet', 'Saroornagar', 'Uppal', 'Kapra', 'Malkajgiri'
    ],
    'Medchal-Malkajigiri': [
      'Medchal', 'Shamirpet', 'Keesara', 'Ghatkesar', 'Uppal', 'Malkajgiri',
      'Kapra', 'Alwal', 'Quthbullapur', 'Kukatpally', 'Bachupally', 'Medipally',
      'Balanagar', 'Dundigal', 'Muduchinthalapally'
    ],
    'Sangareddy': [
      'Sangareddy', 'Patancheru', 'Zaheerabad', 'Narayankhed', 'Andole', 'Jharasangam',
      'Kandi', 'Hatnoora', 'Pulkal', 'Ameenpur', 'Jinnaram', 'Kohir', 'Munipally',
      'Sadasivpet', 'Mogudampally', 'Nyalkal', 'Gummadidala', 'Hathnoora'
    ],
    'Vikarabad': [
      'Vikarabad', 'Bantwaram', 'Peddemul', 'Doma', 'Kulkacharla', 'Tandur',
      'Basheerabad', 'Yalal', 'Kodangal', 'Bomraspet', 'Mominpet', 'Shankarpalle',
      'Dharur', 'Pargi', 'Doulatabad'
    ],
    'Yadadri Bhuvanagiri': [
      'Bhongir', 'Yadagirigutta', 'Ramannapeta', 'Choutuppal', 'Mothkur', 'Bibinagar',
      'Pochampally', 'Valigonda', 'Alair', 'Bommalaramaram', 'Turkapally', 'Atmakur',
      'Rajapet', 'Addaguduru', 'Bhongir Rural'
    ],
    'Nalgonda': [
      'Nalgonda', 'Miryalaguda', 'Devarakonda', 'Halia', 'Munugode', 'Nakrekal',
      'Chityala', 'Tripuraram', 'Nidamanuru', 'Thipparthi', 'Narketpally', 'Kodad',
      'Huzurnagar', 'Mellacheruvu', 'Gurrampode', 'Suryapet', 'Neredcherla',
      'Vemulapally', 'Tirumalagiri', 'Kangal', 'Nampally', 'Shaligouraram'
    ],
    'Suryapet': [
      'Suryapet', 'Kodad', 'Huzurnagar', 'Mothey', 'Nadigudem', 'Chilkur',
      'Munagala', 'Neredcherla', 'Thirumalagiri', 'Atmakur', 'Chivvemla',
      'Garide pally', 'Palakeedu', 'Maddirala', 'Thungathurthy', 'Jajireddygudem'
    ],
    'Khammam': [
      'Khammam', 'Madhira', 'Wyra', 'Sathupally', 'Kothagudem', 'Manuguru',
      'Kallur', 'Kusumanchi', 'Nelakondapally', 'Chinthakani', 'Singareni',
      'Penuballi', 'Thirumalayapalem', 'Mudigonda', 'Enkoor', 'Tallada',
      'Kamepally', 'Yerrupalem', 'Kukunoor', 'Bonakal'
    ],
    'Bhadradri Kothagudem': [
      'Kothagudem', 'Palwancha', 'Yellandu', 'Manuguru', 'Burgampahad', 'Kamepalle',
      'Sujatha Nagar', 'Tekulapally', 'Julurpad', 'Chunchupally', 'Aswapuram',
      'Bhadrachalam', 'Dummugudem', 'Charla', 'Gundala', 'Venkatapuram',
      'Kunavaram', 'Vajedu', 'Cherla', 'Dammapeta', 'Chandrugonda'
    ],
    'Warangal Urban': [
      'Warangal', 'Hanamkonda', 'Kazipet', 'Hasanparthy', 'Inavolu', 'Geesukonda',
      'Atmakur', 'Dharmasagar', 'Parkal', 'Shayampet', 'Narsampet', 'Warangal East',
      'Warangal West', 'Warangal North', 'Warangal South'
    ],
    'Warangal Rural': [
      'Nallabelly', 'Damera', 'Chennaraopet', 'Duggondi', 'Nekkonda', 'Rayaparthy',
      'Dharmasagar', 'Khanapur', 'Raiparthy', 'Zaffergadh', 'Sangem', 'Geesugonda',
      'Narsampet', 'Parkal', 'Shayampet', 'Atmakur', 'Regonda', 'Parvathagiri'
    ],
    'Hanamkonda': [
      'Hanamkonda', 'Warangal', 'Kazipet', 'Inavolu', 'Hasanparthy', 'Geesukonda',
      'Parkal', 'Shayampet', 'Narsampet', 'Thorrur', 'Dharmasagar', 'Atmakur',
      'Regonda', 'Parvathagiri', 'Nekkonda'
    ],
    'Jangaon': [
      'Jangaon', 'Ghanpur', 'Kodakandla', 'Lingalaghanpur', 'Chityal', 'Raghunathpally',
      'Thorrur', 'Devaruppula', 'Narmetta', 'Bachannapet', 'Palakurthy', 'Zaffergadh',
      'Chilpur', 'Tharigoppula', 'Nadikuda', 'Malharrao'
    ],
    'Mahabubabad': [
      'Mahabubabad', 'Garla', 'Gudur', 'Kuravi', 'Nellikudur', 'Kesamudram',
      'Thorrur', 'Dornakal', 'Maripeda', 'Bayyaram', 'Mahabubabad Rural',
      'Chinnagudur', 'Danthalapally', 'Kothaguda', 'Narsimhulapet'
    ],
    'Mulugu': [
      'Mulugu', 'Venkatapur', 'Eturnagaram', 'Tadvai', 'Govindaraopet', 'Mangapet',
      'Kannaigudem', 'Wazeedu', 'Kanagarthi', 'Eturunagaram Wildlife'
    ],
    'Jayashankar Bhupalpally': [
      'Bhupalpally', 'Kataram', 'Mahadevpur', 'Malharrao', 'Tekumatla', 'Ghanpur',
      'Mogullapally', 'Mutharam', 'Mulkanoor', 'Regonda', 'Ghanapur Station',
      'Chityal', 'Palakurthy', 'Tadwai', 'Eturnagaram'
    ],
    'Rajanna Sircilla': [
      'Sircilla', 'Vemulawada', 'Konaraopet', 'Chandurthi', 'Rudrangi', 'Ellanthakunta',
      'Thangallapally', 'Boinpally', 'Gambhiraopet', 'Yellareddypet', 'Mustabad',
      'Veernapally', 'Sircilla Rural', 'Venkatrao'
    ],
    'Karimnagar': [
      'Karimnagar', 'Jammikunta', 'Huzurabad', 'Sircilla', 'Vemulawada', 'Manakondur',
      'Choppadandi', 'Gangadhara', 'Huzurabad', 'Korutla', 'Jagtial', 'Metpally',
      'Koratla', 'Shankarapatnam', 'Ramadugu', 'Peddapalli', 'Manthani',
      'Dharmapuri', 'Velgatoor', 'Boinpally', 'Thimmapur', 'Ellanthakunta'
    ],
    'Peddapalli': [
      'Peddapalli', 'Manthani', 'Julapalle', 'Ramagundam', 'Dharmapuri', 'Eligaid',
      'Kamanpur', 'Sultanabad', 'Srirampur', 'Anthergaon', 'Mutharam Mahadevpur',
      'Odela', 'Jammikunta', 'Jagtial', 'Mallial', 'Gollapalli'
    ],
    'Mancherial': [
      'Mancherial', 'Bellampally', 'Mandamarri', 'Luxettipet', 'Chennur', 'Jaipur',
      'Kasipet', 'Bheemini', 'Hajipur', 'Kotapally', 'Tandur', 'Nennel',
      'Naspur', 'Kannepally', 'Dandepally', 'Vemanpally'
    ],
    'Nirmal': [
      'Nirmal', 'Bhainsa', 'Khanapur', 'Mamda', 'Laxmanchanda', 'Basar', 'Sarangapur',
      'Nirmal Rural', 'Kaddipet', 'Dilawarpur', 'Dandepally', 'Kubeer', 'Mendora',
      'Bhainsa Rural', 'Dasturabad', 'Nuspur', 'Tamsi', 'Tanur'
    ],
    'Adilabad': [
      'Adilabad', 'Boath', 'Bela', 'Talamadugu', 'Gudihatnoor', 'Narnoor', 'Bazarhatnoor',
      'Jainath', 'Mavala', 'Utnoor', 'Indervelly', 'Sirpur', 'Kerameri', 'Adilabad Rural',
      'Ichoda', 'Neredugommu', 'Tamsi', 'Sarangpur', 'Vemanpalli', 'Nennel'
    ],
    'Kumuram Bheem': [
      'Asifabad', 'Kaghaznagar', 'Penchikalpet', 'Sirpur (T)', 'Kerameri', 'Tiryani',
      'Dahegaon', 'Wankidi', 'Jainoor', 'Chintalamanepally', 'Koutala', 'Bejjur',
      'Lingapur', 'Rebbena', 'Sirpur (U)', 'Jannaram'
    ],
    'Nizamabad': [
      'Nizamabad', 'Bodhan', 'Banswada', 'Armoor', 'Kamareddy', 'Yellareddy', 'Bichkunda',
      'Balkonda', 'Kotagiri', 'Jakranpally', 'Nizamsagar', 'Yedapally', 'Navipet',
      'Varni', 'Makloor', 'Sirkonda', 'Nandipet', 'Dichpally', 'Bheemgal',
      'Gandhari', 'Velpur', 'Mosra', 'Madnoor', 'Nizar', 'Renjal'
    ],
    'Kamareddy': [
      'Kamareddy', 'Yellareddy', 'Banswada', 'Bichkunda', 'Bhiknoor', 'Ramareddy',
      'Nasrullabad', 'Gandhari', 'Birkoor', 'Sadasivnagar', 'Rajampet', 'Lingampet',
      'Madnoor', 'Machareddy', 'Tadwai', 'Jukkal', 'Domakonda', 'Pitlam'
    ],
    'Siddipet': [
      'Siddipet', 'Dubbak', 'Gajwel', 'Kondapak', 'Narayankhed', 'Chegunta', 'Mirdoddi',
      'Kohir', 'Raipol', 'Nangnoor', 'Markook', 'Doultabad', 'Mulugu', 'Cheriyal',
      'Maddur', 'Akkannapet', 'Wargal', 'Thoguta', 'Komuravelli', 'Husnabad'
    ],
    'Medak': [
      'Medak', 'Narsapur', 'Ramayampet', 'Kulcharam', 'Jogipet', 'Shivampet', 'Hathnoora',
      'Toopran', 'Tekmal', 'Alladurg', 'Shankarampet', 'Kowdipally', 'Regode',
      'Papannapet', 'Dubbak', 'Chegunta', 'Narayankhed', 'Kondapak', 'Siddipet'
    ],
    'Narayanpet': [
      'Narayanpet', 'Makthal', 'Marikal', 'Dhanwada', 'Utkoor', 'Narva', 'Krishna',
      'Damargidda', 'Maganoor', 'Kosgi', 'Maddur'
    ],
    'Nagarkurnool': [
      'Nagarkurnool', 'Achampet', 'Kalwakurthy', 'Urkonda', 'Bijnapally', 'Uppununthala',
      'Tadoor', 'Lingal', 'Amrabad', 'Thimmajipet', 'Vangoor', 'Balmoor',
      'Chandur', 'Padara', 'Kollapur', 'Bijinapally'
    ],
    'Wanaparthy': [
      'Wanaparthy', 'Pebbair', 'Gopalpet', 'Atmakur', 'Peddamandadi', 'Pangal', 'Srirangapur',
      'Madanapur', 'Revally', 'Veepangandla', 'Kothakota', 'Ghanpur'
    ],
    'Gadwal': [
      'Gadwal', 'Itikyal', 'Maldakal', 'Dharur', 'Rajapur', 'Undavelly', 'Ieeja',
      'Alampur', 'Aiza', 'Ghattu', 'Waddepally', 'Kaloor'
    ],
    'Jogulamba Gadwal': [
      'Gadwal', 'Alampur', 'Ieeja', 'Dharur', 'Itikyal', 'Maldakal', 'Rajapur',
      'Undavelly', 'Ghattu', 'Aiza', 'Kaloor', 'Waddepally'
    ],

    // Andhra Pradesh Districts
    'Visakhapatnam': [
      'Visakhapatnam Urban', 'Gajuwaka', 'Bheemunipatnam', 'Anakapalle', 'Yelamanchili',
      'Narsipatnam', 'Madugula', 'Paderu', 'Araku Valley', 'Chintapalle', 'Chodavaram',
      'Dumbriguda', 'Hukumpeta', 'Koyyuru', 'Munchangiputtu', 'Pedabayalu',
      'G. Madugula', 'K. Kotapadu', 'Ravikamatham', 'Rambilli', 'Rolugunta',
      'S. Rayavaram', 'Sabbavaram', 'Ananthagiri', 'Butchayyapeta', 'Devarapalle'
    ],
    'Vijayawada': [
      'Vijayawada Urban', 'Gannavaram', 'Mylavaram', 'Tiruvuru', 'Gudlavalleru',
      'Pedana', 'Machilipatnam', 'Pamarru', 'Bantumilli', 'Kaikalur', 'Gudivada',
      'Avanigadda', 'Mopidevi', 'Koduru', 'Chandarlapadu', 'Kanchikacherla',
      'Vissannapet', 'Vuyyuru', 'G.Konduru', 'Penamaluru'
    ],
    'Guntur': [
      'Guntur Urban', 'Tenali', 'Mangalagiri', 'Sattenapalle', 'Narasaraopet', 'Vinukonda',
      'Gurazala', 'Piduguralla', 'Chilakaluripet', 'Ponnur', 'Bapatla', 'Repalle',
      'Macherla', 'Dachepally', 'Karempudi', 'Kollipara', 'Rajupalem', 'Amaravathi',
      'Tadikonda', 'Vemuru', 'Bhattiprolu', 'Amruthalur', 'Edlapadu'
    ],
    'Tirupati': [
      'Tirupati Urban', 'Chandragiri', 'Renigunta', 'Srikalahasti', 'Puttur', 'Nagari',
      'Satyavedu', 'Sullurpeta', 'Venkatagiri', 'Gudur', 'Naidupeta', 'Rapur',
      'Varadaiahpalem', 'Yerpedu', 'Kalakada', 'Kota', 'Vijayapuram', 'Pichatur',
      'Buchinaidu Kandriga', 'Thottambedu', 'K. V. B. Puram', 'Ramachandrapuram'
    ],
    'Kurnool': [
      'Kurnool', 'Adoni', 'Nandyal', 'Yemmiganur', 'Dhone', 'Allagadda', 'Pattikonda',
      'Banaganapalle', 'Koilkuntla', 'Kodumur', 'Kosigi', 'Atmakur', 'Mantralayam',
      'Aluru', 'Aspari', 'Bethamcherla', 'Bandi Atmakur', 'Chagalamarri', 'Devanakonda',
      'Gadivemula', 'Gonegandla', 'Gospadu', 'Gudur', 'Halaharvi', 'Holagunda'
    ],
    'Kadapa': [
      'Kadapa', 'Proddatur', 'Jammalamadugu', 'Rayachoti', 'Pulivendula', 'Badvel',
      'Mydukur', 'Rajampet', 'Kamalapuram', 'Yerraguntla', 'Chakrayapet', 'Vempalle',
      'Lakkireddypalle', 'Kondapuram', 'T. Sundupalle', 'Muddanur', 'Penagalur',
      'Simhadripuram', 'Atlur', 'Vallur', 'Brahmamgari Matham', 'Veerapunayunipalle'
    ],
    'Nellore': [
      'Nellore Urban', 'Kavali', 'Gudur', 'Naidupeta', 'Sullurpeta', 'Venkatagiri',
      'Atmakur', 'Kovur', 'Udayagiri', 'Vakadu', 'Balayapalle', 'Buchireddipalem',
      'Chittamur', 'Dagadarthi', 'Doravarisatram', 'Jaladanki', 'Kodavalur', 'Marripadu',
      'Muthukur', 'Nellore Rural', 'Ozili', 'Pellakur', 'Podalakur', 'Rapur'
    ],
    'Anantapur': [
      'Anantapur', 'Dharmavaram', 'Hindupur', 'Penukonda', 'Kadiri', 'Gooty', 'Tadipatri',
      'Rayadurg', 'Guntakal', 'Kalyandurg', 'Madakasira', 'Singanamala', 'Atmakur',
      'Amarapuram', 'Bathalapalle', 'Beluguppa', 'Bommanahal', 'Brahmasamudram',
      'Bukkarayasamudram', 'Bukkapatnam', 'Chilamathur', 'D. Hirehal', 'Gandlapenta'
    ],
    'Chittoor': [
      'Chittoor', 'Madanapalle', 'Puttur', 'Palamaner', 'Punganur', 'Nagari', 'Srikalahasti',
      'Chandragiri', 'Tirupati', 'Satyavedu', 'Palasamudram', 'B. Kothakota', 'Bangarupalem',
      'Baireddipalle', 'Chowdepalle', 'Gangavaram', 'Gudipala', 'Irala', 'Kalikiri',
      'Kambhamvaripalle', 'Karvetinagar', 'Mulakalacheruvu', 'Nindra', 'Pakala'
    ],
    'Krishna': [
      'Vijayawada', 'Machilipatnam', 'Gudivada', 'Avanigadda', 'Pedana', 'Bantumilli',
      'Gannavaram', 'Vuyyuru', 'Pamarru', 'Penamaluru', 'Kanchikacherla', 'Kaikalur',
      'Gudlavalleru', 'Vissannapet', 'Mylavaram', 'Tiruvuru', 'Nagayalanka', 'Koduru',
      'Mandavalli', 'Chandarlapadu', 'Chatrai', 'G.Konduru', 'Mopidevi', 'Kruthivennu'
    ],
    'West Godavari': [
      'Bhimavaram', 'Tadepalligudem', 'Tanuku', 'Nidadavole', 'Narasapuram', 'Palacole',
      'Kovvur', 'Gopalapuram', 'Akividu', 'Attili', 'Bhimadole', 'Denduluru', 'Eluru',
      'Ganapavaram', 'Iragavaram', 'Jangareddygudem', 'Jeelugumilli', 'Kamavarapukota',
      'Kalla', 'Koyyalagudem', 'Lingapalem', 'Mogalthur', 'Nidadavole', 'Pentapadu'
    ],
    'East Godavari': [
      'Rajahmundry Urban', 'Kakinada Urban', 'Tuni', 'Pithapuram', 'Amalapuram', 'Rampachodavaram',
      'Addateegala', 'Alamuru', 'Ambajipeta', 'Anaparthy', 'Biccavolu', 'Gangavaram',
      'Gokavaram', 'I. Polavaram', 'Kadiam', 'Kapileswarapuram', 'Karapa', 'Kirlampudi',
      'Korukonda', 'Kotananduru', 'Malikipuram', 'Mandapeta', 'Mummidivaram', 'P. Gannavaram'
    ],
    'Srikakulam': [
      'Srikakulam', 'Amadalavalasa', 'Palasa', 'Ichapuram', 'Narasannapeta', 'Sompeta',
      'Etcherla', 'Pathapatnam', 'Tekkali', 'Vajrapukothuru', 'Bhamini', 'Burja',
      'Ponduru', 'Gara', 'Hiramandalam', 'Jalumuru', 'Kaviti', 'Kanchili', 'Kotabommali',
      'Kothuru', 'Laveru', 'Meliaputti', 'Nandigam', 'Polaki', 'Rajam', 'Ranasthalam'
    ],
    'Vizianagaram': [
      'Vizianagaram', 'Bobbili', 'Parvathipuram', 'Salur', 'Bhogapuram', 'Cheepurupalle',
      'Gajapathinagaram', 'Nellimarla', 'Srungavarapukota', 'Balijipeta', 'Badangi',
      'Bondapalle', 'Denkada', 'Garugubilli', 'Gantyada', 'Jami', 'Komarada', 'Kothavalasa',
      'Kurupam', 'Lakkavarapukota', 'Mentada', 'Merakamudidam', 'Pachipenta', 'Pusapatirega'
    ],
    'Prakasam': [
      'Ongole', 'Chirala', 'Kandukur', 'Markapur', 'Giddalur', 'Addanki', 'Darsi',
      'Kanigiri', 'Podili', 'Yerragondapalem', 'Bestavaripeta', 'Cumbum', 'Chimakurthi',
      'Chirala', 'Donakonda', 'Inkollu', 'Jaladanki', 'J.Panguluru', 'Komarolu',
      'Korisapadu', 'Kurichedu', 'Maddipadu', 'Mundlamuru', 'Naguluppala Padu'
    ],
    'Eluru': [
      'Eluru', 'Jangareddygudem', 'Kovvur', 'Nidadavole', 'Denduluru', 'Chintalapudi',
      'Buttayagudem', 'Kamavarapukota', 'Gopalapuram', 'Polavaram', 'Kukunoor',
      'Unguturu', 'Lingapalem', 'Velairpadu', 'Yelamanchili', 'Jeelugumilli',
      'Kukkunuru', 'Chagallu', 'Koyyalagudem', 'T. Narasapuram', 'Kalla'
    ],
    'NTR District': [
      'Vijayawada East', 'Vijayawada West', 'Vijayawada Central', 'Vijayawada North',
      'Vijayawada South', 'Gannavaram', 'Jaggaiahpet', 'Nandigama', 'Ibrahimpatnam',
      'Mylavaram', 'Tiruvuru', 'Agiripalle', 'Chatrai', 'Gampalagudem', 'Kanchikacherla',
      'Kruthivennu', 'Pamarru', 'Penuganchiprolu', 'Vissannapet', 'Vuyyuru'
    ],
    'Bapatla': [
      'Bapatla', 'Chirala', 'Parchur', 'Addanki', 'Santhamaguluru', 'Karlapalem',
      'Martur', 'Ponnur', 'Cherukupalle', 'Inkollu', 'Nagaram', 'Pittalavanipalem',
      'Vemuru', 'Yeddanapudi', 'Amruthalur', 'Bhattiprolu', 'Karamchedu', 'Janakavarampanguluru'
    ],
    'Palnadu': [
      'Narasaraopet', 'Sattenapalle', 'Vinukonda', 'Gurazala', 'Chilakaluripet', 'Macherla',
      'Piduguralla', 'Rentachintala', 'Bellamkonda', 'Bollapalle', 'Dachepalle', 'Durgi',
      'Edlapadu', 'Ipur', 'Kakumanu', 'Karempudi', 'Krosuru', 'Muppalla', 'Nadendla',
      'Nuzendla', 'Pedakakani', 'Pedakurapadu', 'Phirangipuram', 'Rajupalem', 'Rompicherla'
    ],
    'Sri Sathya Sai': [
      'Puttaparthi', 'Dharmavaram', 'Hindupur', 'Penukonda', 'Kadiri', 'Bukkapatnam',
      'Amarapuram', 'Bathalapalle', 'Gorantla', 'Kanekal', 'Madakasira', 'Obuladevaracheruvu',
      'Parigi', 'Ramagiri', 'Roddam', 'Rolla', 'Somandepalle', 'Talupula', 'Yadiki'
    ],
    'Anakapalli': [
      'Anakapalle', 'Yelamanchili', 'Narsipatnam', 'Madugula', 'Chodavaram', 'Rambilli',
      'Sabbavaram', 'Rolugunta', 'Ravikamatham', 'Makavarapalem', 'Munchangiputtu',
      'K.Kotapadu', 'Kasimkota', 'Nakkapalle', 'Nathavaram', 'Payakaraopeta', 'Pedagantyada',
      'S.Rayavaram', 'Devarapalle', 'Butchayyapeta', 'Golugonda', 'Koyyuru'
    ],
    'Kakinada': [
      'Kakinada Urban', 'Kakinada Rural', 'Pithapuram', 'Tuni', 'Prathipadu', 'Samalkot',
      'Thondangi', 'Yeleswaram', 'Karapa', 'Peddapuram', 'Pithapuram', 'Ramachandrapuram',
      'Rowthulapudi', 'Sankhavaram', 'U.Kothapalli', 'Uppalaguptam', 'Kirlampudi',
      'Kotananduru', 'Vakalapudi', 'Jaggampeta', 'Korukonda'
    ],
    'Alluri Sitharama Raju': [
      'Paderu', 'Araku Valley', 'Chintapalle', 'G.Madugula', 'Dumbriguda', 'Hukumpeta',
      'Ananthagiri', 'Munchingiputtu', 'Pedabayalu', 'Koyyuru', 'Devarapalle', 'Kurupam',
      'Cheedikada', 'Gudem Kotha Veedhi', 'Nandapur', 'Rajavommangi', 'Gummalakshmipuram',
      'Maredumilli', 'Gangavaram', 'Y.Ramavaram', 'Addateegala', 'Rampachodavaram'
    ],
    'Parvathipuram Manyam': [
      'Parvathipuram', 'Palakonda', 'Veeraghattam', 'Komarada', 'Kurupam', 'Salur',
      'Bobbili', 'Gajapathinagaram', 'Balijipeta', 'Pachipenta', 'Mentada', 'Jami',
      'Garugubilli', 'Makkuva', 'Seethampeta', 'Seethanagaram', 'Gummalakshmipuram',
      'Therlam', 'Pachipenta', 'Bondapalle', 'Gantyada', 'Lakkavarapukota'
    ],
    'Nandyal': [
      'Nandyal', 'Dhone', 'Allagadda', 'Banaganapalle', 'Koilkuntla', 'Srisailam', 'Atmakur',
      'Bandi Atmakur', 'Bethamcherla', 'Gospadu', 'Jupadu Bunglow', 'Kolimigundla',
      'Mahanandi', 'Nandavaram', 'Owk', 'Pagidyala', 'Pamulapadu', 'Peapally',
      'Rudravaram', 'Sanjamala', 'Sirivella', 'Uyyalawada', 'Velgode', 'Kodumur'
    ],
    'Sri Balaji': [
      'Tirupati', 'Chandragiri', 'Renigunta', 'Srikalahasti', 'Satyavedu', 'Sullurpeta',
      'Venkatagiri', 'Gudur', 'Naidupet', 'Rapur', 'Varadaiahpalem', 'Yerpedu',
      'Kalakada', 'Kota', 'Vijayapuram', 'Pichatur', 'Buchinaidu Kandriga', 'Thottambedu',
      'K.V.B.Puram', 'Ramachandrapuram', 'Balaji Nagar', 'Mamandur', 'Nagalapuram'
    ]
  };

  const filteredMandals = selectedDistrict && mandalsByDistrict[selectedDistrict]
    ? mandalsByDistrict[selectedDistrict].filter(mandal =>
        mandal.toLowerCase().includes(mandalSearch.toLowerCase())
      )
    : [];

  const propertyCategories = [
    { id: 'house', label: 'INDEPENDENT HOUSE', icon: '🏠' },
    { id: 'apartment', label: 'APARTMENT', icon: '🏢' },
    { id: 'villa', label: 'VILLAS', icon: '🏡' },
    { id: 'plot', label: 'OPEN PLOTS', icon: '🌿' },
    { id: 'farmhouse', label: 'FARM HOUSE', icon: '🌾' },
    { id: 'commercial', label: 'COMMERCIAL', icon: '🏪' },
    { id: 'industrial', label: 'INDUSTRIAL', icon: '🏭' },
    { id: 'acres', label: 'ACRES', icon: '🌍' },
    { id: 'development', label: 'LAND DEVELOPMENT', icon: '🏗' },
  ];

  const serviceCategories = [
    { id: 'construction', label: 'CONSTRUCTION', icon: '🧱' },
    { id: 'interior', label: 'INTERIOR', icon: '🛋' },
    { id: 'legal', label: 'LEGAL', icon: '⚖️' },
    { id: 'loans', label: 'LOANS', icon: '💰' },
    { id: 'vasthu', label: 'VASTHU', icon: '🕉' },
  ];

  const privateAds = [
    { id: 1, image: 'https://images.unsplash.com/photo-1763479169474-728a7de108c3?w=800', title: 'Luxury Properties' },
    { id: 2, image: 'https://images.unsplash.com/photo-1761877676991-3009fb952540?w=800', title: 'Modern Apartments' },
    { id: 3, image: 'https://images.unsplash.com/photo-1750248064630-7f799c94dc93?w=800', title: 'Villa Collection' },
    { id: 4, image: 'https://images.unsplash.com/photo-1764118811041-712974fea74c?w=800', title: 'New Developments' },
    { id: 5, image: 'https://images.unsplash.com/photo-1758298030677-93e545d69a64?w=800', title: 'Premium Interiors' },
    { id: 6, image: 'https://images.unsplash.com/photo-1705237557548-bfb1597caca4?w=800', title: 'Gated Communities' },
    { id: 7, image: 'https://images.unsplash.com/photo-1647043773089-30a8bb2be269?w=800', title: 'Expert Agents' },
    { id: 8, image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800', title: 'Investment Opportunities' },
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Hyderabad Property Market Sees 15% Growth in Q1 2026',
      source: 'Times of India',
      date: 'Feb 20, 2026',
      image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?w=400',
    },
    {
      id: 2,
      title: 'New RERA Guidelines for Real Estate Developers',
      source: 'Economic Times',
      date: 'Feb 18, 2026',
      image: 'https://images.unsplash.com/photo-1580741990231-4aa1c1d9a76a?w=400',
    },
  ];

  return (
    <div className="min-h-screen bg-white max-w-[390px] mx-auto pb-20">
      {/* Top Navigation Bar */}
      <div className="bg-[#0088CC] py-4 px-4 flex items-center justify-between shadow-lg sticky top-0 z-30">
        {/* Logo */}
        <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
          <span className="text-lg font-bold text-[#CC0000] bg-white w-8 h-8 rounded-full flex items-center justify-center">
            1
          </span>
        </div>

        {/* Center: Brand Name + Location */}
        <div className="flex items-center space-x-2">
          <h1 className="text-white font-bold text-sm font-['Poppins']">
            REALESTATE NO.1.com
          </h1>
          <button
            onClick={() => setShowLocationSelector(true)}
            className="hover:scale-110 transition-transform"
          >
            <img src={locationIcon} alt="Location" className="w-8 h-8" />
          </button>
        </div>

        {/* Settings Icon */}
        <button
          onClick={() => setShowSettings(true)}
          className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors"
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-4 bg-[#F8F9FA]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4A47A3]" />
          <Input
            type="text"
            placeholder="Search properties, areas, services..."
            className="w-full pl-10 pr-12 py-3 border-2 border-[#4A47A3] rounded-lg bg-white"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4A47A3]">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Private Advertisement Carousel */}
      <div className="px-4 py-4 bg-white">
        <div className="relative overflow-hidden rounded-xl shadow-lg border-2 border-[#0088CC]">
          {/* Main Ad Display - Single Image */}
          <div className="relative h-40 bg-gradient-to-r from-[#0088CC] to-[#00AAFF]">
            <div className="absolute inset-0 overflow-hidden">
              <ImageWithFallback
                src={privateAds[currentAdIndex].image}
                alt={privateAds[currentAdIndex].title}
                className="w-full h-40 object-cover transition-opacity duration-700"
                fallbackText={privateAds[currentAdIndex].title}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white font-bold text-sm font-['Poppins']">{privateAds[currentAdIndex].title}</p>
              </div>
            </div>
          </div>

          {/* Ad Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {privateAds.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAdIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentAdIndex === index 
                    ? 'bg-white w-6' 
                    : 'bg-white/50 w-2'
                }`}
              />
            ))}
          </div>

          {/* "Private Ads" Badge */}
          <div className="absolute top-2 right-2 bg-[#D4A017] text-white text-xs px-3 py-1 rounded-full font-bold shadow-md">
            PRIVATE ADS
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 space-y-8">
        {/* EXPLORE PROPERTIES Section */}
        <div>
          <div className="flex items-center mb-4">
            <div className="w-1 h-6 bg-[#4A47A3] mr-3"></div>
            <h2 className="text-lg font-bold text-[#1A1A2E] font-['Poppins']">
              EXPLORE PROPERTIES
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {propertyCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => navigate(`/properties/${category.id}`)}
                className="bg-white border-2 border-[#4A47A3] rounded-xl p-4 flex flex-col items-center space-y-2 hover:shadow-lg transition-shadow"
              >
                <span className="text-3xl">{category.icon}</span>
                <span className="text-[10px] font-bold text-[#CC0000] text-center font-['Poppins'] leading-tight">
                  {category.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* EXPLORE SERVICES Section */}
        <div>
          <div className="flex items-center mb-4">
            <div className="w-1 h-6 bg-[#D4A017] mr-3"></div>
            <h2 className="text-lg font-bold text-[#1A1A2E] font-['Poppins']">
              EXPLORE SERVICES
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {serviceCategories.slice(0, 3).map((service) => (
              <button
                key={service.id}
                onClick={() => navigate('/service-request')}
                className="bg-white border-t-4 border-[#CC0000] shadow-md rounded-xl p-4 flex flex-col items-center space-y-2 hover:shadow-lg transition-shadow"
              >
                <span className="text-3xl">{service.icon}</span>
                <span className="text-[10px] font-bold text-[#0088CC] text-center font-['Poppins'] leading-tight">
                  {service.label}
                </span>
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 mt-3">
            {serviceCategories.slice(3).map((service) => (
              <button
                key={service.id}
                onClick={() => navigate('/service-request')}
                className="bg-white border-t-4 border-[#CC0000] shadow-md rounded-xl p-4 flex flex-col items-center space-y-2 hover:shadow-lg transition-shadow"
              >
                <span className="text-3xl">{service.icon}</span>
                <span className="text-[10px] font-bold text-[#0088CC] text-center font-['Poppins'] leading-tight">
                  {service.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* NEWS & PROPERTY UPDATES Section */}
        <div>
          <h2 className="text-lg font-bold text-[#1A1A2E] mb-4 font-['Poppins']">
            Latest Property News
          </h2>
          <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
            {newsArticles.map((article) => (
              <div
                key={article.id}
                className="flex-shrink-0 w-72 bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-md"
              >
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 object-cover"
                  fallbackText="property news"
                />
                <div className="p-4">
                  <h3 className="font-bold text-[#1A1A2E] text-sm mb-2 line-clamp-2 font-['Poppins']">
                    {article.title}
                  </h3>
                  <div className="flex justify-between items-center text-xs text-[#6B6B8A]">
                    <span>{article.source}</span>
                    <span>{article.date}</span>
                  </div>
                  <button 
                    onClick={() => navigate('/news')}
                    className="text-[#CC0000] text-sm font-medium mt-2 hover:underline"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROPERTY VIDEOS Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-[#1A1A2E] font-['Poppins']">
              Property Videos
            </h2>
            <button
              onClick={() => navigate('/videos')}
              className="text-sm text-[#0088CC] font-medium hover:underline"
            >
              View All →
            </button>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
            {[1, 2, 3].map((video) => (
              <div
                key={video}
                className="flex-shrink-0 w-56 cursor-pointer"
                onClick={() => navigate('/videos')}
              >
                <div className="relative rounded-xl overflow-hidden shadow-md">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-${1515263487990 + video}?w=400`}
                    alt={`Video ${video}`}
                    className="w-full h-32 object-cover"
                    fallbackText="property video"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#CC0000] rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  {video === 1 && (
                    <div className="absolute top-2 right-2 bg-[#D4A017] text-white text-xs px-2 py-1 rounded-full font-bold">
                      Featured
                    </div>
                  )}
                </div>
                <p className="text-sm font-medium text-[#1A1A2E] mt-2 font-['Poppins']">
                  Luxury Villa Tour - Gachibowli
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ad Banner */}
        <div className="border-2 border-dashed border-[#4A47A3] rounded-lg p-8 text-center">
          <p className="text-[10px] text-[#6B6B8A] mb-2">Advertisement</p>
          <div className="flex items-center justify-center">
            <span className="text-[#4A47A3] font-medium">Google AdSense Placeholder</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0088CC] max-w-[390px] mx-auto shadow-lg">
        <div className="flex items-center justify-around py-3 px-2">
          <button
            onClick={() => setCurrentTab('home')}
            className="flex flex-col items-center space-y-1"
          >
            <Home className={`w-6 h-6 ${currentTab === 'home' ? 'text-[#D4A017]' : 'text-white'}`} />
            <span className={`text-[10px] ${currentTab === 'home' ? 'text-[#D4A017]' : 'text-white'}`}>HOME</span>
            {currentTab === 'home' && <div className="w-1 h-1 bg-[#D4A017] rounded-full"></div>}
          </button>

          <button
            onClick={() => {
              setCurrentTab('news');
              navigate('/news');
            }}
            className="flex flex-col items-center space-y-1"
          >
            <Newspaper className={`w-6 h-6 ${currentTab === 'news' ? 'text-[#D4A017]' : 'text-white'}`} />
            <span className={`text-[10px] ${currentTab === 'news' ? 'text-[#D4A017]' : 'text-white'}`}>NEWS</span>
          </button>

          <button
            onClick={() => navigate('/post-property')}
            className="relative -top-4"
          >
            <div className="w-14 h-14 bg-[#CC0000] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <Plus className="w-8 h-8 text-white" />
            </div>
          </button>

          <button
            onClick={() => {
              setCurrentTab('saved');
              navigate('/saved');
            }}
            className="flex flex-col items-center space-y-1"
          >
            <Bookmark className={`w-6 h-6 ${currentTab === 'saved' ? 'text-[#D4A017]' : 'text-white'}`} />
            <span className={`text-[10px] ${currentTab === 'saved' ? 'text-[#D4A017]' : 'text-white'}`}>SAVED</span>
          </button>

          <button
            onClick={() => {
              setCurrentTab('profile');
              navigate('/profile');
            }}
            className="flex flex-col items-center space-y-1"
          >
            <User className={`w-6 h-6 ${currentTab === 'profile' ? 'text-[#D4A017]' : 'text-white'}`} />
            <span className={`text-[10px] ${currentTab === 'profile' ? 'text-[#D4A017]' : 'text-white'}`}>PROFILE</span>
          </button>
        </div>
      </div>

      {/* Location Selector Modal */}
      {showLocationSelector && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center max-w-[390px] mx-auto">
          <div className="bg-white w-full max-h-[80vh] mt-20 rounded-t-2xl overflow-hidden">
            <div className="bg-[#0088CC] p-4 flex justify-between items-center">
              <h3 className="text-white font-bold font-['Poppins']">Choose Location</h3>
              <button onClick={() => setShowLocationSelector(false)} className="text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-4 overflow-y-auto max-h-[calc(80vh-120px)] space-y-4">
              {/* State Dropdown */}
              <div>
                <label className="block text-sm font-semibold text-[#1A1A2E] mb-2 font-['Poppins']">
                  State <span className="text-[#CC0000]">*</span>
                </label>
                <div className="relative">
                  <select
                    value={selectedState}
                    onChange={(e) => {
                      setSelectedState(e.target.value);
                      setSelectedDistrict('');
                      setSelectedMandal('');
                    }}
                    className="w-full px-4 py-3 border-2 border-[#0088CC] rounded-lg appearance-none bg-white text-[#1A1A2E] font-medium focus:outline-none focus:ring-2 focus:ring-[#0088CC]"
                  >
                    <option value="Telangana">Telangana</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0088CC] pointer-events-none" />
                </div>
              </div>

              {/* District Dropdown */}
              <div>
                <label className="block text-sm font-semibold text-[#1A1A2E] mb-2 font-['Poppins']">
                  District <span className="text-[#CC0000]">*</span>
                </label>
                <div className="relative">
                  <select
                    value={selectedDistrict}
                    onChange={(e) => {
                      setSelectedDistrict(e.target.value);
                      setSelectedMandal('');
                      setMandalSearch('');
                    }}
                    className="w-full px-4 py-3 border-2 border-[#0088CC] rounded-lg appearance-none bg-white text-[#1A1A2E] font-medium focus:outline-none focus:ring-2 focus:ring-[#0088CC]"
                  >
                    <option value="">Select District</option>
                    {selectedState === 'Telangana' ? (
                      telanganaDistricts.map((district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      ))
                    ) : (
                      andhraDistricts.map((district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      ))
                    )}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0088CC] pointer-events-none" />
                </div>
              </div>

              {/* Mandal Dropdown with Search */}
              {selectedDistrict && (
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A2E] mb-2 font-['Poppins']">
                    Mandal / City / Town <span className="text-[#CC0000]">*</span>
                  </label>
                  
                  {/* Search Input */}
                  <div className="relative mb-2">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B8A]" />
                    <Input
                      type="text"
                      placeholder="Search mandal, city, or town..."
                      value={mandalSearch}
                      onChange={(e) => setMandalSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border-2 border-[#D1D5DB] rounded-lg text-sm focus:border-[#0088CC]"
                    />
                  </div>

                  {/* Mandal Scrollable List */}
                  <div className="border-2 border-[#0088CC] rounded-lg max-h-64 overflow-y-auto bg-white">
                    {filteredMandals.length > 0 ? (
                      filteredMandals.map((mandal) => (
                        <button
                          key={mandal}
                          onClick={() => {
                            setSelectedMandal(mandal);
                          }}
                          className={`w-full px-4 py-3 text-left hover:bg-[#F0F9FF] transition-colors border-b border-gray-100 last:border-b-0 ${
                            selectedMandal === mandal
                              ? 'bg-[#0088CC] text-white hover:bg-[#0088CC]'
                              : 'text-[#1A1A2E]'
                          }`}
                        >
                          <span className="font-medium text-sm">{mandal}</span>
                        </button>
                      ))
                    ) : (
                      <div className="px-4 py-8 text-center text-[#6B6B8A] text-sm">
                        {mandalSearch ? 'No mandals found' : 'Select a district to see mandals'}
                      </div>
                    )}
                  </div>

                  {/* Selected Location Display */}
                  {selectedMandal && (
                    <div className="mt-3 p-3 bg-[#F0F9FF] border border-[#0088CC] rounded-lg">
                      <p className="text-xs text-[#6B6B8A] mb-1">Selected Location:</p>
                      <p className="font-semibold text-[#0088CC] text-sm">
                        {selectedMandal}, {selectedDistrict}, {selectedState}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="p-4 border-t border-gray-200">
              <button
                onClick={() => setShowLocationSelector(false)}
                disabled={!selectedMandal}
                className={`w-full py-3 rounded-lg font-['Poppins'] font-medium transition-colors ${
                  selectedMandal
                    ? 'bg-[#0088CC] text-white hover:bg-[#0077BB]'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Apply Location
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Panel */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-end max-w-[390px] mx-auto">
          <div className="bg-white w-72 h-full shadow-lg animate-[slideIn_0.3s_ease-out]">
            <div className="bg-[#4A47A3] p-4 flex justify-between items-center">
              <h3 className="text-white font-bold font-['Poppins']">Settings</h3>
              <button onClick={() => setShowSettings(false)} className="text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              {/* Voice Calls */}
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#4A47A3]" />
                  <span className="text-[#1A1A2E] font-medium">Voice Calls</span>
                </div>
                <Switch
                  checked={settings.voiceCalls}
                  onCheckedChange={(checked) => setSettings({ ...settings, voiceCalls: checked })}
                  className="data-[state=checked]:bg-[#4A47A3]"
                />
              </div>

              {/* WhatsApp */}
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <span className="text-[#1A1A2E] font-medium">WhatsApp</span>
                </div>
                <Switch
                  checked={settings.whatsapp}
                  onCheckedChange={(checked) => setSettings({ ...settings, whatsapp: checked })}
                  className="data-[state=checked]:bg-green-600"
                />
              </div>

              {/* E-mail */}
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#4A47A3]" />
                  <span className="text-[#1A1A2E] font-medium">E-mail</span>
                </div>
                <Switch
                  checked={settings.email}
                  onCheckedChange={(checked) => setSettings({ ...settings, email: checked })}
                  className="data-[state=checked]:bg-[#4A47A3]"
                />
              </div>

              {/* SMS */}
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-[#4A47A3]" />
                  <span className="text-[#1A1A2E] font-medium">SMS</span>
                </div>
                <Switch
                  checked={settings.sms}
                  onCheckedChange={(checked) => setSettings({ ...settings, sms: checked })}
                  className="data-[state=checked]:bg-[#4A47A3]"
                />
              </div>

              {/* About Us */}
              <button 
                onClick={() => {
                  setShowSettings(false);
                  alert('About Real Estate No.1:\n\nHyderabad\'s Most Trusted Property Platform\n\nWe connect buyers, sellers, agents, and builders across Telangana and Andhra Pradesh.\n\nOffice: Plot no.100, TNGO\'s Colony, Phase-II, Gachibowli, Financial District, Hyderabad - 500046\n\nContact: 9618 404 505');
                }}
                className="flex items-center justify-between w-full py-3 border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Info className="w-5 h-5 text-[#0088CC]" />
                  <span className="text-[#1A1A2E] font-medium">About Us</span>
                </div>
                <ChevronDown className="w-5 h-5 text-[#6B6B8A] rotate-[-90deg]" />
              </button>

              {/* Contact Us */}
              <button 
                onClick={() => {
                  setShowSettings(false);
                  navigate('/profile');
                }}
                className="flex items-center justify-between w-full py-3 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#0088CC]" />
                  <span className="text-[#1A1A2E] font-medium">Contact Us</span>
                </div>
                <ChevronDown className="w-5 h-5 text-[#6B6B8A] rotate-[-90deg]" />
              </button>

              {/* Admin Access (Hidden) */}
              <button 
                onClick={() => {
                  setShowSettings(false);
                  navigate('/admin/login');
                }}
                className="flex items-center justify-between w-full py-3 mt-8 border-t-2 border-gray-300 hover:bg-red-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Settings className="w-5 h-5 text-red-600" />
                  <span className="text-red-600 font-medium text-sm">Admin Panel</span>
                </div>
                <ChevronDown className="w-5 h-5 text-red-600 rotate-[-90deg]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
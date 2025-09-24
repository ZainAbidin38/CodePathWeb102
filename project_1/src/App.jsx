import './App.css'
import MotorcycleCard from './components/MotorcycleCard'

const motorcycles = [
  {
    image: 'https://cdn-fastly.motorcycle.com/media/marketing_photos/2024/06/07/89059/social-44603218.jpg?size=1200x628',
    title: 'Honda CBR1000RR-R Fireblade SP',
    description: '1000cc, liquid-cooled inline four-cylinder four-stroke',
    link: 'https://powersports.honda.com/motorcycle/supersport/cbr1000rr-r-fireblade-sp/cbr1000rr-r-fireblade-sp'
  },

  {
    image: 'https://cdpcdn.dx1app.com/products/USA/YA/2025/MC/SUPERSPORT/YZF-R1/50/TEAM_YAMAHA_BLUE/2000000089.jpg',
    description: '998cc, liquid-cooled inline 4 cylinder DOHC; 4-valves per cylinder',
    title: 'Yamaha YZF-R1',
    link: 'https://yamahamotorsports.com/models/yzf-r1'
  },

  {
    image: 'https://cdn-fastly.motorcycle.com/media/2025/06/01/020247/media.jpg?size=1200x628',
    title: 'Kawasaki Ninja ZX-10R',
    description: '998cc, 4-stroke, in-line 4-cylinder, DOHC, 16-valve, liquid-cooled',
    link: 'https://www.kawasaki.com/en-us/motorcycle/ninja/supersport/ninja-zx-10r/2025-ninja-zx-10r'
  },

  {
    image: 'https://suzukicycles.com/-/media/project/cycles/images/products/motorcycles/gsx-r1000a/2025/gallery/gsx-r1000am5_qka_diagonal_2400x1600.png',
    title: 'Suzuki GSX-R1000',
    description: '999.8cc, 4-stroke, liquid-cooled, 4-cylinder, DOHC',
    link: 'https://suzukicycles.com/sportbike/2025/gsx-r1000#overview'
  },

  {
    image: 'https://cdn-fastly.motorcycle.com/media/2024/07/25/17581/2025-ducati-panigale-v4-and-v4-s-first-look.jpg?size=720x845&nocrop=1',
    title: 'Ducati Panigale V4',
    description: '1,103 cc, Desmosedici Stradale 90° V4, 4 Desmodromically actuated valves per cylinder, liquid cooled',
    link: 'https://www.ducati.com/us/en/bikes/panigale/panigale-v4'
  },

  {
    image: 'https://cdn-fastly.motorcycle.com/media/2024/10/30/13532/2025-bmw-s-1000-rr-first-look.jpg?size=720x845&nocrop=1',
    title: 'BMW S1000RR',
    description: '999 cc, Water/oil-cooled in-line four-cylinder, four-stroke engine with BMW ShiftCam',
    link: 'https://www.bmwmotorcycles.com/en/models/sport/s1000rr.html'
  },

  {
    image: 'https://cdn-fastly.motorcycle.com/media/marketing_photos/2024/11/06/89980/social-44611402.jpg?size=1200x628',
    title: 'Aprilia RSV4 Factory 1100',
    description: 'V4 (65°), 4 valves per cylinder, liquid-cooled with Ride-By-Wire',
    link: 'https://www.aprilia.com/us_EN/models/rsv4/rsv4-factory-1100-4s4v-2025/'
  },

  {
    image: 'https://www.cycleworld.com/resizer/_be89nAu2TlRwyVVMWgxldwzd_c=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/FDHNAR3D5VALJKESJTK3V2DHTE.jpg',
    title: 'MV Agusta F3',
    description: '800cc, 3-cylinder, 4-stroke, DOHC, 12-valve, liquid-cooled',
    link: 'https://www.mvagusta.com/us/en/models/f3'
  },

  {
    image: 'https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto:eco/sitecoremedialibrary/media-library/images/motorcycles/roadsters-supersports/daytona%20moto2%20765/usa%20versions/daytona-usa-20my-born-in-glory-highest-ever-specification-770x770px.jpg',
    title: 'Triumph Daytona Moto2 765',
    description: '765cc engine based on the Street Triple 765 and the chassis of the Daytona 675R',
    link: 'https://www.triumphmotorcycles.com/motorcycles/roadsters/daytona-moto2-765/limited-edition'
  },

  {
    image: 'https://cdn-fastly.motorcycle.com/media/2023/03/20/11135233/ktm-reveals-limited-production-rc-8c.jpg?size=720x845&nocrop=1',
    title: 'KTM RC 8C',
    description: '889cc, 2-cylinder, 4-stroke, parallel twin',
    link: 'https://www.ktm.com/en-us/models/supersport/2024-ktm-rc-8c.html'
  },
]

const App = () => {
  return (
    <div className='App'>
      <h1>Welcome to the Motorcycle Board</h1>
      <h3>This website is a clean and visually appealing motorcycle board designed for enthusiasts to explore a 
        curated selection of popular motorcycle models. Featuring a responsive grid layout, it displays detailed cards with 
        high-quality images, concise descriptions, and direct links to official manufacturer pages for each bike. 
        It serves as an accessible, user-friendly platform for discovering motorcycles, comparing key specs, 
        and accessing in-depth information with just a click — perfect for riders and fans seeking inspiration or detailed 
        product insights.</h3>
      <div className='motorcycle-board'>
        {motorcycles.map((bike, i) => (
          <MotorcycleCard 
          key={i} 
          image={bike.image} 
          title={bike.title} 
          description={bike.description}
          link={bike.link}/>
        ))}
      </div>
    </div>
  )
}

export default App

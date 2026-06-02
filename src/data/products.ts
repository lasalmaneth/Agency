export type Product = {
  slug: string;
  name: string;
  category: 'Batteries' | 'Torch products' | 'Torches' | 'LED Lighting';
  price: string;
  stock: string;
  specs: string[];
  highlight?: string;
};

const products: Product[] = [
  {
    slug: 'xl-automotive-80ah',
    name: 'XL Automotive Battery 12V 80Ah',
    category: 'Batteries',
    price: 'Rs 6,800',
    stock: '42 units',
    specs: ['Maintenance-free VRLA', 'Cold crank 720A', '24-month service support'],
    highlight: 'Best for SUVs and commercial vans'
  },
  {
    slug: 'deep-cycle-solar-150ah',
    name: 'Deep-Cycle Solar Battery 150Ah',
    category: 'Batteries',
    price: 'Rs 13,900',
    stock: '18 units',
    specs: ['Low self-discharge', '3000 cycles @ 50% DoD', 'Copper terminals for low heat'],
    highlight: 'Built for inverters and rooftop solar'
  },
  {
    slug: 'compact-led-torch',
    name: 'Compact LED Torch 1200 lm',
    category: 'Torches',
    price: 'Rs 1,150',
    stock: '75 units',
    specs: ['Aluminium body, IP54', 'Type-C fast charge', '3 lighting modes'],
    highlight: 'Pocket friendly, office and home ready'
  },
  {
    slug: 'industrial-spotlight',
    name: 'Industrial Spotlight 3000 lm',
    category: 'Torches',
    price: 'Rs 2,950',
    stock: '26 units',
    specs: ['Beam reach 350m', 'Shockproof housing', 'Replaceable 18650 cells'],
    highlight: 'Rugged build for field teams'
  },
  {
    slug: 'panel-light-36w',
    name: 'LED Panel Light 36W',
    category: 'LED Lighting',
    price: 'Rs 1,680',
    stock: '64 units',
    specs: ['4000K neutral white', 'PF > 0.95, low flicker', 'Aluminium frame, slim design'],
    highlight: 'Bright ceilings without glare'
  },
  {
    slug: 'bay-light-120w',
    name: 'High Bay Light 120W',
    category: 'LED Lighting',
    price: 'Rs 5,900',
    stock: '21 units',
    specs: ['160 lm/W efficiency', 'IK08 impact rated', 'Surge protection 6kV'],
    highlight: 'Warehouses, workshops, malls'
  },
  {
    slug: 'streetlight-75w',
    name: 'LED Streetlight 75W',
    category: 'LED Lighting',
    price: 'Rs 4,250',
    stock: '34 units',
    specs: ['10kV surge', 'Die-cast housing', 'Road-ready photometrics'],
    highlight: 'Outdoor-ready with long throw'
  }
  ,
  {
    slug: 'table-lamp-led',
    name: 'Table Lamp LED (Adjustable)',
    category: 'Torches',
    price: 'Rs 1,250',
    stock: '48 units',
    specs: ['Warm/Cool modes', 'Adjustable arm', 'USB-A power'],
    highlight: 'Perfect for desks and bedside'
  },
  {
    slug: 'dolphin-torch',
    name: 'Dolphin Torch (Ergo Slim)',
    category: 'Torches',
    price: 'Rs 1,050',
    stock: '62 units',
    specs: ['Ergonomic curved body', '2000 lm peak', 'IP65 water resistant'],
    highlight: 'Comfort grip with focused beam'
  },
  {
    slug: 'mini-pocket-torch',
    name: 'Mini Pocket Torch 600 lm',
    category: 'Torches',
    price: 'Rs 590',
    stock: '210 units',
    specs: ['Lightweight alloy', 'AAA / rechargeable options', '3 modes'],
    highlight: 'Carry-everyday compact torch'
  },
  {
    slug: 'budget-torch-basic',
    name: 'Budget Torch (Basic)',
    category: 'Torches',
    price: 'Rs 320',
    stock: '430 units',
    specs: ['Economy LED', 'Battery-included', 'Simple on/off'],
    highlight: 'Reliable, low-cost everyday light'
  }
];

export default products;

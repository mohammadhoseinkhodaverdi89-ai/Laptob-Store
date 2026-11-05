export interface GamingLaptop {
  readonly id: number;
  brand: string;
  model: string;
  year: number;
  cpu: string;
  gpu: string;
  ram: number;
  storage: number;
  display: number;
  refreshRate: number;
  price: number;
}

export const laptops: GamingLaptop[] = [
  { id: 1, brand: "ASUS", model: "ROG Strix G16", year: 2024, cpu: "i7-13650HX", gpu: "RTX 4060", ram: 16, storage: 512, display: 16, refreshRate: 165, price: 1250 },
  { id: 2, brand: "ASUS", model: "ROG Strix G18", year: 2024, cpu: "i9-14900HX", gpu: "RTX 4080", ram: 32, storage: 1000, display: 18, refreshRate: 240, price: 2400 },
  { id: 3, brand: "ASUS", model: "TUF Gaming A15", year: 2023, cpu: "Ryzen 7 7735HS", gpu: "RTX 4050", ram: 16, storage: 512, display: 15.6, refreshRate: 144, price: 850 },
  { id: 4, brand: "ASUS", model: "TUF Gaming F15", year: 2024, cpu: "i7-13620H", gpu: "RTX 4070", ram: 16, storage: 1000, display: 15.6, refreshRate: 144, price: 1350 },
  { id: 5, brand: "ASUS", model: "ROG Zephyrus G14", year: 2024, cpu: "Ryzen 9 8945HS", gpu: "RTX 4070", ram: 32, storage: 1000, display: 14, refreshRate: 120, price: 1900 },

  { id: 6, brand: "MSI", model: "Katana 15", year: 2023, cpu: "i7-13620H", gpu: "RTX 4060", ram: 16, storage: 512, display: 15.6, refreshRate: 144, price: 1050 },
  { id: 7, brand: "MSI", model: "Vector GP68", year: 2024, cpu: "i9-13950HX", gpu: "RTX 4080", ram: 32, storage: 1000, display: 16, refreshRate: 240, price: 2200 },
  { id: 8, brand: "MSI", model: "Cyborg 15", year: 2024, cpu: "i7-13620H", gpu: "RTX 4050", ram: 16, storage: 512, display: 15.6, refreshRate: 144, price: 900 },
  { id: 9, brand: "MSI", model: "Raider GE78", year: 2024, cpu: "i9-14900HX", gpu: "RTX 4090", ram: 32, storage: 2000, display: 17, refreshRate: 240, price: 3100 },
  { id: 10, brand: "MSI", model: "Stealth 16 Studio", year: 2023, cpu: "i7-13700H", gpu: "RTX 4070", ram: 32, storage: 1000, display: 16, refreshRate: 240, price: 1750 },

  { id: 11, brand: "Lenovo", model: "Legion Pro 5", year: 2024, cpu: "Ryzen 7 7745HX", gpu: "RTX 4070", ram: 16, storage: 1000, display: 16, refreshRate: 165, price: 1500 },
  { id: 12, brand: "Lenovo", model: "Legion Pro 7i", year: 2024, cpu: "i9-14900HX", gpu: "RTX 4090", ram: 32, storage: 2000, display: 16, refreshRate: 240, price: 2900 },
  { id: 13, brand: "Lenovo", model: "LOQ 15", year: 2024, cpu: "i5-13450HX", gpu: "RTX 4050", ram: 16, storage: 512, display: 15.6, refreshRate: 144, price: 800 },
  { id: 14, brand: "Lenovo", model: "Legion Slim 5", year: 2023, cpu: "Ryzen 7 7840HS", gpu: "RTX 4060", ram: 16, storage: 1000, display: 16, refreshRate: 165, price: 1150 },
  { id: 15, brand: "Lenovo", model: "LOQ 16", year: 2024, cpu: "i7-13620H", gpu: "RTX 4060", ram: 24, storage: 1000, display: 16, refreshRate: 144, price: 1100 },

  { id: 16, brand: "Acer", model: "Predator Helios Neo 16", year: 2024, cpu: "i7-14700HX", gpu: "RTX 4060", ram: 16, storage: 1000, display: 16, refreshRate: 165, price: 1250 },
  { id: 17, brand: "Acer", model: "Predator Helios 18", year: 2024, cpu: "i9-14900HX", gpu: "RTX 4080", ram: 32, storage: 2000, display: 18, refreshRate: 250, price: 2500 },
  { id: 18, brand: "Acer", model: "Nitro V 15", year: 2023, cpu: "i5-13420H", gpu: "RTX 4050", ram: 16, storage: 512, display: 15.6, refreshRate: 144, price: 750 },
  { id: 19, brand: "Acer", model: "Nitro 16", year: 2024, cpu: "Ryzen 7 7840HS", gpu: "RTX 4070", ram: 16, storage: 1000, display: 16, refreshRate: 165, price: 1400 },

  { id: 20, brand: "HP", model: "Victus 15", year: 2024, cpu: "i5-13420H", gpu: "RTX 4050", ram: 16, storage: 512, display: 15.6, refreshRate: 144, price: 800 },
  { id: 21, brand: "HP", model: "Omen 16", year: 2024, cpu: "i7-14700HX", gpu: "RTX 4070", ram: 32, storage: 1000, display: 16, refreshRate: 165, price: 1650 },
  { id: 22, brand: "HP", model: "Omen Transcend 16", year: 2023, cpu: "i9-13900HX", gpu: "RTX 4070", ram: 32, storage: 1000, display: 16, refreshRate: 240, price: 1850 },

  { id: 23, brand: "Dell", model: "Alienware m16 R2", year: 2024, cpu: "Core Ultra 9 185H", gpu: "RTX 4070", ram: 32, storage: 1000, display: 16, refreshRate: 240, price: 2000 },
  { id: 24, brand: "Dell", model: "G15 5530", year: 2023, cpu: "i7-13650HX", gpu: "RTX 4060", ram: 16, storage: 512, display: 15.6, refreshRate: 165, price: 1050 },
  { id: 25, brand: "Dell", model: "Alienware x16 R2", year: 2024, cpu: "Core Ultra 9 185H", gpu: "RTX 4080", ram: 32, storage: 1000, display: 16, refreshRate: 240, price: 2700 },

  { id: 26, brand: "Gigabyte", model: "AORUS 16X", year: 2024, cpu: "i7-13650HX", gpu: "RTX 4070", ram: 32, storage: 1000, display: 16, refreshRate: 165, price: 1600 },
  { id: 27, brand: "Gigabyte", model: "G5 KF", year: 2023, cpu: "i5-12500H", gpu: "RTX 4060", ram: 16, storage: 512, display: 15.6, refreshRate: 144, price: 900 },
  { id: 28, brand: "Gigabyte", model: "AORUS 17X", year: 2024, cpu: "i9-14900HX", gpu: "RTX 4090", ram: 32, storage: 2000, display: 17.3, refreshRate: 240, price: 3200 },

  { id: 29, brand: "ASUS", model: "ROG Strix SCAR 18", year: 2025, cpu: "i9-14900HX", gpu: "RTX 5090", ram: 64, storage: 2000, display: 18, refreshRate: 240, price: 4500 },
  { id: 30, brand: "Lenovo", model: "Legion 9i", year: 2025, cpu: "Core Ultra 9 275HX", gpu: "RTX 5080", ram: 32, storage: 2000, display: 16, refreshRate: 240, price: 3500 }
];

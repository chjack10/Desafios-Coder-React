const data = [
  {
    id: 'desktops-1',
    title:
      'PC Gamer Intel Core i3 10100F H510M-E 8GB SSD 240GB GT730 2GB 500W 80+ AUREOX PICTOR',
    description: {
      Microprocesador: 'INTEL 1200 CORE I3 10100F',
      Motherboard: 'ASUS 1200 PRIME H510M-E',
      Memoria: 'PATRIOT 8GB DDR4 3200MHZ SIGNATURE LINE PREMIUM',
      Disco: 'DISCO SOLIDO SSD 2.5 KINGSTON A400 240GB',
      Video: 'GT730 2GB DDR3 MSI',
      Fuente: 'FUENTE GAMER EVGA 500W 80+ WHITE',
      Gabinete: 'GABINETE GAMER AUREOX PICTOR ARX 370 G C/VENT',
    },
    price: 64655.17,
  },
  {
    id: 'desktops-2',
    title:
      'PC Gamer AMD Ryzen 5 4650G A520M-A 16GB SSD 480GB 450W 80+ AUREOX VOLANS',
    description: {
      Microprocesador: 'INTEL 1200 CORE I3 10100F',
      Motherboard: 'ASUS 1200 PRIME H510M-E',
      Memoria: 'PATRIOT 8GB DDR4 3200MHZ SIGNATURE LINE PREMIUM',
      Disco: 'DISCO SOLIDO SSD 2.5 KINGSTON A400 240GB',
      Video: 'GT730 2GB DDR3 MSI',
      Fuente: 'FUENTE GAMER EVGA 500W 80+ WHITE',
      Gabinete: 'GABINETE GAMER AUREOX PICTOR ARX 370 G C/VENT',
    },
    price: 78597.57,
  },
  {
    id: 'desktops-3',
    title:
      'PC Gamer Ryzen 5 4650G A520M-A 16GB SSD 240GB GTX 1650 4GB 600W 80+ AUREOX PICTOR',
    description: {
      PROCESADOR: 'PROCESADOR AMD AM4 Ryzen 5 4650G PRO OEM',
      MOTHERBOARD: 'MOTHERBOARD MSI A520M-A PRO sAM4 DDR4 (3ra-5ta Gen)',
      MEMORIA: 'MEMORIA DDR4 16GB 2666MHZ KINGSTON FURY BEAST',
      ALMACENAMIENTO: 'DISCO SOLIDO SSD 240GB',
      VIDEO: 'VIDEO GEFORCE GTX 1650 4GB DUAL PNY OEM',
      FUENTE: 'AEROCOOL CYLON 600W RGB 80 PLUS BRONZE',
      GABINETE: 'GABINETE GAMER AUREOX PICTOR ARX 370 G C/VENT',
    },
    price: 142420.72,
  },
  {
    id: 'desktops-4',
    title:
      'PC Gamer Intel Core i5 10400F B460M-A 16GB M.2 NVME 500GB DG1 4GB 500W 80+ K20 SUPER',
    description: {
      PROCESADOR: 'PROCESADOR INTEL 1200 CORE I5 10400F 2.9 GHZ',
      MOTHERBOARD: 'MOTHERBOARD ASUS PRIME B460M-A R2.0',
      MEMORIA: 'MEMORIA DDR4 16GB 2666MHZ KINGSTON FURY BEAST',
      ALMACENAMIENTO: 'DISCO SOLIDO SSD M.2 PNY XLR8 CS3040 500GB NVMe GEN3X4',
      VIDEO: 'VIDEO ASUS DG1-4G-SI INTEL 4GB',
      FUENTE: 'FUENTE ATX THERMALTAKE SMART 500W 80+ WHITE',
      GABINETE: 'GABINETE ATX SENTEY K20 SUPER RGB + VIDRIO TEMPLADO',
    },
    price: 97307.68,
  },
  {
    id: 'notebooks-1',
    title:
      'Notebook Gamer XPG XENIA i7 11va 32GB (2x16) M.2 NVMe 1TB RTX 3070 WINDOWS 10 HOME',
    description: {
      Marca: 'ADATA',
      Procesador:
        'Intel® Core ™ i7-11800H de 11.ª generación con 8 núcleos y 16 subprocesos',
      Memoria: 'XPG DDR4-3200 MHz de 32GB (2x16)',
      Disco: 'XPG GAMMIX S70 PCIe Gen 4x4 NVMe de 1TB',
      Video:
        'NVIDIA® GeForce® RTX™ 3070, con 8 GB GDDR6 (potencia de hasta 125 W)',
      Fuente: '94 Wh con soporte de carga rápida',
      SO: 'Windows 10 Home Advanced',
      Teclado: 'Mecánica óptica silenciosa Retroiluminación RGB por tecla',
      Pantalla: 'Panel IPS mate QHD (2560 x 1440) de 15,6" y 165 Hz',
      Bluetooth: 'Intel® Wi-Fi 6, AX201, Gigabit Ethernet, Bluetooth 5.2',
      HDMI: '1 x HDMI 2.1',
      USB3: '3 x USB 3.2 Gen 2 Tipo A',
      USBC: '1 x Thunderbolt™ 4 (Tipo-C / USB 4 / DP 1.4a)',
      Medidas: '233,8 x 356,4 x 20,5mm',
    },
    price: 379499.1,
  },
  {
    id: 'notebooks-2',
    title:
      'Notebook ThinkPad Lenovo T14S Intel® Core™ i5-10210U 8GB NVME 256GB Win 10',
    description: {
      Color: 'Black',
      atpc_videoports: 'HDMI',
      DiscoRígido: 'SSD 256GB',
      Marca: 'LENOVO',
      RAM: '8GB',
      Procesador: 'Intel® Core™ i5',
      Pantalla: '14 "',
      Video: 'Intel HD Graphics',
      Procesador: 'Intel',
      SO: 'Windows 10 Pro',
      Procesador: 'Core i5-10210U',
      Memoria: 'SODIMM DDR4 8GB',
      Disco: 'SSD NVME 256GB',
      Video: 'Intel HD Graphics',
      Peso: '1.5k',
      SO: 'Windows 10 Pro',
      Teclado: 'No',
      Pantalla: 'FHD',
      Bluetooth: 'Si',
      HDMI: 'Si',
    },
    price: 152999.99,
  },
  {
    id: 'notebooks-3',
    title: 'Notebook Lenovo IP3 14" AMD3050U 4gb 256ssd FDOS',
    description: {
      Marca: 'LENOVO',
      Procesador: 'Athlom 3050U 2.3Ghz',
      Memoria: '4GB 2666 SODIMM',
      Disco: 'ssd 256GB',
      Pantalla: '14" HD TN',
      Bluetooth: 'Si',
      HDMI: 'Si',
      USB2: 'Si',
      USB3: 'Si',
    },
    price: 70999.99,
  },
  {
    id: 'notebooks-4',
    title: 'Notebook 15" Lenovo V15 I3 4GB 1TB freeD',
    description: {
      Procesador: 'Intel Core i3-1005G1 (2C / 4T, 1.2 / 3.4GHz, 4MB)',
      Graficos: 'Intel UHD Graphics',
      Chipset: 'Intel SoC Platform',
      Memoria: '4GB',
      Disco: 'HDD 1 TB',
      Pantalla: '15.6" HD (1366x768) TN',
      Teclado: 'Español',
      Ethernet: 'No',
      Conectividad: 'WLAN + Bluetooth 11ac, 1x1 + BT4.2',
      Materia: 'PC / ABS',
      Camara: '0.3MP',
      Microfono: 'Mono',
      Teclado: 'Español',
      Bateria: '30Wh',
    },
    price: 82571.12,
  },
  {
    id: 'gadgets-1',
    title: 'AURICULAR CORSAIR HS35 Stereo Gaming Carbon PC/PS4/XBOX',
    description: {
      Cable_Length: '1,8 m',
      Model: 'HS35 estéreo',
      Color: 'Carbón',
      Audio: 'Estéreo',
      Lighting: 'Ninguno',
      Platform: 'PC, PS4, XBOX One, Nintendo Switch, dispositivos móviles',
      Microphone_Impedance: '2000 Ω',
      Microphone_Type: 'Cancelación de ruido unidireccional',
      Microphone_Frequency: 'Response De 100 Hz a 10 kHz',
      Microphone_Sensitivity: '-38dB (+/-3dB)',
    },
    price: 5599.0,
  },
  {
    id: 'gadgets-2',
    title: 'UH400Hub USB 4 puertos 3.0 TP-Link',
    description: {
      Dimensiones: '71 x 71 x 16.6 mm. (2.8 x 2.8 x 0.7 in)',
      Interfaz_de_salida: '4 Puertos USB 3.0',
      Interfaz_de_entrada: 'USB 3.0 Tipo-A',
      Chipset_VIA_VL812: 'Chipset con Último Firmware',
      Sistemas_compatibles_Windows: 'Mac OS X y sistemas Linux',
      Contenidos_del_paquete: 'UH400 Hub Portátil de 4 Puertos USB 3.0',
    },
    price: 1751.42,
  },
  {
    id: 'gadgets-3',
    title: 'PARLANTE LOGITECH S150 2.0 USB',
    description: {
      Altura: '6.22 in (158 mm)',
      Ancho: '2.68 in (68 mm)',
      Profundo: '2.52 in (64 mm)',
      Peso: '14.56 oz (0.4 kg)',
    },
    price: 1699.62,
  },
  {
    id: 'gadgets-4',
    title: 'WATER COOLER AZZA BLIZZARD 360MM ARGB',
    description: {
      Marca: 'AZZA',
      Procesador: 'AMD-Intel',
    },
    price: 24999.0,
  },
];

export default data;

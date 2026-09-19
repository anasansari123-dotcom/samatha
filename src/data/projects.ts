export type ProjectTab = {
  label: string;
  image: string;
  description: string;
  heading?: string;
};

export type Project = {
  title: string;
  location: string;
  category: string;
  image: string;
  description: string;
  specs: string[];
  tabs: ProjectTab[];
};

/** Order matches original carousel pages (Residential first). */
export const projects: Project[] = [
  {
    title: "Rooftop Solar Power Hybrid System Installation",
    location: "Hosa Road, Bengaluru",
    category: "Residential",
    image: "/project-real-2.png",
    description:
      "A 9 kW rooftop hybrid solar PV system installed at Hosa Road, Bengaluru with a 12 kVA hybrid inverter and 5 kWh lithium-ion LFP battery backup.",
    specs: [
      "Type: Hybrid Inverter",
      "Solar PV Capacity: 9 kW",
      "Hybrid Inverter: 12 kVA",
      "Lithium-ion LFP Battery: 5 kWh",
    ],
    tabs: [
      {
        label: "Project",
        heading: "Rooftop Solar Power Hybrid System Installation Project",
        image: "/project-real-2.png",
        description:
          "The project requirement was a hybrid solar system. Since the client did not have a permanent EB/Grid connection, the system was configured with zero export so electricity can be used from multiple sources: temporary grid/EB, solar, and battery.",
      },
      {
        label: "Solar PV",
        image: "/project-real-2.png",
        description:
          "The solar panels were securely mounted on the installed structure with proper spacing and alignment for maximum sunlight absorption.",
      },
      {
        label: "Hybrid Inverter",
        image: "/hybrid.jpg",
        description:
          "The hybrid inverter was installed to efficiently manage solar power generation, battery backup, and grid supply.",
      },
      {
        label: "Battery Backup",
        image: "/bettery.jpg",
        description:
          "The lithium-ion LFP battery backup was integrated with the hybrid inverter to support stored energy usage when solar or grid supply is limited.",
      },
      {
        label: "System Setup",
        image: "/systemstepup.jpg",
        description:
          "The final system setup was arranged for clean cable routing, accessible maintenance, and coordinated operation across solar PV, inverter, grid input, and battery storage.",
      },
    ],
  },
  {
    title: "Rooftop Solar Power System Installation",
    location: "Akshayanagar West, Bengaluru",
    category: "Residential",
    image: "/project-real-1.png",
    description:
      "A 3 kW rooftop on-grid solar power system installed at Akshayanagar West, Bengaluru to support daily residential electricity needs with efficient clean energy generation.",
    specs: [
      "Type: GTI Inverter",
      "Solar PV Capacity: 3 kW",
      "On-grid Inverter: 3 kW",
    ],
    tabs: [
      {
        label: "Project",
        heading: "Rooftop Solar Power System Installation Project",
        image: "/project-real-1.png",
        description:
          "A 3 kW rooftop solar power system was installed to provide efficient and sustainable energy for daily electricity needs. It helps reduce power costs, supports clean energy usage, and ensures reliable solar power generation for the residential house.",
      },
      {
        label: "Solar PV",
        image: "/solarpvc.jpg",
        description:
          "Rooftop PV modules positioned for dependable daytime generation using available roof space.",
      },
      {
        label: "On-Grid Inverter",
        image: "/ongrid.jpg",
        description:
          "On-grid inverter converts solar DC into usable AC and connects with the utility grid.",
      },
      {
        label: "System View",
        image: "/systemview.jpg",
        description:
          "Completed system view showing reliable generation layout and accessible installation details.",
      },
    ],
  },
  {
    title: "Commercial Rooftop Solar Power System Installation",
    location: "Turahalli",
    category: "Commercial",
    image: "/3.jpg",
    description:
      "A 20 kW rooftop on-grid solar power system installed at Turahalli for high-capacity and efficient energy generation.",
    specs: [
      "Type: GTI Inverter",
      "Solar PV Capacity: 20 kW",
      "On-grid Inverter: 20 kW",
    ],
    tabs: [
      {
        label: "Project",
        heading: "Commercial Rooftop Solar Power System Installation Project",
        image: "/3.jpg",
        description:
          "A 20 kW rooftop solar power system was installed to provide high-capacity and efficient energy generation for commercial and large residential applications. It helps reduce electricity expenses, supports sustainable energy usage, and ensures reliable power supply for daily operations.",
      },
      {
        label: "Solar PV",
        image: "/solarpv1.jpg",
        description:
          "Commercial rooftop array arranged for efficient generation, service access, and consistent module alignment.",
      },
      {
        label: "On-Grid Inverter",
        image: "/ongrid1.jpg",
        description:
          "20 kW on-grid inverter installed for high-capacity daytime generation and grid interconnection.",
      },
    ],
  },
  {
    title: "Residential Rooftop Solar Power System Installation",
    location: "Bengaluru",
    category: "Residential",
    image: "/project-real-3.png",
    description:
      "A 3 kW rooftop solar power system installed to provide efficient and reliable energy for daily residential electricity needs.",
    specs: [
      "Solar PV Capacity: 3 kW",
      "Application: Residential Rooftop",
    ],
    tabs: [
      {
        label: "Project",
        heading: "Residential Rooftop Solar Power System Installation Project",
        image: "/project-real-3.png",
        description:
          "A 3 kW rooftop solar power system was installed to provide efficient and reliable energy for daily electricity needs. It helps reduce electricity bills, supports clean energy usage, and ensures sustainable power generation for residential applications.",
      },
      {
        label: "Solar PV",
        image: "/solarpv2.jpg",
        description:
          "Residential rooftop modules installed for dependable daytime generation and reduced grid dependence.",
      },
      {
        label: "Installation",
        image: "/installation.jpg",
        description:
          "Installation completed with neat mounting structure, cable routing, and service access.",
      },
      {
        label: "System View",
        image: "/systemview2.jpg",
        description:
          "Final rooftop layout optimized for available roof space and reliable residential generation.",
      },
    ],
  },
];

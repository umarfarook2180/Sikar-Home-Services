// =============================================
// PROVIDERS DATA — Yahan apne actual providers add karo
// Har provider mein naam, phone number, experience update karo
// =============================================

const providers = {
    "ac-repair": {
        title: "❄️ AC Repair & Service Providers",
        list: [
            {
                name: "Farman Khan",
                initial: "F",
                rating: 4.9,
                reviews: 45,
                experience: "8 saal ka anubhav",
                phone: "9521873011",
                tags: ["LG Trained", "All Brands", "Same Day"],
                speciality: "AC Gas Refilling, Servicing, Repair"
            },
            {
                name: "Ramesh Sharma",
                initial: "R",
                rating: 4.7,
                reviews: 32,
                experience: "6 saal ka anubhav",
                phone: "9521873011",
                tags: ["Split AC", "Window AC", "Fast Service"],
                speciality: "AC Installation, Repair, Maintenance"
            },
            {
                name: "Suresh Kumar",
                initial: "S",
                rating: 4.8,
                reviews: 28,
                experience: "5 saal ka anubhav",
                phone: "9521873011",
                tags: ["Samsung", "Voltas", "Daikin"],
                speciality: "AC Compressor, Cooling Issues"
            },
            {
                name: "Mohd. Aslam",
                initial: "M",
                rating: 4.6,
                reviews: 19,
                experience: "4 saal ka anubhav",
                phone: "9521873011",
                tags: ["Affordable", "Genuine Parts", "Warranty"],
                speciality: "AC Full Service, Gas Charging"
            }
        ]
    },
    "electrician": {
        title: "⚡ Electrician Providers",
        list: [
            {
                name: "Farman Khan",
                initial: "F",
                rating: 4.9,
                reviews: 67,
                experience: "8 saal ka anubhav",
                phone: "9521873011",
                tags: ["LG Trained", "All Work", "Emergency"],
                speciality: "Wiring, Fitting, Short Circuit, MCB"
            },
            {
                name: "Vikram Singh",
                initial: "V",
                rating: 4.7,
                reviews: 41,
                experience: "7 saal ka anubhav",
                phone: "9521873011",
                tags: ["Industrial", "Residential", "Commercial"],
                speciality: "Panel Work, New Connection, Repair"
            },
            {
                name: "Deepak Meena",
                initial: "D",
                rating: 4.8,
                reviews: 35,
                experience: "5 saal ka anubhav",
                phone: "9521873011",
                tags: ["Fan Repair", "Light Fitting", "Switch"],
                speciality: "Home Wiring, Light, Fan, Switch"
            },
            {
                name: "Ajay Verma",
                initial: "A",
                rating: 4.5,
                reviews: 22,
                experience: "4 saal ka anubhav",
                phone: "9521873011",
                tags: ["Affordable", "Fast", "24x7"],
                speciality: "Emergency Electrical Repairs"
            },
            {
                name: "Ravi Choudhary",
                initial: "R",
                rating: 4.6,
                reviews: 18,
                experience: "3 saal ka anubhav",
                phone: "9521873011",
                tags: ["New Work", "Renovation", "Wiring"],
                speciality: "New House Wiring, Renovation Work"
            }
        ]
    },
    "plumber": {
        title: "🔧 Plumber Providers",
        list: [
            {
                name: "Salim Khan",
                initial: "S",
                rating: 4.8,
                reviews: 38,
                experience: "7 saal ka anubhav",
                phone: "9521873011",
                tags: ["Pipe Fitting", "Leakage", "Tank"],
                speciality: "Pipe Repair, Fitting, Water Leakage"
            },
            {
                name: "Govind Lal",
                initial: "G",
                rating: 4.7,
                reviews: 29,
                experience: "6 saal ka anubhav",
                phone: "9521873011",
                tags: ["Bathroom", "Kitchen", "Tank Repair"],
                speciality: "Bathroom Fitting, Tap, Shower Repair"
            },
            {
                name: "Manoj Kumar",
                initial: "M",
                rating: 4.6,
                reviews: 21,
                experience: "5 saal ka anubhav",
                phone: "9521873011",
                tags: ["Motor", "Boring", "Underground"],
                speciality: "Water Motor, Boring, Underground Pipe"
            }
        ]
    },
    "refrigerator": {
        title: "🧊 Refrigerator Repair Providers",
        list: [
            {
                name: "Farman Khan",
                initial: "F",
                rating: 4.9,
                reviews: 52,
                experience: "8 saal ka anubhav",
                phone: "9521873011",
                tags: ["All Brands", "LG", "Samsung", "Whirlpool"],
                speciality: "Cooling Problem, Compressor, Gas Refill"
            },
            {
                name: "Anil Sharma",
                initial: "A",
                rating: 4.7,
                reviews: 34,
                experience: "6 saal ka anubhav",
                phone: "9521873011",
                tags: ["Double Door", "Single Door", "Side by Side"],
                speciality: "Fridge Repair, PCB, Thermostat"
            },
            {
                name: "Irfan Ali",
                initial: "I",
                rating: 4.6,
                reviews: 27,
                experience: "5 saal ka anubhav",
                phone: "9521873011",
                tags: ["Affordable", "Genuine Parts", "Warranty"],
                speciality: "Refrigerator Full Repair, Servicing"
            },
            {
                name: "Sunil Meena",
                initial: "S",
                rating: 4.5,
                reviews: 15,
                experience: "4 saal ka anubhav",
                phone: "9521873011",
                tags: ["Fast Service", "Home Visit", "Same Day"],
                speciality: "Fridge Not Cooling, Ice Making Issues"
            }
        ]
    },
    "gas-stove": {
        title: "🔥 Gas Stove Repair Providers",
        list: [
            {
                name: "Hamid Khan",
                initial: "H",
                rating: 4.8,
                reviews: 43,
                experience: "7 saal ka anubhav",
                phone: "9521873011",
                tags: ["All Brands", "Gas Pipe", "Burner"],
                speciality: "Gas Stove Repair, Burner Cleaning, Pipe"
            },
            {
                name: "Prakash Gupta",
                initial: "P",
                rating: 4.7,
                reviews: 31,
                experience: "5 saal ka anubhav",
                phone: "9521873011",
                tags: ["Hob", "Chimney", "Auto Ignition"],
                speciality: "Modular Kitchen, Hob, Chimney Repair"
            },
            {
                name: "Raju Bhai",
                initial: "R",
                rating: 4.6,
                reviews: 25,
                experience: "4 saal ka anubhav",
                phone: "9521873011",
                tags: ["Affordable", "Fast", "All Types"],
                speciality: "Gas Stove, Cylinder Regulator, Pipe"
            }
        ]
    },
    "washing-machine": {
        title: "🫧 Washing Machine Repair Providers",
        list: [
            {
                name: "Farman Khan",
                initial: "F",
                rating: 4.9,
                reviews: 38,
                experience: "8 saal ka anubhav",
                phone: "9521873011",
                tags: ["LG", "Samsung", "Whirlpool", "IFB"],
                speciality: "Washing Machine Full Repair, PCB, Motor"
            },
            {
                name: "Naeem Khan",
                initial: "N",
                rating: 4.7,
                reviews: 28,
                experience: "5 saal ka anubhav",
                phone: "9521873011",
                tags: ["Front Load", "Top Load", "Semi Auto"],
                speciality: "Drum, Bearing, Water Inlet, Drain"
            },
            {
                name: "Kiran Sharma",
                initial: "K",
                rating: 4.6,
                reviews: 19,
                experience: "4 saal ka anubhav",
                phone: "9521873011",
                tags: ["Affordable", "Genuine Parts", "Warranty"],
                speciality: "Washing Machine Servicing, Error Codes"
            }
        ]
    }
};

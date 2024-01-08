const destinations = [
    {
        id: 1,
        location: 'Paris, France',
        img: '/assets/images/destinations/paris.jpg',
        info: 'Paris is the capital city of France and is known for its art, fashion, and culture. Paris, often called the City of Lights, is a hub for gastronomy, boasting exquisite cuisine and renowned culinary experiences. Its iconic landmarks, including the Notre-Dame Cathedral and the historic Montmartre district, add to the citys allure. Additionally, Paris hosts world-class museums such as the Musée dOrsay, showcasing remarkable art collections and cultural treasures.',
        topLocations: [
            {
                id: 1,
                name: 'Eiffel Tower',
                img: '/assets/images/destinations/eiffel.jpg',
                location: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France',
                info: 'The Eiffel Tower is a wrought-iron lattice tower and one of the most recognizable landmarks in the world.'
            },
            {
                id: 2,
                name: 'Louvre Museum',
                img: '/assets/images/destinations/louvre.jpg',
                location: 'Rue de Rivoli, 75001 Paris, France',
                info: 'The Louvre Museum is the world’s largest art museum and a historic monument in Paris. It houses a vast collection of art, including the Mona Lisa and the Venus de Milo.'
            },
            {
                id: 3,
                name: 'Montmartre',
                img: '/assets/images/destinations/montmartre.jpg',
                location: 'Montmartre, 75018 Paris, France',
                info: 'Montmartre is a historic district known for its bohemian vibe and artistic heritage. The area features the iconic Sacré-Cœur Basilica and charming streets filled with artists and cafes.'
            },
            {
                id: 4,
                name: 'Notre-Dame Cathedral',
                img: '/assets/images/destinations/notre_dame.jpg',
                location: '6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, France',
                info: 'The Notre-Dame Cathedral is a masterpiece of Gothic architecture and a symbol of Paris. It boasts stunning stained glass windows and intricate sculptures.'
            },
        ]
    },
    {
        id: 2,
        location: 'Tokyo, Japan',
        img: '/assets/images/destinations/eiffel.jpg',
        info: 'Tokyo, a city where ancient traditions harmoniously coexist with cutting-edge technology, captivates visitors with its vibrant energy and eclectic neighborhoods. The citys dedication to innovation reflects in its efficient transportation systems and futuristic architecture. Embracing a rich cultural heritage, Tokyo delights tourists with serene gardens, revered shrines, and a dynamic culinary scene showcasing both traditional delicacies and innovative dining experiences.',
        topLocations: [
            {
                id: 1,
                name: 'Senso-ji Temple',
                img: '/assets/images/destinations/eiffel.jpg',
                location: '2 Chome-3-1 Asakusa, Taito City, Tokyo 111-0032, Japan',
                info: 'Senso-ji is Tokyo’s oldest temple, offering visitors a glimpse into the city’s rich history.'
            },
            {
                id: 2,
                name: 'Eiffel Tower',
                img: '/assets/images/destinations/eiffel.jpg',
                location: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France',
                info: 'The Eiffel Tower is a wrought-iron lattice tower and one of the most recognizable landmarks in the world.'
            },
            {
                id: 3,
                name: 'Montmartre',
                img: '/assets/images/topLocations/montmartre.jpg',
                location: 'Montmartre, 75018 Paris, France',
                info: 'Montmartre is a historic district known for its bohemian vibe and artistic heritage. The area features the iconic Sacré-Cœur Basilica and charming streets filled with artists and cafes.'
            },

        ]
    },
    {
        id: 3,
        location: 'Rome, Italy',
        img: '/assets/images/destinations/rome.jpg',
        info: 'Rome is a city filled with history, from the Colosseum to the Roman Forum. Indulge in delicious Italian cuisine and immerse yourself in centuries of art and architecture.',
        topLocations: [
            {
                id: 1,
                name: 'Colosseum',
                img: '/assets/images/topLocations/colosseum.jpg',
                location: 'Piazza del Colosseo, 1, 00184 Roma RM, Italy',
                info: 'The Colosseum is an ancient amphitheater, a remarkable symbol of Roman engineering and a UNESCO World Heritage Site.'
            },
            {
                id: 2,
                name: 'Roman Forum',
                img: '/assets/images/topLocations/roman_forum.jpg',
                location: 'Via della Salara Vecchia, 5/6, 00186 Roma RM, Italy',
                info: 'The Roman Forum, a monumental plaza, was the heart of ancient Rome, featuring ruins of various important buildings and temples.'
            },
            // Add more top locations with their details for Rome
        ]
    },
    {
        id: 4,
        location: 'New York City, USA',
        img: '/assets/images/destinations/nyc.jpg',
        info: 'New York City is a vibrant melting pot of cultures. Experience the hustle and bustle of Times Square, visit world-class museums, and enjoy diverse cuisines.',
        topLocations: [
            {
                id: 1,
                name: 'Times Square',
                img: '/assets/images/topLocations/times_square.jpg',
                location: 'Manhattan, NY 10036, United States',
                info: 'Times Square is a bustling commercial hub known for its neon lights, theaters, and entertainment options.'
            },
            {
                id: 2,
                name: 'Central Park',
                img: '/assets/images/topLocations/central_park.jpg',
                location: 'New York, NY, United States',
                info: 'Central Park is an urban oasis offering recreational activities, scenic landscapes, and cultural landmarks in the heart of NYC.'
            },
            // Add more top locations with their details for New York City
        ]
    },
];

export default destinations
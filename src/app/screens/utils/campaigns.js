const campaigns = [
    {
        photo: "",
        campaign_title: "Heart Surgery for Tim",
        campaign_description: "Raising funds for Tim's urgent heart surgery.",
        campaign_category: "Health",
        amount: 30000.00,
        fundraiser_id: "FR20001",
        is_team: false,
        team_id: "",
        start_date: "2024-03-01",
        start_time: "08:00:00 UTC",
        end_date: "2024-09-30",
        end_time: "20:00:00 UTC",
        progress: 15000.00,
        percentage: 50.00,
        is_complete: false,
        location: "Accra, Ghana"
        },
        {
        photo: "",
        campaign_title: "Scholarships for STEM",
        campaign_description: "Providing scholarships for underprivileged students in STEM fields.",
        campaign_category: "Education",
        amount: 20000.00,
        fundraiser_id: "FR20002",
        is_team: true,
        team_id: "TM20002",
        start_date: "2024-06-15",
        start_time: "09:00:00 UTC",
        end_date: "2024-11-15",
        end_time: "18:00:00 UTC",
        progress: 10000.00,
        percentage: 50,
        is_complete: false,
        location: "Lagos, Nigeria"
        },
        {
        photo: "",
        campaign_title: "Tech Hub Incubator",
        campaign_description: "Funding a space for startups to collaborate and innovate.",
        campaign_category: "Business",
        amount: 100000.00,
        fundraiser_id: "FR20003",
        is_team: true,
        team_id: "TM20003",
        start_date: "2024-01-10",
        start_time: "10:00:00 UTC",
        end_date: "2024-12-10",
        end_time: "16:00:00 UTC",
        progress: 60000.00,
        percentage: 60.00,
        is_complete: false,
        location: "Nairobi, Kenya"
        },
        {
        photo: "",
        campaign_title: "Wildlife Rescue Center",
        campaign_description: "Help us build a rescue center for injured wildlife.",
        campaign_category: "Animal Welfare",
        amount: 75000.00,
        fundraiser_id: "FR20004",
        is_team: false,
        team_id: "",
        start_date: "2023-03-18",
        start_time: "07:30:00 UTC",
        end_date: "2024-08-18",
        end_time: "19:45:00 UTC",
        progress: 37500.00,
        percentage: 50.00,
        is_complete: false,
        location: "Bamako, Mali"
        },
        {
        photo: "",
        campaign_title: "Mobile Library Project",
        campaign_description: "Expanding access to books in remote communities.",
        campaign_category: "Education",
        amount: 50000.00,
        fundraiser_id: "FR20005",
        is_team: true,
        team_id: "TM20005",
        start_date: "2024-02-14",
        start_time: "11:00:00 UTC",
        end_date: "2024-07-14",
        end_time: "17:00:00 UTC",
        progress: 40000.00,
        percentage: 80.00,
        is_complete: false,
        location: "Cairo, Egypt"
        },
        {
        photo: "",
        campaign_title: "Clean Water Initiative",
        campaign_description: "Bringing clean drinking water to drought-stricken areas.",
        campaign_category: "Environment",
        amount: 60000.00,
        fundraiser_id: "FR20006",
        is_team: false,
        team_id: "",
        start_date: "2024-04-22",
        start_time: "13:00:00 UTC",
        end_date: "2024-10-22",
        end_time: "21:30:00 UTC",
        progress: 55000.00,
        percentage: 91.67,
        is_complete: false,
        location: "Ouagadougou, Burkina Faso"
        },
        {
        photo: "",
        campaign_title: "Hurricane Relief Fund",
        campaign_description: "Aid for families affected by the recent hurricane.",
        campaign_category: "Disaster Relief",
        amount: 100000.00,
        fundraiser_id: "FR20007",
        is_team: true,
        team_id: "TM20007",
        start_date: "2024-08-25",
        start_time: "09:45:00 UTC",
        end_date: "2024-10-25",
        end_time: "22:30:00 UTC",
        progress: 90000.00,
        percentage: 90.00,
        is_complete: false,
        location: "Antananarivo, Madagascar"
        },
        {
        photo: "",
        campaign_title: "Urban Green Space",
        campaign_description: "Creating a community garden for urban residents.",
        campaign_category: "Community",
        amount: 20000.00,
        fundraiser_id: "FR20008",
        is_team: true,
        team_id: "TM20008",
        start_date: "2024-09-01",
        start_time: "08:30:00 UTC",
        end_date: "2024-11-30",
        end_time: "18:00:00 UTC",
        progress: 17500.00,
        percentage: 87.5,
        is_complete: false,
        location: "Niamey, Niger"
        },
        {
        photo: "",
        campaign_title: "Art for Everyone",
        campaign_description: "Supporting free art exhibits in local communities.",
        campaign_category: "Arts & Culture",
        amount: 30000.00,
        fundraiser_id: "FR20009",
        is_team: false,
        team_id: "",
        start_date: "2024-07-15",
        start_time: "10:15:00 UTC",
        end_date: "2024-12-15",
        end_time: "20:45:00 UTC",
        progress: 21000.00,
        percentage: 70.00,
        is_complete: false,
        location: "Addis Ababa, Ethiopia"
        },
        {
        photo: "",
        campaign_title: "Solar Panel Project",
        campaign_description: "Funding solar panels for a sustainable future.",
        campaign_category: "Energy",
        amount: 80000.00,
        fundraiser_id: "FR20010",
        is_team: true,
        team_id: "TM20010",
        start_date: "2024-06-01",
        start_time: "12:00:00 UTC",
        end_date: "2024-12-01",
        end_time: "18:00:00 UTC",
        progress: 76000.00,
        percentage: 50,
        is_complete: 95.00,
        location: "Dakar, Senegal"
        },
        {
        photo: "",
        campaign_title: "Help Our Heroes",
        campaign_description: "Providing support and resources for veterans.",
        campaign_category: "Support",
        amount: 70000.00,
        fundraiser_id: "FR20011",
        is_team: true,
        team_id: "TM20011",
        start_date: "2024-05-30",
        start_time: "15:00:00 UTC",
        end_date: "2024-11-30",
        end_time: "21:00:00 UTC",
        progress: 35000.00,
        percentage: 50.00,
        is_complete: false,
        location: "New Jersey, USA"
        },
        {
        photo: "",
        campaign_title: "Code for Future",
        campaign_description: "Bootcamp for teaching coding to underprivileged youth.",
        campaign_category: "Education",
        amount: 40000.00,
        fundraiser_id: "FR20012",
        is_team: false,
        team_id: "",
        start_date: "2024-07-10",
        start_time: "08:45:00 UTC",
        end_date: "2024-12-10",
        end_time: "17:30:00 UTC",
        progress: 36000.00,
        percentage: 90.00,
        is_complete: false,
        location: "Kigali, Rwanda"
        },
        {
        photo: "",
        campaign_title: "Cancer Research Fund",
        campaign_description: "Advancing cancer research to find a cure.",
        campaign_category: "Health",
        amount: 1200000.00,
        fundraiser_id: "FR20013",
        is_team: true,
        team_id: "TM20013",
        start_date: "2024-03-01",
        start_time: "09:00:00 UTC",
        end_date: "2025-08-01",
        end_time: "20:00:00 UTC",
        progress: 600000.00,
        percentage: 50.00,
        is_complete: false,
        location: "Pretoria, South Africa"
        },
        {
        photo: "",
        campaign_title: "Youth Sports Gear",
        campaign_description: "Providing sports equipment for local youth teams.",
        campaign_category: "Sports",
        amount: 25000.00,
        fundraiser_id: "FR20014",
        is_team: false,
        team_id: "",
        start_date: "2024-08-15",
        start_time: "10:30:00 UTC",
        end_date: "2024-10-15",
        end_time: "19:00:00 UTC",
        progress: "13000.00",
        percentage: 52.00,
        is_complete: false,
        location: "Djibouti, Djibouti"
        },
        {
        photo: "",
        campaign_title: "Community Theater Revival",
        campaign_description: "Reviving our local theater with new productions.",
        campaign_category: "Entertainment",
        amount: 50000.00,
        fundraiser_id: "FR20015",
        is_team: false,
        team_id: "",
        start_date: "2024-04-20",
        start_time: "14:30:00 UTC",
        end_date: "2024-09-20",
        end_time: "23:00:00 UTC",
        progress: 35000.00,
        percentage: 70.00,
        is_complete: false,
        location: "Lomé, Togo"
        },
        {
        photo: "",
        campaign_title: "Melodies for All",
        campaign_description: "Free music lessons for children in low-income neighborhoods.",
        campaign_category: "Music",
        amount: 30000.00,
        fundraiser_id: "FR20016",
        is_team: true,
        team_id: "TM20016",
        start_date: "2024-02-20",
        start_time: "12:30:00 UTC",
        end_date: "2024-07-20",
        end_time: "18:30:00 UTC",
        progress: 27000.00,
        percentage: 90.00,
        is_complete: false,
        location: "Freetown, Liberia"
        },
        {
        photo: "",
        campaign_title: "Build the Bridge",
        campaign_description: "Connecting communities with a new pedestrian bridge.",
        campaign_category: "Infrastructure",
        amount: 150000.00,
        fundraiser_id: "FR20017",
        is_team: true,
        team_id: "TM20017",
        start_date: "2024-10-05",
        start_time: "13:30:00 UTC",
        end_date: "2025-03-05",
        end_time: "19:00:00 UTC",
        progress: 75000.00,
        percentage: 50.00,
        is_complete: false,
        location: "Dushanbe, Tajikistan"
        },
        {
        photo: "",
        campaign_title: "Digital Literacy Drive",
        campaign_description: "Teaching digital skills in rural areas.",
        campaign_category: "Technology",
        amount: 40000.00,
        fundraiser_id: "FR20018",
        is_team: false,
        team_id: "",
        start_date: "2024-11-10",
        start_time: "09:00:00 UTC",
        end_date: "2025-04-10",
        end_time: "17:00:00 UTC",
        progress: 20000.00,
        percentage: 50.00,
        is_complete: false,
        location: "N'Djamena, Chad"
        },
        {
        photo: "",
        campaign_title: "Nutrition for Everyone",
        campaign_description: "Educational program on healthy eating habits.",
        campaign_category: "Wellness",
        amount: 20000.00,
        fundraiser_id: "FR20019",
        is_team: false,
        team_id: "",
        start_date: "2024-01-15",
        start_time: "14:00:00 UTC",
        end_date: "2024-06-15",
        end_time: "20:00:00 UTC",
        progress: 19500.00,
        percentage: 97.50,
        is_complete: false,
        location: "Bangui,Central African Republic"
        },
        {
        photo: "",
        campaign_title: "Local Music Festival",
        campaign_description: "Supporting local artists by organizing a music festival.",
        campaign_category: "Entertainment",
        amount: 150000.00,
        fundraiser_id: "FR20020",
        is_team: true,
        team_id: "TM20020",
        start_date: "2024-05-20",
        start_time: "14:00:00 UTC",
        end_date: "2024-10-20",
        end_time: "22:00:00 UTC",
        progress: 90000.00,
        percentage: 60000.00,
        is_complete: false,
        location: "Pyongyang, North Korea"
        },
        {
            photo: "image1.jpg",
            campaign_title: "Innovative Solar Charger",
            campaign_description: "A portable and efficient solar charger to power all your devices on the go.",
            campaign_category: "Technology",
            amount: 50000.00,
            fundraiser_id: "FR12345",
            is_team: false,
            team_id: "",
            start_time: "2024-06-20",
            start_time: "12:00:00 UTC",
            end_date: "2024-12-20",
            end_time: "23:59:00 UTC",
            progress: 15000.00,
            percentage: 30.0,
            is_complete: false,
            location: "San Francisco, CA"
        },
        {
            photo: "image2.jpg",
            campaign_title: "Eco-Friendly Water Bottles",
            campaign_description: "Biodegradable water bottles that are good for you and the planet.",
            campaign_category: "Environment",
            amount: 25000.00,
            fundraiser_id: "FR54321",
            is_team: true,
            team_id: "TM98765",
            start_time: "2024-07-01",
            start_time: "08:00:00 UTC",
            end_date: "2024-09-30",
            end_time: "20:00:00 UTC",
            progress: 12500.00,
            percentage: 50.00,
            is_complete: false,
            location: "Austin, TX"
        },
        {
            photo: "image3.jpg",
            campaign_title: "Next-Gen Educational Toys",
            campaign_description: "Toys that change the way children learn and play.",
            campaign_category: "Education",
            amount: 75000.00,
            fundraiser_id: "FR67890",
            is_team: false,
            team_id: "",
            start_time: "2024-08-15",
            start_time: "09:30:00 UTC",
            end_date: "2024-11-15",
            end_time: "17:45:00 UTC",
            progress:37500.00,
            percentage:50.00, 
            is_complete:false,
            location: "New York, NY" 
        },
        {
            photo: "image4.jpg",
            campaign_title:"Art Studio Expansion",
            campaign_description: "Help us expand our studio to provide more classes and workshops.",
            campaign_category: "Arts",
            amount: 100000.00,
            fundraiser_id: "FR24680",
            is_team: true,
            team_id: "TM13579",
            start_time: "2024-09-10",
            start_time: "14:45:00 UTC",
            end_date: "2025-03-10",
            end_time: "18:30:00 UTC",
            progress: 50000.00,
            percentage: 50.00,
            is_complete: false,
            location: "Seattle, WA" 
        },
        {
            photo: "image8.jpg",
            campaign_title: "Desert Greening Project",
            campaign_description: "An initiative to combat desertification and promote sustainable agriculture in arid regions.",
            campaign_category: "Agriculture",
            amount: 120000.00,
            fundraiser_id: "FR88776",
            is_team: true,
            team_id: "TM99887",
            start_date: "2024-10-15",
            start_time: "15:00 UTC",
            end_date: "2025-04-15",
            end_time: "21:00 UTC",
            progress: 84000.00,
            percentage: 70.0,
            is_complete: false,
            location: "Dubai, UAE"
        },
        {
            photo: "image9.jpg",
            campaign_title: "Renewable Energy for Rural Villages",
            campaign_description: "Bringing solar and wind power to remote villages to improve living conditions.",
            campaign_category: "Energy",
            amount: 60000.00,
            fundraiser_id: "FR66554",
            is_team: false,
            team_id: "",
            start_date: "2024-11-20",
            start_time: "16:30 UTC",
            end_date: "2025-05-20",
            end_time: "18:00 UTC",
            progress: 42000.00,
            percentage: 70.0,
            is_complete: false,
            location: "Muscat, Oman"
        },
        {
            photo: "image10.jpg",
            campaign_title: "Tech Education Hub",
            campaign_description: "Establishing a technology education center to empower youth with digital skills.",
            campaign_category: "Education",
            amount: 90000.00,
            fundraiser_id: "FR22112",
            is_team: true,
            team_id: "TM33221",
            start_date: "2024-12-01",
            start_time: "10:00 UTC",
            end_date: "2025-06-01",
            end_time: "20:00 UTC",
            progress: 63000.00,
            percentage: 70.0,
            is_complete: false,
            location: "Riyadh, Saudi Arabia"
        },
        {
            photo: "image11.jpg",
            campaign_title: "Historical Site Restoration",
            campaign_description: "Reviving ancient historical sites for cultural preservation and tourism.",
            campaign_category: "Culture",
            amount: 50000.00,
            fundraiser_id: "FR44332",
            is_team: false,
            team_id: "",
            start_date: "2024-10-25",
            start_time: "09:00 UTC",
            end_date: "2025-04-25",
            end_time: "17:00 UTC",
            progress: 30000.00,
            percentage: 60.0,
            is_complete: false,
            location: "Baghdad, Iraq"
        },
        {
            photo: "image12.jpg",
            campaign_title: "Water Conservation Awareness Campaign",
            campaign_description: "A campaign to promote water conservation practices in drought-prone areas.",
            campaign_category: "Environment",
            amount: 30000.00,
            fundraiser_id: "FR55443",
            is_team: true,
            team_id: "TM44554",
            start_date: "2024-11-15",
            start_time: "12:30 UTC",
            end_date: "2025-05-15",
            end_time: "19:30 UTC",
            progress: 21000.00,
            percentage: 70.0,
            is_complete: false,
            location: "Amman, Jordan"
        },
        {
            photo: "image13.jpg",
            campaign_title: "Reviving Traditional Crafts",
            campaign_description: "A project to preserve and promote traditional European craftsmanship.",
            campaign_category: "Arts",
            amount: 40000.00,
            fundraiser_id: "FR66778",
            is_team: true,
            team_id: "TM88990",
            start_date: "2024-09-01",
            start_time: "08:00 UTC",
            end_date: "2025-03-01",
            end_time: "18:00 UTC",
            progress: 28000.00,
            percentage: 70.0,
            is_complete: false,
            location: "Florence, Italy"
        },
        {
            photo: "image14.jpg",
            campaign_title: "Clean Energy for Rural Areas",
            campaign_description: "Bringing clean and renewable energy solutions to rural communities in Europe.",
            campaign_category: "Environment",
            amount: 70000.00,
            fundraiser_id: "FR77889",
            is_team: false,
            team_id: "",
            start_date: "2024-10-15",
            start_time: "10:30 UTC",
            end_date: "2025-04-15",
            end_time: "16:00 UTC",
            progress: 49000.00,
            percentage: 70.0,
            is_complete: false,
            location: "Lyon, France"
        },
        {
            photo: "image15.jpg",
            campaign_title: "Urban Green Spaces Initiative",
            campaign_description: "Creating more green spaces in urban areas for community well-being and biodiversity.",
            campaign_category: "Community",
            amount: 50000.00,
            fundraiser_id: "FR88990",
            is_team: true,
            team_id: "TM99001",
            start_date: "2024-11-10",
            start_time: "09:45 UTC",
            end_date: "2025-05-10",
            end_time: "17:30 UTC",
            progress: 35000.00,
            percentage: 70.0,
            is_complete: false,
            location: "Berlin, Germany"
        },
        {
            photo: "image16.jpg",
            campaign_title: "Coral Reef Restoration Project",
            campaign_description: "Support our efforts to restore and protect the coral reefs in Micronesia.",
            campaign_category: "Environment",
            amount: 30000.00,
            fundraiser_id: "FR99011",
            is_team: true,
            team_id: "TM10112",
            start_date: "2024-08-20",
            start_time: "07:00 UTC",
            end_date: "2025-02-20",
            end_time: "17:00 UTC",
            progress: 21000.00,
            percentage: 70.0,
            is_complete: false,
            location: "Palikir, Micronesia"
        },
        {
            photo: "image17.jpg",
            campaign_title: "Outback Wildlife Conservation",
            campaign_description: "Join us in preserving the unique wildlife of the Australian Outback.",
            campaign_category: "Wildlife",
            amount: 80000.00,
            fundraiser_id: "FR11213",
            is_team: false,
            team_id: "",
            start_date: "2024-09-15",
            start_time: "12:00 UTC",
            end_date: "2025-03-15",
            end_time: "20:00 UTC",
            progress: 56000.00,
            percentage: 70.0,
            is_complete: false,
            location: "Alice Springs, Australia"
        },
        {
            photo: "image18.jpg",
            campaign_title: "Great Barrier Reef Education Program",
            campaign_description: "Educational program to raise awareness about the Great Barrier Reef and its protection.",
            campaign_category: "Education",
            amount: 45000.00,
            fundraiser_id: "FR12324",
            is_team: true,
            team_id: "TM12125",
            start_date: "2024-10-10",
            start_time: "08:30 UTC",
            end_date: "2025-04-10",
            end_time: "18:30 UTC",
            progress: 31500.00,
            percentage: 70.0,
            is_complete: false,
            location: "Cairns, Australia"
        },
        {
            photo: "image19.jpg",
            campaign_title: "Antarctic Wildlife Research",
            campaign_description: "Funding for research on the impact of climate change on Antarctic wildlife.",
            campaign_category: "Research",
            amount: 50000.00,
            fundraiser_id: "FR13435",
            is_team: true,
            team_id: "TM13136",
            start_date: "2024-12-01",
            start_time: "13:00 UTC",
            end_date: "2025-06-01",
            end_time: "19:00 UTC",
            progress: 35000.00,
            percentage: 70.0,
            is_complete: false,
            location: "McMurdo Station, Antarctica"
        },
        {
            photo: "image20.jpg",
            campaign_title: "East Asia Cultural Exchange",
            campaign_description: "Promoting cultural understanding and exchange between East Asian countries.",
            campaign_category: "Culture",
            amount: 60000.00,
            fundraiser_id: "FR14546",
            is_team: false,
            team_id: "",
            start_date: "2024-11-05",
            start_time: "14:30 UTC",
            end_date: "2025-05-05",
            end_time: "22:00 UTC",
            progress: 42000.00,
            percentage: 70.0,
            is_complete: false,
            location: "Tokyo, Japan"
        }
        
]

export default campaigns
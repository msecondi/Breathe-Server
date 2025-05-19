# Project Title
    Breathe
        Being human isn’t just biology. It’s a practice.

## Overview

What is your app? Give a brief description in a couple of sentences.

    This will be a calming, human-centered platform that draws attention to the modern epidemic of loneliness and disconnection. It offers an interactive, reflective space for users to slow down, process their emotions, and reconnect with what it means to be human. Whether through anonymous emotional release, reflective journaling, or absorbing meaningful quotes and stories. The platform serves as a gentle reminder that humanity still exists, and we can still find it within ourselves and one another.

### Problem Space

Why is your app needed? Give any background information around any pain points or other reasons.

    In an ever-evolving world, modern life moves fast and in chasing efficiency, the nature of being human has been numbed (empathy, patience, slowness, awe). We're constantly being notified, stressing to hit deadlines, curating personas, striving for the next goal. It’s become normalized to get caught in survival mode or status mode, constantly comparing, reacting, consuming. --We scroll more than we sit in silence. We talk more online than face to face. We value productivity over presence.

    Remind people to 'smell the roses' and take a minute to experience being human.

### User Profile

Who will use your app? How will they use it? Add any special considerations that your app must take into account.

    People who are looking to learn more about themselves and how to potentially better navigate modern life. 
    People that are feeling isolated, disconnected, and/or in need of resources to use as an outlet for their emotions

    My app must consider the delicate nature of mental health and the associated ailments. It will provide resources to those seeking professional assistance


### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

    Landing Page
        Hero banner that swipes on a loop between inspiring words/phrases ("Genuity, Feeling, Honesty, Connection, etc.)

        Some of my favourite inspirational quotes

        A small blurb about being human

        Users are prompted 'What does being human mean to you?' where they can input their response into a forum or live chat feed or comment section where they are then revealed others responses.


    Establish problem area Page
        Display articles, videos, general information surrounding the epidemic of disconnectedness going on in the world (+how long its been going on for)

        Highlight the importance of mental health, offering users resources to get help and the detriment distractions can have on us if they go on without boundaries/limits

    A page for users to introspect 
        A symbolic 'fire' where users anonymously release their thoughts, worries, hopes, things they want to let go of, by submitting them into the flame. Each submission fuels the fire, which grows throughout the day (resetting daily or weekly), creating a shared space of emotional catharsis and community healing.   

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

    HTML
    CSS
    +Bootstrap/Tailwind (maybe)
    Javascript
    React
    Axios
    Node.js
    Express
    MySQL
    Knex.js

### APIs

List any external sources of data that will be used in your app.

    Optional AI API — to provide reflective, perspective-shifting responses

    Optional Event API (Eventbrite or VolunteerMatch) — for local connection opportunities

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.
    Landing Page
    Establish the problem Page
    Introspective Page

### Mockups

Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.

    To be added during week 1 of the design phase

### Data

Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out. 

    QUOTES table (Landing Page)
    id
    author
    content

    REFLECTIONS table (Landing Page)
    id
    name(optional)
    message
    created_at
    updated_at

    INTROSPECTIVE table (Introspection Page)
    id
    date
    timestamp

    RESOURCES table (Problem Area Page)  
    id
    article_id
    video_id

    ARTICLES table (Problem Area Page)
    id
    title
    content
    likes
    url

    VIDEOS table (Problem Area Page)
    id
    title
    description
    likes
    url

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

    /humanity
        GET
        POST

    /resources
        GET

    /resources/help
        GET
    
    /fire-feed
        POST

    /fire-feed/count
        GET

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date. 

Phase 1 – MVP (Barebones Functionality - Demo Day Ready)
This phase focuses on delivering a minimal yet complete and meaningful version of the application, with working backend endpoints and a simple but functional UI.

    BACKEND
        Set up Express server with organized folder structure (routes/, controllers/, models/, db/)
        Establish database connection with MySQL via Knex.js

        Create and migrate the following tables:
            quotes – stores inspirational quotes
            reflections – stores user reflections on what being human means
            introspections – stores anonymous emotional inputs for the fire feature

        Implement and test core API endpoints using Postman:
            GET /quotes – fetch all quotes
            GET /humanity – retrieve user-submitted reflections
                POST /humanity – post new user reflection
            POST /fire-feed – post a new anonymous introspection entry which increments today's count
            GET /fire-feed/count - retrieve today's number of submissions, to be used to grow the fire animation

    FRONTEND
        Set up React app with routing and API integration using Axios

        Landing Page:
            Rotating hero banner with inspirational words
            Display quotes fetched from the backend
            “What does being human mean to you?” input form
            Display a feed of other user reflections

        Introspection Page:
            Display symbolic fire graphic or animation
            Anonymous input form for introspection messages
            Use a counter per post request to animate fire from backend

Phase 2 – Feature Enhancement
This phase builds on the MVP by introducing new sections of the site, expanding the database, and improving UI/UX elements for a richer and more impactful user experience.

    BACKEND
        Create and migrate the following additional tables:
            articles – stores educational article data
            videos – stores video resources
            resources – links to support services

        Implement additional endpoints:
            GET /resources – retrieve articles, videos, and support links
            GET /resources/help – retrieve mental health-related resources

    FRONTEND
        Problem Page:
            Display curated articles and videos about the epidemic of disconnection
            Display mental health support links

        Design Enhancements:
            Add transitions/animations (fire growth, fire crackling sounds, etc.)
            Improve responsiveness across devices
            Handle loading and error states gracefully

Phase 3 – Stretch Goals / Nice to Have
If time permits, these features will further personalize and deepen the emotional impact of the app.

    -Add a Quote of the Day feature (generated dynamically from backend or API)
    -Implement an AI-powered tool for emotional reframing (user submits a struggle, receives a hopeful, fresh perspective)
    -Build a Mood-to-Media experience – based on selected emotion, user is shown curated visuals, sounds, and quotes
    -Integrate an Event API (Eventbrite or VolunteerMatch) to display local events and volunteer opportunities
    -Add a Kindness Stories Page where users can share acts of human decency and connection
    -Introduce User Authentication for saving personal entries or viewing past reflections
    -Include a Data Visualization Page showing:
    -Social media usage over time graph
    -Population-reported feelings of isolation

---

## Future Implementations
Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date.

    A graph displaying the number of accounts made on a social media platform over the last 10 years juxtaposed with the percentage of the population that feels isolated

    A page where users can share stories of kindness and human decency

    User authentication so they have access to their posts

    A page where the user can input their current mood or how they want to feel and enter an immersive space with visuals, audio, quotes, etc that align with it. Can help users sit with their emotions or a space to precipitate a gentle shift.

    Page that shows upcoming local events for potential social gatherings in their local area and/or volunteer opportunities
        Eventbrite API?
        VolunteerMatch API?

    Ai component that highlights the importance of perspective. The user is able to input whatever they are going through, it's sent to an ai to help change the perspective into a more hopeful one, giving reassurance and optimism --- Gemini AI API

    Add a 'Quote of the Day' to the landing page that either is implemented in the backend or makes an api call
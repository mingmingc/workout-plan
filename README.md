# workout-plan

Generates daily workouts to help clients feel their best and maintain wellness. Clients can access curated workouts, create &amp; track manual workouts, upload workouts to Google Calendar, and receive reminders via SMS and email. 

## Technologies

* React
* MySQL

## Step 1: Coming up with MVP

Upon starting, I brainstormed all relevant features and picked 3 _key_ features for my MVP.

Features: 
* **Initial assessment** ("How difficult do you want your workouts to be? How many days per week?")
* **Manual workout planner & tracker**: Client 
* **Pre-curated workouts**: The ap curates a set of workouts based on what the client wants today (Do they want an arm-abs workout, leg day, or full body? How much time do they have?)
* Authentication
* Stats
* Connect & chat with "workout buddies" 

The three features in bold are what I chose to focus on first. Once my MVP is in place, I will implement those in order.

## Step 2: Creating a database

I started out using a open-sourced 3rd-party API. However, for my app's needs, and due to the exercise data, while being thorough, being highly inconsistent and unstandardized between contributors, I decided to create my own database using MySQL. 
I created tables & inserted data for exercise groups & muscles. 
My next step would be to create API endpoints with GET, POST, PUT, and DELETE routes.
# workout-plan

Generates daily workouts to help clients feel their best and maintain wellness. Clients can create & track manual workouts. Clients will be able to access curated workout plans, upload workouts to Google Calendar, and receive reminders via SMS and email.

## Technologies

* React
* SQL

## Step 1: Coming up with MVP

Upon starting, I brainstormed all relevant features and picked 3 _key_ features for my MVP.

Features: 
* **Initial assessment** ("How difficult do you want your workouts to be? How many days per week?")
* **Manual workout planner & tracker**: Clients will be able to add their own exercises to daily workouts, & track their progress as they exercise (how many sets, reps, weight, etc.)
* **Pre-curated workouts**: The app curates a set of workouts based on what the client wants today (Do they want an arm-abs workout, leg day, or full body? How much time do they have?)
* Access 
* Authentication
* Stats
* Connect & chat with "workout buddies" 

The three features in bold are what I chose to focus on first. Once my MVP is in place, I will implement those in order.

## Step 2: Creating a database

I started out using a open-sourced 3rd-party API. However, for my app's needs, and due to the exercise data, while being thorough, being highly inconsistent and unstandardized between contributors, I decided to create my own database using SQL. 
I created tables & inserted data for exercise groups & muscles. 
My next steps are to create API endpoints with GET, POST, PUT, and DELETE routes.

I want to be able to name multiple muscles per exercise. My challenge is that I'd want my muscles in a JSON object to be grouped in an array like this:
__INSERT PICTURE HERE__

In MySQL, arrays are not a recognized data type for a column, but I can create a separate table that relates to both the muscles & exercises table, listing exercise IDs and their corresponding muscle group IDs. I can group these together in a LEFT JOIN. 
While I work on the architecture to reflect those relationships in a simple way, I used [json-server](https://github.com/typicode/json-server) to create a dummy JSON file reflecting my desired data structure. 

I will then create my frontend table components in React, so that users can view current exercises, add, and remove them.

## Step 3: Creating React components
## Step 4: Setting up REST API calls in React

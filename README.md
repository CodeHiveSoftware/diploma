# Park-Ease

Parking admin dashboard for managing parking spaces and reservations.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/CodeHiveSoftware/diploma.git
    ```
   
2. Install Docker if you haven't already:

   - [Docker Desktop for Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
   - [Docker Desktop for Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac)
   - [Docker Engine for Linux](https://docs.docker.com/engine/install/)
   
  If you have Docker installed, you can skip this step.

3. Run the following command to start the development server:

   ```bash
   docker-compose up
   ```
   or
    ```bash
   sudo docker-compose up
   ```
   
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

5. Login with the following credentials:

   - **Username:** admin
   - **Password:** admin5454park

6. You can stop the development server by running the following command:

   ```bash
   docker-compose down
   ```
   or
    ```bash
   sudo docker-compose down
   ```


## Features

- **Authentication:** Login and logout.
- **Graphical Dashboard:** View available and reserved parking spaces, and the number of reservations.
- **Parking Spaces:** Green for available, red for reserved.
- **Reservations:** View all reservations, add new reservations, and close existing reservations.
- **Statistics:** View statistics for the number of available and reserved parking spaces, number of cars parked in the last 3 hours, and the overstaying rate.

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS, Redux Toolkit, pnpm as package manager
- **Backend:** Java, Spring Boot, Spring Data JPA, PostgreSQL, Hibernate, Lombok
- **Infrastructure:** Docker, Docker Compose

  
  

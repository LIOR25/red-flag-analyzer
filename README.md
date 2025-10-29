# ❤️‍🔥 Red Flag Analyzer

Let AI roast your dating profile bio. Paste your text and get an instant analysis of your dating vibes, complete with a red flag score, funny comments, and even a few green flags.

 
*(Replace this with a real screenshot of your app!)*

---

## 🚀 About The Project

This is a full-stack web application that uses the OpenAI API (GPT-4o-mini) to analyze text for potential dating "red flags" and "green flags". The user can input any text, choose a "roast intensity" (Playful or Brutal), and receive a humorous but insightful analysis from the AI.

### Built With

*   **Frontend:** [Angular](https://angular.io/)
*   **Backend:** [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
*   **AI:** [OpenAI API](https://platform.openai.com/)
*   **Styling:** SCSS

---

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:
*   [Node.js](https://nodejs.org/en/download/) (which includes npm)
*   [Angular CLI](https://angular.io/cli):
    ```sh
    npm install -g @angular/cli
    ```

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/red-flag-analyzer.git
    cd red-flag-analyzer
    ```

2.  **Set up the Backend:**
    *   Navigate to the backend directory:
        ```sh
        cd backend
        ```
    *   Install NPM packages:
        ```sh
        npm install
        ```
    *   **Create the environment file.** You'll see a file named `.env.example`. Make a copy of it and name it `.env`:
        ```sh
        # On Windows (Command Prompt)
        copy .env.example .env
        
        # On macOS/Linux
        cp .env.example .env
        ```
    *   **Add your API Key.** Open the new `.env` file and add your OpenAI API key:
        ```
        OPENAI_API_KEY="sk-YourSecretApiKeyGoesHere"
        ```

3.  **Set up the Frontend:**
    *   Navigate to the frontend directory from the project root:
        ```sh
        cd ../frontend
        ```
    *   Install NPM packages:
        ```sh
        npm install
        ```

### Running the Application

You will need to run both the backend and frontend servers in separate terminals.

1.  **Start the backend server** (from the `/backend` directory):
    ```sh
    npm start
    ```
    Your backend API will be running on `http://localhost:3000`.

2.  **Start the frontend server** (from the `/frontend` directory):
    ```sh
    ng serve
    ```
    Navigate to `http://localhost:4200/` in your browser. The application will be live!

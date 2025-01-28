# Oweh Bureau Website

Express.js website with EJS templating engine, TypeScript, and Vercel deployment configuration.

## Development

### Prerequisites
- Node.js (v14 or higher)
- Yarn package manager

### Setup
1. Install dependencies:
```bash
yarn install
```

2. Create a `.env` file in the root directory:
```bash
PORT=3000
```

3. Start development server:
```bash
yarn dev
```

The site will be available at `http://localhost:3000`. The development server features:
- Hot reloading with nodemon
- TypeScript compilation
- EJS template rendering
- Static file serving from `/public` directory

## Project Structure
```
site/
├── views/          # EJS templates
├── public/         # Static assets (CSS, JS, images)
├── build/         # Compiled TypeScript output
├── api.ts         # Main Express application
├── vercel.json    # Vercel deployment configuration
├── tsconfig.json  # TypeScript configuration
└── package.json   # Project dependencies and scripts
```

## Building
To build the project for production:
```bash
yarn build
```

This will:
- Compile TypeScript files to JavaScript
- Output compiled files to `build/` directory

## Deployment

### Deploying to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Import your project in Vercel:
   - Go to [Vercel Dashboard](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Select the `site` directory as the root directory
   - Deploy

The `vercel.json` configuration handles:
- TypeScript compilation
- Views directory copying
- Static asset serving
- Route handling for the Express application

### Environment Variables
Required environment variables:

Development (`.env` file):
```bash
PORT=3000        # Port for development server
NODE_ENV=development
```

Vercel Deployment:
1. Go to your project settings in Vercel Dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add the following variables:
   ```bash
   NODE_ENV=production    # Required: Enables production mode
   PORT=                 # Optional: Defaults to Vercel's internal port
   ```
4. Select the environments where each variable should be available:
   - Production: Check "Production" environment
   - Preview: Check "Preview" environment (for PR previews)
   - Development: Check "Development" environment (for `vercel dev`)

Make sure to:
1. Create `.env` file for local development
2. Configure production variables in Vercel project settings
3. Never commit `.env` file to version control
4. After adding environment variables, redeploy your application

## Routes
- `/` - Home page
- `/careers` - Careers page
- `/application` - Application form
- `/contact` - Contact page
- `/appointment` - Appointment booking
- `/profile-details` - Profile details
- `/quote` - Quote request

## Development Notes
- EJS templates are located in the `views/` directory
- Static assets should be placed in the `public/` directory
- The main application logic is in `api.ts`
- Development uses `nodemon` for auto-reloading
- Production uses `serverless-http` for Vercel deployment 
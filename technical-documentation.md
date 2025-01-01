# YC Directory Technical Documentation

## Overview
The YC Directory is a Next.js-based web application that serves as a platform for startup pitches. It allows users to create, search, and interact with startup pitches while integrating with Sanity.io for content management and GitHub for authentication.

## Core Components

### 1. Authentication System
- Implemented using NextAuth.js with GitHub as the authentication provider
- Managed through the `auth.ts` configuration
- User sessions are handled server-side and accessible throughout the application

### 2. Navigation (Navbar.tsx)
- Provides main navigation interface
- Handles user authentication state
- Features:
  - Logo/Home link
  - Create startup button (authenticated users only)
  - Login/Logout functionality
  - User avatar and profile link

### 3. Content Management
- Sanity.io integration for content storage and management
- Key components:
  - `sanity/lib/client.ts`: Main client configuration
  - `sanity/lib/write-client.ts`: Client for content mutations
  - Schema types defined in `sanity/schemaTypes/`

### 4. Startup Management
#### Creation (StartupForm.tsx)
- Rich form interface for creating startup pitches
- Features:
  - Title, description, and category inputs
  - Markdown editor for detailed pitches
  - Image URL input
  - Form validation using Zod
  - Real-time error handling
  - Toast notifications for user feedback

#### Search (SearchForm.tsx)
- Simple search interface
- Query-based filtering
- Reset functionality for search results

### 5. Server Actions (actions.ts)
- Handles server-side operations
- Key functions:
  - `createPitch`: Handles startup pitch creation
  - Integrates with Sanity for data persistence
  - Includes error handling and response parsing

## Data Models

### 1. Startup Schema
- Title
- Description
- Category
- Image URL
- Pitch content (Markdown)
- Author reference
- Slug for URL routing

### 2. Author Schema
- User information
- Linked to GitHub authentication
- References to created startups

## Technical Stack

1. Frontend
   - Next.js 14
   - React
   - TailwindCSS for styling
   - Shadcn UI components

2. Backend
   - Next.js Server Components
   - Server Actions for data mutations
   - Sanity.io for content management

3. Authentication
   - NextAuth.js
   - GitHub OAuth

4. Data Storage
   - Sanity.io Content Lake
   - Real-time content updates
   - CDN-backed content delivery

## Error Handling
- Form validation using Zod schema
- Server-side error handling with structured responses
- Toast notifications for user feedback
- Graceful error states in UI components

## Performance Considerations
- Server Components for reduced client-side JavaScript
- CDN-enabled Sanity client
- Optimized image loading through Next.js Image component
- Client-side form validation for immediate user feedback

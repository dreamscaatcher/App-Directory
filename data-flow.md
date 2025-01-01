# YC Directory Data Flow

```mermaid
graph TD
    A[User Browser] -->|Authentication| B[GitHub OAuth]
    B -->|Auth Token| C[NextAuth]
    C -->|Session| A

    A -->|Create Startup| D[StartupForm Component]
    D -->|Validate| E[Zod Schema]
    E -->|Server Action| F[actions.ts]
    F -->|Write| G[Sanity.io]

    A -->|Search| H[SearchForm Component]
    H -->|Query| I[Sanity Client]
    I -->|Fetch| G

    G -->|Content| J[Next.js Server Components]
    J -->|Render| A

    subgraph "Content Management"
        G -->|Real-time Updates| K[Sanity Studio]
        K -->|Mutations| G
    end

    subgraph "User Flow"
        L[Unauthenticated User] -->|Login| B
        M[Authenticated User] -->|Create Startup| D
        M -->|View Profile| N[User Profile]
        N -->|Fetch User Startups| I
    end

    subgraph "Data Validation"
        E -->|Success| F
        E -->|Error| O[Toast Notifications]
        O -->|Display| A
    end
```

## Flow Description

1. **Authentication Flow**
   - User initiates login through GitHub
   - NextAuth handles OAuth flow and session management
   - Session information is available throughout the app

2. **Startup Creation Flow**
   - Authenticated user fills StartupForm
   - Client-side validation through Zod
   - Server action processes validated data
   - Data is stored in Sanity.io
   - User receives success/error notification

3. **Search Flow**
   - User enters search query
   - Query processed by Sanity client
   - Results fetched and rendered through Server Components
   - Real-time updates if content changes

4. **Content Management Flow**
   - Sanity Studio provides admin interface
   - Content changes trigger real-time updates
   - CDN caches content for performance
   - Server Components re-render with new data

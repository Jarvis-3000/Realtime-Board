# Collaborative Realtime Board

A feature-packed, real-time collaborative whiteboard built with cutting-edge technologies. 
This project offers a dynamic and interactive platform where users can sketch, add shapes, notes, and collaborate seamlessly in real-time. 

## Key Features
- 🛠️ **Whiteboard from Scratch**: Draw freely on the board or use pre-built shapes.
- 🧰 **Toolbar**: Add Text, Shapes (Rectangles, Ellipses), Sticky Notes & Pencil drawings.
- 🪄 **Layering**: Manage and rearrange elements on the board.
- 🎨 **Coloring System**: Choose colors for shapes, notes, and drawings.
- ↩️ **Undo & Redo**: Step back and forward through actions.
- ⌨️ **Keyboard Shortcuts**: Boost productivity with efficient shortcuts.
- 🤝 **Real-Time Collaboration**: Work together with others simultaneously.
- 💾 **Real-Time Database**: Data is automatically saved and updated.
- 🔐 **Authentication**: User login, organization-based collaboration, and invites with Clerk.
- ⭐️ **Favoriting**: Mark your favorite boards for quick access.
- 🌐 **Next.js 14 Framework**: Leveraging the latest Next.js version for modern web development.
- 💅 **TailwindCSS & Shadcn/UI**: Customizable and responsive styling.
- 🌙 **Dark Mode**: Seamlessly switch between light and dark themes.

## Technologies Used
- **[Next.js 14](https://nextjs.org/)**: The React-based framework for modern web apps.
- **[Convex](https://convex.dev/)**: Real-time backend platform with product-centric APIs.
- **[Clerk](https://clerk.dev/)**: Complete authentication suite for managing users.
- **[LiveBlocks](https://liveblocks.io/)**: Real-time collaboration and WebSocket APIs.
- **[TailwindCSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
- **[Shadcn/UI](https://shadcn.dev/)**: Prebuilt components with Tailwind integration.
- **[zustand](https://zustand-demo.pmnd.rs/)**: State management solution for React.
- **[radix-ui](https://www.radix-ui.com/)**: Unstyled, accessible UI primitives.


## Pictures
![image](https://github.com/user-attachments/assets/51bc8c27-2797-4488-b84a-e2eb412f4123)
![image](https://github.com/user-attachments/assets/036ad84d-42d3-4a05-a351-3f26c58e2929)
![image](https://github.com/user-attachments/assets/4abeda5a-fefe-4859-b83c-773f2e3b779b)




## Installation & Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Environment Variables**:  
   Create a `.env.local` file in the root directory and configure the following:
    ```plaintext
   CONVEX_DEPLOYMENT=""
   NEXT_PUBLIC_CONVEX_URL=""
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
   CLERK_SECRET_KEY=""
   NEXT_PUBLIC_LIVE_BLOCKS_DEV_PUBLIC_KEY=""
   NEXT_PUBLIC_LIVE_BLOCKS_DEV_SECRET_KEY=""
    ```

4. **Run the application**:
    ```bash
    npx convex dev
    npm run dev
    ```
   The app will be available at `http://localhost:3000`.

## Usage

- **Whiteboard**: Create and design your own whiteboards with multiple tools.
- **Shapes & Notes**: Add shapes and sticky notes to the board.
- **Real-Time Collaboration**: Invite others and collaborate in real-time.
- **Dark Mode**: Toggle between light and dark mode based on your preference.

## Contributing

We welcome contributions to enhance this project! To contribute:
1. Fork the repository.
2. Create a new feature branch: `git checkout -b my-new-feature`.
3. Commit your changes: `git commit -am 'Add some feature'`.
4. Push to the branch: `git push origin my-new-feature`.


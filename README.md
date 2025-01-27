# Timeline Visualization App

A dynamic web application that enables users to create, manage, and explore personal or professional event timelines with advanced visualization capabilities.

## Features

- 📅 Interactive Timeline Display
  - Multi-row timeline visualization
  - Color-coded year markers
  - Decade indicators for easy navigation
  - Responsive grid layout adapting to screen sizes

- 🛠 Customization Options
  - Adjustable timeline length (1-100 years)
  - Day-level granularity
  - Intuitive year input interface
  - Even/odd year color differentiation

- 📤 Export & Share
  - Export timeline as PNG image
  - Share functionality with native sharing API support
  - Fallback sharing options for all browsers

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Routing**: Wouter for lightweight routing
- **Styling**: Tailwind CSS with shadcn/ui components
- **Date Handling**: date-fns
- **Image Export**: html2canvas
- **State Management**: React Query

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system.

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`.

## Usage Guide

1. **Navigate to Timeline**: Access the main timeline view from the home page
2. **Set Timeline Length**: Use the input field to specify how many years you want to visualize (1-100)
3. **Interact with Timeline**:
   - Hover over days to see the full date
   - Notice the alternating colors for even/odd years
   - Use decade markers at the top for quick reference
4. **Export/Share**:
   - Click the Export button to download as PNG
   - Use the Share button to share the timeline

## Project Structure

```
client/src/
├── components/       # Reusable UI components
├── pages/           # Route components
├── lib/            # Utilities and configurations
└── hooks/          # Custom React hooks
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

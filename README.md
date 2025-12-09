# Learning Platform Website

A modern, responsive learning platform website built with React. Features include service cards, feature sections with images, and client testimonials.

## 🚀 Demo

A clean, professional website showcasing:
- E-Learning Platforms
- Visual & Animation Solutions
- Training Solutions
- Psychometric Assessments
- Client Testimonials

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, for cloning)

To check if you have Node.js and npm installed:
```bash
node --version
npm --version
```

## 🛠️ Installation

### Step 1: Clone the Repository
```bash
git clone <your-repository-url>
cd learning-platform
```

Or download the ZIP file and extract it.

### Step 2: Install Dependencies
```bash
npm install
```

This will install all required packages including React and its dependencies.

### Step 3: Add Your Images (Optional)
Place your images in the `src/assets/images/` folder:
```
src/
├── assets/
│   └── images/
│       ├── elearning.jpg
│       ├── animation.jpg
│       ├── training.jpg
│       └── assessment.jpg
```

## 🚀 Running the Application

### Development Mode
Start the development server:
```bash
npm start
```

The application will automatically open in your browser at:
```
http://localhost:3000
```

**Hot Reload:** Any changes you make will automatically refresh in the browser!

### Stop the Server
Press `Ctrl + C` in the terminal

## 📁 Project Structure
```
learning-platform/
├── node_modules/          # Dependencies (auto-generated)
├── public/                # Static files
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── images/       # Your images go here
│   ├── App.jsx           # Main application component
│   ├── app.css           # Styling
│   ├── index.js          # Entry point
│   └── index.css
├── package.json          # Project configuration
├── package-lock.json
└── README.md            # This file
```

## 🎨 Features

### 1. Services Section
Displays four main service offerings with icons and descriptions:
- E-Learning Platforms
- Visual & Animation Solutions
- Training Solutions
- Psychometric Assessments

### 2. Feature Sections
Multiple full-screen sections showcasing different services with:
- Alternating image-text layouts
- High-quality images
- Call-to-action buttons
- Custom background colors

### 3. Testimonials Section
Client testimonials with:
- 5-star ratings
- Client quotes
- Author names and roles
- Hover effects

## Components

### ServiceCard
```jsx
<ServiceCard
  icon="💻"
  title="Service Title"
  description="Service description"
/>
```

### FeatureSection
```jsx
<FeatureSection
  reverse={false}
  tag="Category"
  title="Section Title"
  description="Description text"
  description2="Additional description (optional)"
  button1="Primary Button"
  button2="Secondary Button"
  imageSrc={yourImage}
  backgroundColor="#f5f5f5"
/>
```

### TestimonialCard
```jsx
<TestimonialCard
  rating={5}
  text="Client testimonial text"
  author="Author Name"
  role="Job Title, Company"
/>
```

## 🎨 Customization

### Colors
Edit colors in `app.css`:
```css
.servicesSection {
  background-color: #f5f5f5; /* Light gray */
}
```

### Typography
Change fonts in `app.css`:
```css
.container {
  font-family: 'Your Font', sans-serif;
}
```

### Images
Replace images in `src/assets/images/` and update imports in `App.jsx`:
```jsx
import yourImage from "./assets/images/your-image.jpg";
```

### Content
Edit text content directly in `App.jsx` within each component.

## 📱 Responsive Design

The website is fully responsive and adapts to:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is busy:
- Press `Y` when prompted to use another port
- Or manually specify: `PORT=3001 npm start`

### Module Not Found Errors
```bash
npm install
```

### Images Not Displaying
- Check image paths in `src/assets/images/`
- Verify import statements in `App.jsx`
- Ensure image files are saved

### Blank Screen
- Check browser console (F12) for errors
- Check terminal for error messages
- Verify all files are saved

## 📦 Building for Production

Create an optimized production build:
```bash
npm run build
```

This creates a `build/` folder with optimized files ready for deployment.

## 🚀 Deployment

### Deploy to GitHub Pages
1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/learning-platform",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```



## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Authors

- M.VIJAY KUMAR - [My Github]([https://github.com/yourusername](https://github.com/Vijaykumar-Muppirisetti))

## 🙏 Acknowledgments

- Design inspired by modern e-learning platforms
- Built with React
- Styled with pure CSS (no frameworks)

## 📞 Support

If you have any questions or issues:
- Open an issue on GitHub
- Contact: your.email@example.com

## 🔄 Updates

### Version 1.0.0 (Current)
- Initial release


---

**Happy Coding! 🎉**

For more help, check the [React Documentation](https://react.dev/)

# ANCFCC Angular Application

This Angular application contains three main templates based on the provided designs:

1. **Login Page** (`/login`) - User authentication with CIN and phone verification
2. **Signup Page** (`/signup`) - User registration form with personal details
3. **Confirmation Page** (`/confirmation`) - Conservation foncière selection and confirmation

## Features

- Responsive design matching the provided screenshots
- Form validation and error handling
- Navigation between pages
- French and Arabic text support
- Custom styling with beige/tan color scheme
- Phone verification and captcha functionality (UI only)

## Project Structure

```
src/
├── app/
│   ├── login-page/          # Login component
│   ├── signup-page/         # Registration component
│   ├── confirmation-page/   # Confirmation component
│   ├── app.routes.ts        # Application routing
│   ├── app.ts              # Main app component
│   └── app.html            # App template
├── assets/
│   └── ancfcc-logo.svg     # ANCFCC logo
└── styles.css              # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Angular CLI (v17 or higher)

### Installation

1. Navigate to the project directory:
   ```bash
   cd ancfcc-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`

### Building for Production

```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

## Navigation

- **Default route**: Redirects to `/login`
- **Login Page**: `/login` - Contains login form with navigation to signup
- **Signup Page**: `/signup` - Registration form that navigates to confirmation
- **Confirmation Page**: `/confirmation` - Final step with back navigation to signup

## Components

### LoginPageComponent
- CIN input field
- Phone number with verification button
- Verification code input
- Form validation
- Link to signup page

### SignupPageComponent
- Personal information form (Name, Address in French/Arabic)
- Phone verification with captcha
- Date of birth selection
- CIN input
- Step indicator (Step 1 of 2)

### ConfirmationPageComponent
- Conservation foncière selection
- Title number and indices
- Captcha verification
- Terms and conditions acceptance
- Step indicator (Step 2 of 2)
- Back navigation to signup

## Styling

The application uses a custom CSS design with:
- Beige/tan gradient background
- Geometric pattern overlay
- Rounded form containers with backdrop blur
- Consistent button and input styling
- Responsive design for mobile devices

## Form Validation

All forms include:
- Required field validation
- Real-time form state checking
- Disabled submit buttons until valid
- Visual feedback for form states

## Future Enhancements

- Backend API integration
- Real phone verification
- Captcha service integration
- User authentication and session management
- Database integration for form submissions
- Email verification
- Multi-language support
- Accessibility improvements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for demonstration purposes.


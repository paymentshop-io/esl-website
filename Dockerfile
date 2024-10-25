# Use official Node.js image as base
FROM node:18-alpine AS base

# Set working directory in container
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the Next.js default port
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "run", "start"]

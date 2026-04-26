# 1. Use a lightweight version of Node.js as the base image
FROM node:18-alpine

# 2. Create the application directory
WORKDIR /usr/src/app

# 3. Copy only dependency files first (for caching advantage)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy all source code
COPY . .

# 6. Specify the port on which the application will run
EXPOSE 3000

# 7. Start the application
CMD ["npm", "start"]
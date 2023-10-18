# How to install project api prisma.

# Step 1: Make file package.json
    npm init -y 
    npm install prisma typescript ts-node @types/node --save-dev

# Step 2: Initialize prisma project.
    npx prisma init

# Step 3: Make stuctures available database in api\prisma\schema.prisma files.
    npx prisma migrate dev --name init

# Step 4: Install prisma client use for call database.
    npm install @prisma/client

# Step 5: Install node express and types/express.  
    npm install express --save
    npm install --save @types/express

# Step 6: Install express cors.
    npm install cors

# Step 7: Install nodemon use for auto reloading.
    npm install -g nodemon

# Other
# Open prisma studio.
    npx prisma studio
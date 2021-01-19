ARG image
FROM ${image}

# Create working directory for project
ARG project_path
WORKDIR ${project_path}

# Copy package.json and pacakge-lock.json to container
COPY ./package*.json ./

# Install all packages with npm
RUN npm install

# Add node_modules/.bin to $PATH
ENV PATH ./node_modules/.bin:$PATH

# Copy project files
COPY ./ ./

EXPOSE 9000
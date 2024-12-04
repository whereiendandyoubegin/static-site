# static-site
Static site with dockerfile

# Build
docker build -t static-site .
# Run
docker run -p 8080:80 static-site

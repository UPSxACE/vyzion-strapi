# Function to check if a container exists by name
container_running() {
  container_name=$1
  if docker inspect ${container_name} -f {{.State.Running}}; then
    echo "Container '$container_name' exists."
    return 0
  else
    echo "Container '$container_name' does not exist."
    return 1
  fi
}

container_name="portainer"
if container_running "$container_name"; then
  echo "Proceeding with the existing container..."
else
  echo "Creating a new container..."
  # Add commands to create or start the container
fi
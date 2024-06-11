# Function to check if a container exists by name
container_running() {
  container_name=$1
  container_status=$(docker inspect -f '{{.State.Running}}' ${container_name} 2>/dev/null)
  if["$container_status" == "true"]; then
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
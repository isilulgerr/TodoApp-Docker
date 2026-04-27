
terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}


variable "do_token" {}

provider "digitalocean" {
  token = var.do_token
}


resource "digitalocean_droplet" "todo_server" {
  image  = "ubuntu-22-04-x64"
  name   = "todo-app-production"
  region = "fra1" 
  size   = "s-1vcpu-1gb" 
  

  ssh_keys = [var.ssh_fingerprint]
}
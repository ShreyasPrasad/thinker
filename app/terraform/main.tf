terraform {
  required_version = ">= 1.0"

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

# Enable required APIs
resource "google_project_service" "cloudfunctions" {
  service = "cloudfunctions.googleapis.com"
}

resource "google_project_service" "cloudbuild" {
  service = "cloudbuild.googleapis.com"
}

resource "google_project_service" "artifactregistry" {
  service = "artifactregistry.googleapis.com"
}

# Cloud Function
resource "google_cloudfunctions2_function" "thinker" {
  name        = var.function_name
  location    = var.region
  description = "Code execution handler for thinker app"

  build_config {
    runtime     = "go121"
    entry_point = "function.ExecuteCode"
    source {
      storage_source {
        bucket = google_storage_bucket.function_source.name
        object = google_storage_bucket_object.function_source.name
      }
    }
  }

  service_config {
    max_instance_count    = 10
    min_instance_count    = 0
    available_memory      = "256M"
    timeout_seconds        = 60
    environment_variables  = var.environment_variables
    ingress_settings      = "ALLOW_ALL"
    all_traffic_on_latest_revision = true
  }

  depends_on = [
    google_project_service.cloudfunctions,
    google_project_service.cloudbuild,
    google_project_service.artifactregistry,
  ]
}

# Storage bucket for function source code
resource "google_storage_bucket" "function_source" {
  name     = "${var.project_id}-function-source"
  location = var.region

  uniform_bucket_level_access = true
  force_destroy               = true
}

# Storage bucket object for function source
resource "google_storage_bucket_object" "function_source" {
  name   = "function-source-${data.archive_file.function_source.output_md5}.zip"
  bucket = google_storage_bucket.function_source.name
  source = data.archive_file.function_source.output_path
}

# Archive function source code
data "archive_file" "function_source" {
  type        = "zip"
  output_path = "/tmp/function-source.zip"
  source_dir  = "${path.module}/../"
  excludes = [
    "terraform",
    ".git",
    ".terraform",
    "*.tf",
    "*.tfstate",
    "*.tfstate.backup",
    ".terraform.lock.hcl",
  ]
}


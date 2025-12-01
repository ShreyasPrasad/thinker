variable "project_id" {
  description = "GCP Project ID"
  type        = string
}

variable "region" {
  description = "GCP Region for resources"
  type        = string
  default     = "us-central1"
}

variable "function_name" {
  description = "Name of the Cloud Function"
  type        = string
  default     = "thinker-execute"
}

variable "environment_variables" {
  description = "Environment variables for the Cloud Function"
  type        = map(string)
  default     = {}
}


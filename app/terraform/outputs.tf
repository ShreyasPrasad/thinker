output "function_url" {
  description = "URL of the deployed Cloud Function"
  value       = google_cloudfunctions2_function.thinker.url
}

output "function_name" {
  description = "Name of the Cloud Function"
  value       = google_cloudfunctions2_function.thinker.name
}

output "function_location" {
  description = "Location of the Cloud Function"
  value       = google_cloudfunctions2_function.thinker.location
}


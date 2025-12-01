# Thinker Cloud Function

A minimal GCP Cloud Function handler written in Go for executing requests from the thinker frontend.

## Structure

- `thinker/functions.go` - Cloud Function handler that receives code execution requests
- `terraform/` - Infrastructure as Code for deploying to GCP

## Development

### Local Testing

You can test the function locally using the Functions Framework:

```bash
FUNCTION_TARGET=ExecuteCode LOCAL_ONLY=true go run main.go
```

Testing the API locally:

```
curl -X POST http://localhost:8080 \
  -H "Content-Type: application/json" \
  -d '{"code": "print(\"Hello, World!\")"}'
```

## Deploying directly with Terraform/GCP

Terraform is used via Github actions to update the production GCP environment. If local testing as described above is insufficient, here are instructions to replicate the infrastructure in your own GCP account.

1. **Authenticate with GCP**:
   ```bash
   gcloud auth login
   gcloud auth application-default login
   ```

2. **Set up Terraform variables**:
   ```bash
   cd terraform
   cp terraform.tfvars.example terraform.tfvars
   # Edit terraform.tfvars with your project ID
   ```

3. **Initialize Terraform**:
   ```bash
   terraform init
   ```

4. **Plan and apply**:
   ```bash
   terraform plan
   terraform apply
   ```

## Environment Variables

Add environment variables in `terraform.tfvars`:

```hcl
environment_variables = {
  API_KEY = "your-api-key"
  DEBUG   = "true"
}
```

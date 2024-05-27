terraform {
  required_providers {
    # https://registry.terraform.io/providers/hashicorp/aws/latest/docs
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# required although unused
provider "aws" {
  region = "us-west-1" # just a random region (also used in .github/workflows/terraform.yml)
}

# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/route53_zone
data "aws_route53_zone" "fe_dojo_developomp_com" {
  name = "fe-dojo.developomp.com"
}

# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record
resource "aws_route53_record" "main" {
  allow_overwrite = true
  zone_id         = data.aws_route53_zone.fe_dojo_developomp_com.zone_id
  name            = "blog.${data.aws_route53_zone.fe_dojo_developomp_com.name}"
  type            = "CNAME"
  ttl             = 60
  records         = ["cname.vercel-dns.com."]
}

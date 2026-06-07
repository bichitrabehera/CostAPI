# CostAPI

Normalize cloud billing data into a single developer-friendly schema.

CostAPI is a pre-launch project exploring a simple idea:

> What if AWS CUR, Azure Cost Exports, and GCP Billing Exports could be queried through one consistent API?

## The Problem

Cloud billing data is notoriously difficult to work with.

Every provider exports data differently:

* AWS Cost & Usage Reports (CUR)
* Azure Cost Exports
* Google Cloud Billing Exports

Each comes with different schemas, export formats, pricing models, and allocation strategies.

Teams building:

* FinOps platforms
* Internal developer portals
* MSP billing systems
* Chargeback & showback tooling
* Cost analytics products

often spend months building and maintaining billing ETL pipelines before they can ship customer-facing features.

## The Idea

CostAPI aims to provide a normalized layer on top of cloud billing exports.

Instead of dealing with provider-specific formats:

```json
{
  "lineItem/UnblendedCost": 421.92,
  "lineItem/ProductCode": "AmazonEC2"
}
```

or

```json
{
  "CostInBillingCurrency": 421.92,
  "SubscriptionGuid": "..."
}
```

you would query a consistent schema:

```json
{
  "provider": "aws",
  "service": "EC2",
  "region": "us-east-1",
  "team": "platform",
  "cost": 421.92,
  "currency": "USD"
}
```

## Potential Features

* Unified cost schema
* Tag normalization
* Cost allocation
* RI amortization
* Savings Plan amortization
* Multi-cloud support
* Developer-first APIs

## Status

🚧 Validation Stage

CostAPI is currently being explored and validated.

No backend has been built yet.

The goal right now is to determine whether teams working with cloud cost data find this problem valuable enough to solve.

## Who Is This For?

* FinOps teams
* Platform engineering teams
* Internal developer platform teams
* MSPs
* Teams building cloud cost tooling

## Interested?

If this sounds useful, join the waitlist:

**https://costapi.vercel.app**

Or open an issue describing:

* Your use case
* Current workflow
* Biggest pain points with cloud billing data

Feedback is far more valuable than code at this stage.

MIT

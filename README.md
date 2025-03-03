# n8n-nodes-email-edit

This is an n8n community node. It lets you add a EmailSend node with custom List-Unsubscribe header to emails sent via n8n, improving deliverability and making it easier for recipients to unsubscribe.

_App/service name_ is _one or two sentences describing the service this node integrates with_.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Usage](#usage)  
[Resources](#resources)   

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

Add List-Unsubscribe and List-Unsubscribe-Post Header: Automatically appends a List-Unsubscribe header to outgoing emails.

Supports URL and Email Unsubscribe Methods: Allows adding both a URL and an email address for unsubscription.

## Usage

1. Add this node to an n8n workflow.

2. Configure the List-Unsubscribe settings:
	- List Unsubscribe POST : Set List Unsubscribe Post value with List-Unsubscribe=One-Click.
	- List Unsubscribe URL: A link to the unsubscribe page.
	- Unsubscribe Email: An email address to handle unsubscriptions.

Set Email Credential for the node to an email service (e.g., SMTP, SendGrid, Mailgun).

Run the workflow to send emails with the List-Unsubscribe header.

Example of a generated email header:

List-Unsubscribe: <https://example.com/unsubscribe>, <mailto:unsubscribe@example.com>
List Unsubscribe Post: List-Unsubscribe=One-Click

For users new to n8n or needing guidance, check out the [Try it out](https://docs.n8n.io/try-it-out/) documentation.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)

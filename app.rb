require 'sinatra'
require 'rest_client'

API_KEY       = ENV['MAILGUN_API_KEY']
SUBDOMAIN     = ENV['MAILGUN_SUBDOMAIN']
API_URL       = "https://api:#{API_KEY}@api.mailgun.net/v2/#{SUBDOMAIN}"
QINDIO_INBOX  = "hello@qindio.com"


post '/messages' do
  name    = params['name']
  email   = params['email']
  subject = "#{name} <#{email}> request through qindio.com"
  text    = "#{params['subject']}\n#{'='*80}\n\n#{params['message']}"

  RestClient.post(API_URL + "/messages", {
    from:     "web@qindio.com",
    to:       QINDIO_INBOX,
    subject:  subject,
    text:     text
  })

  [201, {}, 'Message sent!']
end


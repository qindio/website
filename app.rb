require 'sinatra'
require 'rest_client'

API_KEY = ENV['MAILGUN_API_KEY']
API_URL = "https://api:#{API_KEY}@api.mailgun.net/v2/<your-mailgun-domain>"

post '/send' do
  RestClient.post(API_URL + "/messages", {
    from:     params['from'],
    to:       params['to'],
    subject:  params['subject'],
    text:     params['body']
  })
end


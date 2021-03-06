source 'http://rubygems.org'

gem 'bundler', '> 1.1.0'
ruby '1.9.3' if ENV['HEROKU']

gem "newrelic_rpm"
gem 'newrelic-middleware'

gem 'rails', '3.2.12'

gem 'foreman', '0.46'

gem 'thin', '~> 1.3.1',    :require => false
gem 'rails_autolink'

# cross-origin resource sharing

gem 'rack-cors', '~> 0.2.4', :require => 'rack/cors'
#search
# gem 'texticle', '~> 2.0', :require => 'texticle/rails'
gem 'pg_search'

# authentication

gem 'devise', '~> 2.1.0'


gem 'screencap', :git => 'git://github.com/maxwell/screencap.git'

gem 'omniauth', '1.1'
gem 'omniauth-facebook'
gem 'omniauth-tumblr'
gem 'omniauth-twitter'

gem 'twitter', '3.5.0'

# mail

gem 'markerb', :git => 'git://github.com/plataformatec/markerb.git'
gem 'airbrake'
gem 'rails_admin'


gem 'rack-rewrite', '~> 1.2.1', :require => false

group :production do # we don't install these on travis to speed up test runs
  gem 'fastercsv', '1.5.5', :require => false
  gem 'rack-ssl', :require => 'rack/ssl'

  # analytics
  gem 'rack-google-analytics', :require => 'rack/google-analytics'
  gem 'rack-piwik', :require => 'rack/piwik', :require => false
end

# configuration

group :heroku do
  gem 'pg'
end

gem 'settingslogic', :git => 'git://github.com/binarylogic/settingslogic.git'
# database

gem "activerecord-import", "~> 0.2.9"
gem 'foreigner', '~> 1.1.0'
gem 'pg'

# file uploading

gem 'carrierwave', '0.6.2'
gem 'fog'
gem 'mini_magick', '3.4'

# JSON and API

gem 'json'
gem 'acts_as_api'

# localization

gem 'i18n-inflector-rails', '~> 1.0'
gem 'rails-i18n'

# parsing

gem 'nokogiri', '1.5.2'
gem 'redcarpet', "2.1.1"
gem 'roxml', :git => 'git://github.com/Empact/roxml.git', :ref => '7ea9a9ffd2338aaef5b0'
gem 'ruby-oembed', '~> 0.8.7'

# queue

gem 'resque', '1.20.0'
gem 'resque-heroku'
gem 'resque-timeout', '1.0.0'
gem 'SystemTimer', '1.2.3', :platforms => :ruby_18

# tags

gem 'acts-as-taggable-on', :git => "git://github.com/mbleigh/acts-as-taggable-on.git"

# URIs and HTTP

gem 'addressable', '~> 2.2', :require => 'addressable/uri'
gem 'http_accept_language', '~> 1.0.2'
gem 'typhoeus'

# views

gem 'haml', '3.1.6.rc.1'
gem 'mobile-fu', :git => 'git://github.com/makrio/mobile-fu.git'

gem 'will_paginate'
gem 'client_side_validations'
gem 'gon'

# assets

group :assets do
  gem 'bootstrap-sass', '~> 2.0.2'
  gem 'sass-rails', '3.2.5'

  # Windows and OSX have an execjs compatible runtime built-in, Linux users should
  # install Node.js or use 'therubyracer'.
  #
  # See https://github.com/sstephenson/execjs#readme for more supported runtimes

  # gem 'therubyracer', :platform => :ruby

  gem 'handlebars_assets'
  gem 'uglifier'

  # asset_sync is required as needed by application.rb
  gem "asset_sync", :require => nil
end

gem 'jquery-rails'

# web
gem 'faraday'
gem 'faraday_middleware'

gem 'jasmine', :git => 'git://github.com/pivotal/jasmine-gem.git'
### GROUPS ####

group :test do
  gem 'capybara', '~> 1.1.2'
  gem 'cucumber-rails', '1.3.0', :require => false
  gem 'database_cleaner', '0.7.1'

  gem 'timecop'
  gem 'factory_girl_rails', '1.7.0'
  gem 'fixture_builder', '0.3.3'
  gem 'fuubar', '>= 1.0'
  gem 'rspec-instafail', '>= 0.1.7', :require => false
  gem 'selenium-webdriver', '2.22.1'

  gem 'webmock', '~> 1.7', :require => false

  gem 'spork', '~> 1.0rc2'
  gem 'guard-rspec'
  gem 'guard-spork'
  gem 'guard-cucumber'

end

group :test, :development do
  gem 'debugger', :platforms => :mri_19
  gem "rspec-rails", "~> 2.10" 
  gem 'ruby-debug', :platforms => :mri_18
end

group :development do
  gem 'heroku'
  gem 'heroku_san', '3.0.1', :platforms => :mri_19
  gem 'capistrano', :require => false
  gem 'capistrano_colors', :require => false
  gem 'capistrano-ext', :require => false
  gem 'linecache', '0.46', :platforms => :mri_18
  gem 'yard', :require => false

  # for tracing AR object instantiation and memory usage per request
  gem 'oink'
end

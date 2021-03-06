Package.describe({
  summary: "Twilio API Wrapper for Meteor",
  name: "twilio-meteor-2.1.0"
});

Npm.depends({ "twilio": "2.1.0" });

Package.on_use(function(api) {
  if (api.export) api.export('Twilio', 'server');	
  api.add_files('twilio_npm.js', 'server');
});


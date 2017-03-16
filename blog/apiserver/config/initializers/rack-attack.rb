if Rails.env.production?
  class Rack::Attack
    Rack::Attack.throttle('req/ip', :limit => 2, :period => 1.second) do |req|
      req.ip
    end
  end
end

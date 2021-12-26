class AuthenticationTokenService

    HMAC_SECRET = ENV['JWT_SECRET']
    ALGO = ENV['JWT_ALGO']

    def self.encode(user)
        exp = (60).minutes.from_now.to_i
        payload = { 
            id: user[:id], 
            email: user[:email], 
            password: user[:password], 
            name: user[:name] 
        }
        payload[:exp] = exp
        
        JWT.encode payload, HMAC_SECRET, ALGO
    end

    def self.decode(token)
        payload = JWT.decode(token, HMAC_SECRET, true, { algorithm: ALGO })[0]
        HashWithIndifferentAccess.new payload
    end
end
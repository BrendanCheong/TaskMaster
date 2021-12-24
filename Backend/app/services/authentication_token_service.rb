class AuthenticationTokenService

    HMAC_SECRET = 'superSecretKey'
    ALGO = 'HS256'

    def self.call(user)
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
end
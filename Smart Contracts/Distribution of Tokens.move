import Move

// Define the token struct.
struct Token {
    // The name of the token.
    name: String,
    // The total supply of tokens.
    supply: u64,
    // The balance of each account.
    balances: map<Address, u64>,
}

// Define the contract interface.
public contract TokenDistribution {

    // A list of supported tokens.
    public var tokens: [Token];

    // The contract constructor.
    public init(tokens: [Token]) {
        self.tokens = tokens;
    }

    // Distribute tokens to a list of accounts.
    public func distribute(tokens: [Token], accounts: [Address], amounts: [u64]) {
        assert(amounts.length() == accounts.length());

        // Iterate over the tokens, accounts, and amounts, and transfer the corresponding
        // amount of tokens to each account.
        for i in 0..<tokens.length() {
            let token = tokens[i];
            for j in 0..<accounts.length() {
                token.transfer(accounts[j], amounts[j]);
            }
        }
    }
}

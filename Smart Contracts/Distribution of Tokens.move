import 0x1::Signer;
import 0x1::Account;

module TokenModule {
    // Define the token struct.
    struct Token {
        // The name of the token.
        name: String,
        // The total supply of tokens.
        supply: u64,
        // The balance of each account.
        balances: map<Signer, u64>,
    }

    // Transfer tokens from one account to another.
    public fun transfer(token: &mut Token, sender: &Signer, recipient: &Signer, amount: u64): bool {
        // Ensure that the sender has enough balance.
        if token.balances.contains(sender) && token.balances[sender] >= amount {
            // Update sender's balance.
            token.balances[sender] = token.balances[sender] - amount;
            // Update recipient's balance.
            token.balances[recipient] = token.balances[recipient] + amount;
            return true;
        }
        return false;
    }
}

// Define the contract interface.
public module TokenDistribution {
    // A list of supported tokens.
    public var tokens: vector<TokenModule::Token>;

    // The contract constructor.
    public fun init(tokens: vector<TokenModule::Token>) {
        TokenDistribution::tokens = tokens;
    }

    // Distribute tokens to a list of accounts.
    public fun distribute(accounts: vector<Signer>, amounts: vector<u64>) {
        assert(accounts.length() == amounts.length());

        // Create a map to store the updated balances of the accounts.
        let mut balances: map<Signer, u64> = map();

        // Iterate over the tokens and accounts in parallel.
        for (i, token) in TokenDistribution::tokens.enumerate() {
            for (j, account) in accounts.enumerate() {
                // Update the balance in the map.
                balances[account] = balances.get(account).unwrap_or(0) + amounts[j];
            }
        }

        // Apply the updated balances to the tokens.
        for (i, token) in TokenDistribution::tokens.enumerate() {
            for (account, balance) in balances.iter() {
                TokenModule::transfer(token, &signer, account, balance);
            }
        }
    }
}

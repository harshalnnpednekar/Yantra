from web3 import Web3
import os

class YantraWallet:
    def __init__(self, provider_url: str = "http://127.0.0.1:8545"):
        self.w3 = Web3(Web3.HTTPProvider(provider_url))
        self.account = None

    def create_account(self):
        """Create a new Ethereum account."""
        self.account = self.w3.eth.account.create()
        return {
            "address": self.account.address,
            "private_key": self.account.key.hex()
        }

    def get_balance(self, address: str) -> float:
        """Get balance of an address in Ether."""
        balance_wei = self.w3.eth.get_balance(address)
        return float(self.w3.from_wei(balance_wei, 'ether'))

    def sign_transaction(self, to_address: str, value_ether: float, private_key: str):
        """Sign a simple value transfer transaction."""
        nonce = self.w3.eth.get_transaction_count(self.w3.to_checksum_address(to_address))
        tx = {
            'nonce': nonce,
            'to': self.w3.to_checksum_address(to_address),
            'value': self.w3.to_wei(value_ether, 'ether'),
            'gas': 21000,
            'gasPrice': self.w3.eth.gas_price,
            'chainId': 1, # Mainnet, change for testnets
        }
        signed_tx = self.w3.eth.account.sign_transaction(tx, private_key)
        return signed_tx.rawTransaction.hex()

# Example:
# wallet = YantraWallet()
# new_acc = wallet.create_account()
# print(f"New address: {new_acc['address']}")

# Yantra CyberSec & Blockchain

Smart contracts and security utilities for hackathons.

## 🚀 Blockchain Setup

1.  **Install Hardhat**:
    ```bash
    npm install --save-dev hardhat
    ```

2.  **Compile & Deploy**:
    ```bash
    npx hardhat compile
    npx hardhat run scripts/deploy.js
    ```

## 🔐 Security Utilities

- **Encryption**: AES-256 implementation in `security/encryption.py`.
- **Scanner**: Port scanner and header checker in `security/scanner.py`.
- **Wallet**: Web3.py wallet manager in `utils/wallet.py`.

## 📄 Contracts
- `YantraToken.sol`: Standard ERC-20 token.
- `Voting.sol`: On-chain voting mechanism.

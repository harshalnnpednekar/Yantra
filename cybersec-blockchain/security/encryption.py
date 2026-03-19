from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives import padding
from cryptography.hazmat.backends import default_backend
import os
import base64

class AESCipher:
    def __init__(self, key: str):
        self.key = key.encode('utf-8')
        if len(self.key) != 32:
            raise ValueError("Key must be 32 bytes (256 bits)")

    def encrypt(self, plain_text: str) -> str:
        iv = os.urandom(16)
        cipher = Cipher(algorithms.AES(self.key), modes.CBC(iv), backend=default_backend())
        encryptor = cipher.encryptor()
        
        padder = padding.PKCS7(128).padder()
        padded_data = padder.update(plain_text.encode()) + padder.finalize()
        
        cipher_text = encryptor.update(padded_data) + encryptor.finalize()
        return base64.b64encode(iv + cipher_text).decode('utf-8')

    def decrypt(self, encrypted_text: str) -> str:
        data = base64.b64decode(encrypted_text)
        iv = data[:16]
        cipher_text = data[16:]
        
        cipher = Cipher(algorithms.AES(self.key), modes.CBC(iv), backend=default_backend())
        decryptor = cipher.decryptor()
        
        padded_data = decryptor.update(cipher_text) + decryptor.finalize()
        
        unpadder = padding.PKCS7(128).unpadder()
        return (unpadder.update(padded_data) + unpadder.finalize()).decode('utf-8')

# Example Usage:
# cipher = AESCipher("this-is-a-32-byte-long-secret-key")
# encrypted = cipher.encrypt("Secret Hackathon Idea")
# decrypted = cipher.decrypt(encrypted)

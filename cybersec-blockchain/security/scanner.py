import socket
import requests
from typing import List, Dict

class BasicScanner:
    def __init__(self, target: str):
        self.target = target

    def scan_ports(self, ports: List[int]) -> Dict[int, str]:
        """Check if specific ports are open on the target host."""
        results = {}
        for port in ports:
            sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            sock.settimeout(1)
            result = sock.connect_ex((self.target, port))
            results[port] = "OPEN" if result == 0 else "CLOSED"
            sock.close()
        return results

    def check_security_headers(self, url: str) -> Dict[str, bool]:
        """Check for common security headers in a web response."""
        try:
            response = requests.get(url, timeout=5)
            headers = response.headers
            return {
                "X-Frame-Options": "X-Frame-Options" in headers,
                "Content-Security-Policy": "Content-Security-Policy" in headers,
                "Strict-Transport-Security": "Strict-Transport-Security" in headers,
                "X-Content-Type-Options": "X-Content-Type-Options" in headers
            }
        except Exception as e:
            return {"error": str(e)}

# Example:
# scanner = BasicScanner("localhost")
# print(scanner.scan_ports([80, 443, 8000, 8001]))

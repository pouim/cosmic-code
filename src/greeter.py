# src/enterprise/hello_world_factory.py
from typing import Protocol

class GreetingStrategy(Protocol):
    def get_greeting(self) -> str: ...

class StandardGreeting(GreetingStrategy):
    def get_greeting(self) -> str:
        return "Hello, World!"

class GreetingService:
    def __init__(self, strategy: GreetingStrategy):
        self._strategy = strategy

    def greet(self):
        print(self._strategy.get_greeting())

# In main.py
service = GreetingService(StandardGreeting())
service.greet()
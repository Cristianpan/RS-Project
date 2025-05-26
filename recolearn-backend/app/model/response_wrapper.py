class ResponseWrapper:
    def __init__(self, body: dict, status: bool, error: str):
        self.body = body
        self.status = status
        self.error = error
        self.body = body

    def to_dict(self):
        return {"body": self.body, "status": self.status, "error": self.error}
